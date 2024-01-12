"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { redirect } from "next/navigation";

type userInfo = {
  email: string;
  name: string;
  iat: number;
  exp: number;
};

type AuthContextProps = {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const storedToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    );
    setToken(storedToken);
    localStorage.setItem("access_token", storedToken);
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("access_token", newToken);
    redirect("/generate");
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("access_token");
    redirect("/signin");
  };

  const contextValue: AuthContextProps = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

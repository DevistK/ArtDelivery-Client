import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<string | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [mount, isMount] = useState(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const storedToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    );
    setToken(storedToken);
    isMount(true);
  }, []);

  useEffect(() => {
    if (mount) {
      console.log(token);
    }
  }, [mount]);

  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAuthContext = useContext(AuthContext);

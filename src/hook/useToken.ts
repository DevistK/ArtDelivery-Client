import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

const useToken = (): string => {
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
  return token;
};

export default useToken;

"use client";
import { useAuthContext } from "@/context/tokenContext";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Oauth() {
  const { token, login } = useAuthContext();

  useEffect(() => {
    if (token) {
      login(token);
    }
  }, [token]);
  return <div>Loading...</div>;
}

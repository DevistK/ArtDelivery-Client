"use client";

import { OauthGoogleButton } from "@/components/button/oauth.googleButton";
import useToken from "@/hook/useToken";
import { useEffect } from "react";

export default function SignIn() {
  const token = useToken();

  const handleOauth = async (event: any) => {
    event.preventDefault();
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/google/callback`;
  };

  return (
    <div className="btn cursor-pointer" onClick={handleOauth}>
      <OauthGoogleButton />
    </div>
  );
}

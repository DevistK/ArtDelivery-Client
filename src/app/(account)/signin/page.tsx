"use client";

import { OauthGoogleButton } from "@/components/button/oauth.googleButton";
import { useEffect } from "react";

export default function SignIn() {
  const handleOauth = async (event: any) => {
    event.preventDefault();
    window.location.href = `${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/google/callback`;
  };

  return (
    <div className="w-screen h-screen flex flex-col item-center justify-center">
      <div
        className="w-screen flex flex-col justify-center items-center m-auto"
        onClick={handleOauth}
      >
        <h1 className="mb-40 font-bold text-5xl font-roboto">
          Welcome ! Art Delivery 🍕
        </h1>
        <OauthGoogleButton />
      </div>
    </div>
  );
}

"use client";

import { OauthGoogleButton } from "@/components/button/oauth.googleButton";

export default function SignIn() {
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

"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          callbackUrl: `${window.location.origin}/auth`,
        })
      }
    >
      Logout
    </button>
  );
}

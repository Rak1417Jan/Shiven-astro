"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AUTH_STORAGE_KEY } from "@/lib/constants";

/** Routes that do not require auth (landing + auth pages only). */
function isPublic(pathname: string): boolean {
  if (pathname === "/") return true;
  if (pathname === "/login" || pathname === "/signup") return true;
  if (pathname === "/register" || pathname === "/forgot-password" || pathname === "/verify-otp") return true;
  return false;
}

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const auth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!isPublic(pathname) && !auth) {
      window.location.href = "/login";
    }
  }, [pathname]);

  return <>{children}</>;
}

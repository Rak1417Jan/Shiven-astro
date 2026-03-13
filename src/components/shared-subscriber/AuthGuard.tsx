"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AUTH_STORAGE_KEY } from "@/lib/constants";

const PUBLIC_PATHS = ["/login", "/register", "/forgot-password", "/verify-otp"];

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const auth = localStorage.getItem(AUTH_STORAGE_KEY);
    const isPublic = PUBLIC_PATHS.includes(pathname);
    if (!isPublic && !auth) {
      window.location.href = "/login";
    }
  }, [pathname]);

  return <>{children}</>;
}

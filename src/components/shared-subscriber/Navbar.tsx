"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, LogOut, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTH_STORAGE_KEY } from "@/lib/constants";
import { useState } from "react";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/astrologers", label: "Astrologers" },
  { href: "/panchang", label: "Panchang" },
  { href: "/kundali", label: "Kundali" },
  { href: "/help", label: "Help" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" && !!localStorage.getItem(AUTH_STORAGE_KEY)
  );

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/home" className="font-heading text-lg font-bold text-primary">
          Astro
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium ${pathname === href || pathname.startsWith(href + "/") ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/astrologers" aria-label="Search">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          {isLoggedIn && (
            <>
              <Link href="/notifications" aria-label="Notifications">
                <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/profile" aria-label="Profile">
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Logout">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {!isLoggedIn && (
              <Link href="/login" className="text-sm font-medium text-primary" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

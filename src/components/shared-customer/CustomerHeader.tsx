"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bell, ChevronDown, LogOut, Search, User, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTH_STORAGE_KEY } from "@/lib/constants";
import { CUSTOMER_BASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CustomerHeader() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center border-b bg-background px-4">
      <div className="flex w-full items-center gap-4">
        <Link
          href={CUSTOMER_BASE + "/dashboard"}
          className="flex items-center gap-2 shrink-0 font-heading text-lg font-bold text-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">♃</span>
          <span className="hidden sm:inline">Jyotish</span>
        </Link>

        <div className="flex-1 flex justify-center max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search astrologers, services, content..."
              className="w-full rounded-full border border-input bg-muted/50 py-2 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  router.push(`${CUSTOMER_BASE}/astrologers?q=${encodeURIComponent(searchQuery)}`);
                }
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <Link href={CUSTOMER_BASE + "/notifications"} aria-label="Notifications">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                3
              </span>
            </Button>
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen((o) => !o)}
              className="flex items-center gap-2 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-expanded={profileOpen}
              aria-haspopup="true"
              aria-label="Profile menu"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <User className="h-4 w-4 text-primary" />
              </span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", profileOpen && "rotate-180")} />
            </button>

            {profileOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  aria-hidden="true"
                  onClick={() => setProfileOpen(false)}
                />
                <div
                  className="absolute right-0 top-full z-50 mt-1 w-56 rounded-lg border bg-popover py-1 shadow-md"
                  role="menu"
                >
                  <Link
                    href={CUSTOMER_BASE + "/profile"}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => setProfileOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    View Profile
                  </Link>
                  <Link
                    href={CUSTOMER_BASE + "/wallet"}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => setProfileOpen(false)}
                  >
                    <Wallet className="h-4 w-4" />
                    Digital Wallet: ₹2,500
                  </Link>
                  <Link
                    href={CUSTOMER_BASE + "/buy"}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => setProfileOpen(false)}
                  >
                    Purchase History
                  </Link>
                  <Link
                    href={CUSTOMER_BASE + "/profile"}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => setProfileOpen(false)}
                  >
                    Account Settings
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileOpen(false);
                      handleLogout();
                    }}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Users,
  History,
  Calendar,
  Sparkles,
  Video,
  Contact,
  Bell,
  CalendarDays,
  BookOpen,
  FolderOpen,
  Globe,
  CalendarCheck,
  Library,
  MessageCircle,
  Wallet,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { customerNavItems, type CustomerNavItem } from "@/data/customer-nav";
import { AUTH_STORAGE_KEY, CUSTOMER_BASE } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  User,
  Users,
  History,
  Calendar,
  Sparkles,
  Video,
  Contact,
  Bell,
  CalendarDays,
  BookOpen,
  FolderOpen,
  Globe,
  CalendarCheck,
  Library,
  MessageCircle,
  Wallet,
  ShoppingCart,
  LogOut,
};

const iconSize = "h-5 w-5";

function getIcon(iconName: string) {
  const Icon = iconMap[iconName];
  return Icon ? <Icon className={iconSize} /> : null;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/login") return false;
  if (pathname === href) return true;
  if (pathname.startsWith(href + "/")) return true;
  return false;
}

export function CustomerSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = "/login";
  };

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-card md:block">
      <div className="flex h-14 items-center border-b px-4">
        <Link href={CUSTOMER_BASE + "/dashboard"} className="font-heading text-base font-bold text-primary">
          Customer
        </Link>
      </div>
      <nav
        className="flex flex-col gap-0.5 overflow-y-auto p-3"
        style={{ maxHeight: "calc(100dvh - 3.5rem)" }}
        aria-label="Customer menu"
      >
        {customerNavItems.map((item: CustomerNavItem) => {
          const isLogout = item.icon === "LogOut";
          const active = item.href ? isActive(pathname, item.href) : false;

          if (isLogout) {
            return (
              <button
                key={item.label}
                type="button"
                onClick={handleLogout}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-base font-medium transition-colors",
                  "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {getIcon(item.icon)}
                {item.label}
              </button>
            );
          }

          if (item.href) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                  active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {getIcon(item.icon)}
                {item.label}
              </Link>
            );
          }

          return null;
        })}
      </nav>
    </aside>
  );
}

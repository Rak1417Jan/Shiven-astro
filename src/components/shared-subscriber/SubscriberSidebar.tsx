"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import {
  LayoutDashboard,
  User,
  Briefcase,
  CalendarDays,
  BookOpen,
  FolderOpen,
  Video,
  Calendar,
  CalendarClock,
  Coins,
  Package,
  FileText,
  Users,
  Megaphone,
  ShoppingCart,
  RefreshCw,
  Image,
  Library,
  Star,
  MessageSquare,
  FileEdit,
  GitBranch,
  Contact,
  Target,
  MapPin,
  BarChart3,
  CalendarCheck,
  MessageCircle,
  Mail,
  List,
  BookUser,
  Bell,
  PieChart,
  HelpCircle,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Folder,
  FileQuestion,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { subscriberNavItems, type NavItem, type NavItemChild } from "@/data/nav";
import { AUTH_STORAGE_KEY } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  User,
  Briefcase,
  CalendarDays,
  BookOpen,
  FolderOpen,
  Video,
  Calendar,
  CalendarClock,
  Coins,
  Package,
  FileText,
  Users,
  Megaphone,
  ShoppingCart,
  RefreshCw,
  Image,
  Library,
  Star,
  MessageSquare,
  FileEdit,
  GitBranch,
  Contact,
  Target,
  MapPin,
  BarChart3,
  CalendarCheck,
  MessageCircle,
  Mail,
  List,
  BookUser,
  Bell,
  PieChart,
  HelpCircle,
  Settings,
  LogOut,
  Folder,
  FileQuestion,
};

const iconSize = "h-5 w-5";

function getIcon(iconName: string) {
  const Icon = iconMap[iconName];
  return Icon ? <Icon className={iconSize} /> : null;
}

function isActive(pathname: string, href: string, item: NavItem): boolean {
  if (href === "/login") return false;
  if (pathname === href) return true;
  if (pathname.startsWith(href + "/")) return true;
  if ("children" in item && item.children) {
    const childActive = item.children.some((c) => c.href !== "/coming-soon" && (pathname === c.href || pathname.startsWith(c.href + "/")));
    if (childActive) return true;
  }
  return false;
}

export function SubscriberSidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const open = new Set<string>();
    subscriberNavItems.forEach((item) => {
      if ("children" in item && item.children) {
        const hasActiveChild = item.children.some(
          (c) => c.href !== "/coming-soon" && (pathname === c.href || pathname.startsWith(c.href + "/"))
        );
        if (hasActiveChild) open.add(item.label);
      }
    });
    return open;
  });

  const toggle = useCallback((label: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = "/login";
  };

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-card md:block">
      <div className="flex h-14 items-center border-b px-4">
        <span className="font-heading text-base font-bold text-primary">Subscriber</span>
      </div>
      <nav className="flex flex-col gap-0.5 overflow-y-auto p-3" style={{ maxHeight: "calc(100dvh - 3.5rem)" }}>
        {subscriberNavItems.map((item) => {
          const hasChildren = "children" in item && item.children && item.children.length > 0;
          const href = "href" in item ? item.href : undefined;
          const isLogout = item.icon === "LogOut";
          const active = href ? isActive(pathname, href, item) : false;
          const isOpen = expanded.has(item.label);

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

          if (hasChildren && item.children) {
            return (
              <div key={item.label} className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  {href ? (
                    <>
                      <Link
                        href={href}
                        className={cn(
                          "flex flex-1 items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                          active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {getIcon(item.icon)}
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggle(item.label)}
                        className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Collapse" : "Expand"}
                      >
                        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggle(item.label)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-base font-medium transition-colors",
                        "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                      aria-expanded={isOpen}
                      aria-label={`${item.label}, ${isOpen ? "collapse" : "expand"} submenu`}
                    >
                      {getIcon(item.icon)}
                      {item.label}
                      {isOpen ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
                    </button>
                  )}
                </div>
                {isOpen && (
                  <div className="flex flex-col gap-0.5 pl-2" role="group" aria-label={`${item.label} submenu`}>
                    {item.children.map((child: NavItemChild) => {
                      const childActive = pathname === child.href || (child.href !== "/coming-soon" && pathname.startsWith(child.href + "/"));
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "rounded-md px-3 py-2 pl-6 text-[0.9375rem] font-medium transition-colors",
                            childActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          if (href) {
            return (
              <Link
                key={item.label}
                href={href}
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, GraduationCap, Home, User, Video } from "lucide-react";

const items = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/astrologers", label: "Consult", icon: Video },
  { href: "/panchang", label: "Panchang", icon: Calendar },
  { href: "/learning", label: "Learn", icon: GraduationCap },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background md:hidden">
      <div className="flex justify-around py-2">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-4 py-1 text-xs ${active ? "text-primary" : "text-muted-foreground"}`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

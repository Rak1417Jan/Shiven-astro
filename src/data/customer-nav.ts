/**
 * Customer panel sidebar navigation. All hrefs are under CUSTOMER_BASE.
 */

import { CUSTOMER_BASE } from "@/lib/constants";

export type CustomerNavChild = { label: string; href: string };

export type CustomerNavItem =
  | { label: string; href: string; icon: string; children?: never }
  | { label: string; href?: string; icon: string; children: CustomerNavChild[] };

function path(p: string) {
  return `${CUSTOMER_BASE}${p.startsWith("/") ? p : `/${p}`}`;
}

export const customerNavItems: CustomerNavItem[] = [
  { label: "Dashboard", href: path("/dashboard"), icon: "LayoutDashboard" },
  { label: "Profile", href: path("/profile"), icon: "User" },
  { label: "Service Providers", href: path("/astrologers"), icon: "Users" },
  { label: "Service History", href: path("/bookings"), icon: "History" },
  { label: "Events & Activity", href: path("/bookings"), icon: "Calendar" },
  { label: "AI Features", href: path("/kundali"), icon: "Sparkles" },
  { label: "Voice/Video Call", href: path("/online-astro"), icon: "Video" },
  { label: "Contact Mgmt", href: path("/profile"), icon: "Contact" },
  { label: "Notifications", href: path("/notifications"), icon: "Bell" },
  { label: "Panchang", href: path("/panchang"), icon: "CalendarDays" },
  { label: "Learning", href: path("/learning"), icon: "BookOpen" },
  { label: "Resources", href: path("/resources"), icon: "FolderOpen" },
  { label: "Online Services", href: path("/online-astro"), icon: "Globe" },
  { label: "Appointment/Visit", href: path("/bookings"), icon: "CalendarCheck" },
  { label: "Libraries", href: path("/resources"), icon: "Library" },
  { label: "Queries/Requests", href: path("/online-astro/questions"), icon: "MessageCircle" },
  { label: "Digital Wallet", href: path("/wallet"), icon: "Wallet" },
  { label: "Purchase History", href: path("/buy"), icon: "ShoppingCart" },
  { label: "Logout", href: "/login", icon: "LogOut" },
];

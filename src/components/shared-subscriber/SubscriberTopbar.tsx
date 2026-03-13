"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AUTH_STORAGE_KEY, SUBSCRIBER_BASE } from "@/lib/constants";

const TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/bookings": "Bookings",
  "/schedule": "Schedule",
  "/schedule/availability": "Availability",
  "/schedule/blocked": "Blocked dates",
  "/clients": "Clients",
  "/earnings": "Earnings",
  "/earnings/payout": "Request payout",
  "/profile": "Profile",
  "/profile/services": "Services",
  "/portfolio": "Portfolio",
  "/settings": "Settings",
  "/notifications": "Notifications",
  "/help": "Help",
  "/services": "Services",
  "/panchang": "Panchang",
  "/learning": "Learning",
  "/resources": "Resources",
  "/online-services": "Online Services",
  "/manage-products": "Manage Products",
  "/invoices": "Invoices",
  "/advertising": "Advertising",
  "/purchases": "Purchases",
  "/website-updates": "Website Updates",
  "/libraries": "Libraries",
  "/reviews": "Reviews",
  "/queries-requests": "Queries & Requests",
  "/dynamic-forms": "Dynamic Forms",
  "/referral": "Referral Business",
  "/crm": "CRM",
  "/leads": "Lead Management",
  "/location-tracking": "Location",
  "/reports": "Reports",
  "/events": "Events & Activities",
  "/communications": "Communications",
  "/automailer": "Auto-Mailer",
  "/mailing-list": "Mailing List",
  "/contacts": "Contact Management",
  "/files": "Files & Folder",
  "/analytics": "Analytics & Reports",
  "/service-requests": "Service Request",
};

function getPageTitle(pathname: string): string {
  const rest = pathname.startsWith(SUBSCRIBER_BASE) ? pathname.slice(SUBSCRIBER_BASE.length) || "/" : pathname;
  if (rest.startsWith("/bookings/") && rest !== "/bookings") return "Booking detail";
  if (rest.startsWith("/clients/") && rest !== "/clients") return "Client profile";
  const sorted = Object.entries(TITLES).sort(([a], [b]) => b.length - a.length);
  for (const [path, title] of sorted) {
    if (rest === path || rest.startsWith(path + "/")) return title;
  }
  return "Subscriber";
}

export function SubscriberTopbar() {
  const pathname = usePathname();
  const title = getPageTitle(pathname);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center border-b bg-background px-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-heading text-xl font-semibold">{title}</h1>
        <div className="flex items-center gap-2">
          <Link href={`${SUBSCRIBER_BASE}/notifications`}>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={`${SUBSCRIBER_BASE}/settings`}>
            <Button variant="ghost" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

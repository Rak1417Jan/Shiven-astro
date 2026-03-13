/**
 * Subscriber sidebar navigation config — aligned with UI design Excel.
 * All routes use SUBSCRIBER_BASE so they work under /subscriber/*.
 */

import { SUBSCRIBER_BASE } from "@/lib/constants";

export type NavItemChild = { label: string; href: string };

export type NavItem =
  | { label: string; href: string; icon: string; children?: never }
  | { label: string; href?: string; icon: string; children: NavItemChild[] };

function path(p: string) {
  return `${SUBSCRIBER_BASE}${p.startsWith("/") ? p : `/${p}`}`;
}

export const subscriberNavItems: NavItem[] = [
  { label: "Dashboard", href: path("/dashboard"), icon: "LayoutDashboard" },
  { label: "Profile", href: path("/profile"), icon: "User" },
  {
    label: "Services",
    href: path("/profile/services"),
    icon: "Briefcase",
    children: [
      { label: "Birth Kundali", href: path("/services/birth-kundali") },
      { label: "Match Making", href: path("/services/match-making") },
      { label: "Prashna Kundali", href: path("/services/prashna-kundali") },
      { label: "Daily & Personal Worship", href: path("/services/daily-personal-worship") },
      { label: "Major Hindu Pujas & Homams", href: path("/services/major-pujas-homams") },
      { label: "Domestic & Social Ceremonies", href: path("/services/domestic-social-ceremonies") },
      { label: "Life-Cycle Rituals", href: path("/services/life-cycle-rituals") },
      { label: "Death & Post-Death Rituals", href: path("/services/death-post-death-rituals") },
    ],
  },
  {
    label: "Panchang",
    icon: "CalendarDays",
    children: [
      { label: "Muhurt", href: path("/panchang/muhurt") },
      { label: "Grah / Rashi (Info)", href: path("/panchang/grah-rashi") },
      { label: "Panchang", href: path("/panchang/panchang") },
      { label: "Hindu Calendar", href: path("/panchang/calendar") },
      { label: "Vrat & Upvas", href: path("/panchang/vrat-upvas") },
    ],
  },
  {
    label: "Learning",
    icon: "BookOpen",
    children: [
      { label: "Video Lessons", href: path("/learning/video-lessons") },
      { label: "Myths & Facts", href: path("/learning/myths-facts") },
      { label: "Right & Wrong", href: path("/learning/right-wrong") },
      { label: "Online / Offline Courses", href: path("/learning/courses") },
      { label: "Online Books", href: path("/learning/online-books") },
      { label: "List of Various Practices & Why to do it", href: path("/learning/practices") },
      { label: "Remedies", href: path("/learning/remedies") },
      { label: "Online Shloka Chants", href: path("/learning/shloka-chants") },
    ],
  },
  {
    label: "Resources",
    icon: "FolderOpen",
    children: [
      { label: "Blogs", href: path("/resources/blogs") },
      { label: "Articles", href: path("/resources/articles") },
      { label: "Case Studies", href: path("/resources/case-studies") },
      { label: "Gallery", href: path("/resources/gallery") },
    ],
  },
  {
    label: "Online Services",
    icon: "Video",
    children: [
      { label: "Book Services / Visits", href: path("/bookings") },
      { label: "Voice / Video Consultation", href: path("/online-services/consultation") },
      { label: "Questions (Quara)", href: path("/online-services/questions") },
      { label: "Book Appointment", href: path("/bookings") },
    ],
  },
  { label: "Bookings", href: path("/bookings"), icon: "Calendar" },
  {
    label: "Schedule",
    href: path("/schedule"),
    icon: "CalendarClock",
    children: [
      { label: "Schedule", href: path("/schedule") },
      { label: "Availability", href: path("/schedule/availability") },
      { label: "Blocked dates", href: path("/schedule/blocked") },
    ],
  },
  { label: "Income", href: path("/earnings"), icon: "Coins" },
  { label: "Manage Products", href: path("/manage-products"), icon: "Package" },
  { label: "Invoices", href: path("/invoices"), icon: "FileText" },
  { label: "Customer List", href: path("/clients"), icon: "Users" },
  { label: "Advertising", href: path("/advertising"), icon: "Megaphone" },
  {
    label: "Purchases",
    icon: "ShoppingCart",
    children: [
      { label: "Digital Wallet", href: path("/purchases/wallet") },
      { label: "Retail Purchase", href: path("/purchases/retail") },
      { label: "My Subscriptions", href: path("/purchases/subscriptions") },
    ],
  },
  {
    label: "Website Updates",
    icon: "RefreshCw",
    children: [
      { label: "Reels", href: path("/website-updates/reels") },
      { label: "Podcasts", href: path("/website-updates/podcasts") },
      { label: "Online Books", href: path("/website-updates/online-books") },
      { label: "Online / Offline Services", href: path("/website-updates/services") },
      { label: "Newsletter Subscription", href: path("/website-updates/newsletter") },
    ],
  },
  { label: "Portfolio", href: path("/portfolio"), icon: "Image" },
  { label: "Libraries", href: path("/libraries"), icon: "Library" },
  { label: "Star Rating, Review, Feedback", href: path("/reviews"), icon: "Star" },
  { label: "Revert to Queries & Requests", href: path("/queries-requests"), icon: "MessageSquare" },
  { label: "Dynamic Forms", href: path("/dynamic-forms"), icon: "FileEdit" },
  { label: "Referral Business", href: path("/referral"), icon: "GitBranch" },
  { label: "CRM", href: path("/crm"), icon: "Contact" },
  { label: "Lead Management", href: path("/leads"), icon: "Target" },
  { label: "Location Sharing / Tracking", href: path("/location-tracking"), icon: "MapPin" },
  { label: "Generate Reports", href: path("/reports"), icon: "BarChart3" },
  {
    label: "Events & Activities",
    icon: "CalendarCheck",
    children: [
      { label: "Job Fair", href: path("/events/job-fair") },
      { label: "Counseling webinars", href: path("/events/webinars") },
      { label: "Event registration & reminders", href: path("/events/registration") },
      { label: "Live Sessions", href: path("/events/live-sessions") },
    ],
  },
  {
    label: "Communications",
    icon: "MessageCircle",
    children: [
      { label: "Manual Message", href: path("/communications/manual") },
      { label: "Scheduled Message", href: path("/communications/scheduled") },
      { label: "Whatsapp chatbot", href: path("/communications/whatsapp") },
      { label: "Templates Based Updates", href: path("/communications/templates") },
    ],
  },
  { label: "Auto-Mailer System", href: path("/automailer"), icon: "Mail" },
  { label: "Mailing List", href: path("/mailing-list"), icon: "List" },
  { label: "Contact Management", href: path("/contacts"), icon: "BookUser" },
  { label: "Notifications", href: path("/notifications"), icon: "Bell" },
  { label: "Files & Folder", href: path("/files"), icon: "Folder" },
  { label: "Analytics & Reports", href: path("/analytics"), icon: "PieChart" },
  { label: "Service Request", href: path("/service-requests"), icon: "FileQuestion" },
  { label: "Settings", href: path("/settings"), icon: "Settings" },
  { label: "Help", href: path("/help"), icon: "HelpCircle" },
  { label: "Logout", href: "/login", icon: "LogOut" },
];

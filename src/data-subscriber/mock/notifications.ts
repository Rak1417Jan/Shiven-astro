import type { NotificationItem } from "@/types/subscriber";

export const mockNotifications: NotificationItem[] = [
  {
    id: "n1",
    title: "New booking request",
    message: "Amit Kumar requested Birth Chart Analysis for Mar 1, 2:00 PM.",
    time: "5 min ago",
    read: false,
    link: "/subscriber/bookings/sb1",
  },
  {
    id: "n2",
    title: "Payout processed",
    message: "₹5,200 has been transferred to your account.",
    time: "1 day ago",
    read: true,
    link: "/subscriber/earnings",
  },
];

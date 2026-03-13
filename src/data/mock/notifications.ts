import type { NotificationItem } from "@/types/subscriber";

export const mockNotifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Booking confirmed",
    message: "Your session with Pandit Rajesh Sharma on Mar 1 at 2:00 PM is confirmed.",
    time: "5 min ago",
    read: false,
    link: "/bookings/b1",
  },
  {
    id: "n2",
    title: "Reminder",
    message: "Your consultation with Pandit Mahesh Joshi starts in 1 hour.",
    time: "1 hour ago",
    read: true,
    link: "/bookings/b2",
  },
  {
    id: "n3",
    title: "Wallet credited",
    message: "₹500 has been added to your wallet.",
    time: "Yesterday",
    read: true,
    link: "/wallet",
  },
];

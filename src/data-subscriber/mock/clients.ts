import type { Client } from "@/types/subscriber";

export const mockClients: Client[] = [
  { id: "c1", name: "Amit Kumar", lastVisit: "2026-02-28", totalBookings: 5, segment: "VIP" },
  { id: "c2", name: "Priya Sharma", lastVisit: "2026-03-01", totalBookings: 1, segment: "New" },
  { id: "c3", name: "Ravi Mehta", lastVisit: "2026-02-20", totalBookings: 3, segment: "Regular" },
];

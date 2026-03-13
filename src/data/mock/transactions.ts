import type { Transaction } from "@/types/subscriber";

export const mockTransactions: Transaction[] = [
  { id: "t1", type: "credit", amount: 500, description: "Added to wallet", date: "2026-02-24T10:00:00" },
  { id: "t2", type: "debit", amount: 499, description: "Booking — Pandit Rajesh Sharma", date: "2026-02-24T14:30:00" },
  { id: "t3", type: "debit", amount: 499, description: "Booking — Pandit Mahesh Joshi", date: "2026-02-20T11:00:00" },
  { id: "t4", type: "credit", amount: 1000, description: "Added to wallet", date: "2026-02-18T09:00:00" },
];

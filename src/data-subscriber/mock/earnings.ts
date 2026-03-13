import type { EarningEntry } from "@/types/subscriber";

export const mockEarningsStats = {
  today: 1278,
  thisMonth: 24500,
  pendingSettlement: 5200,
};

export const mockEarningEntries: EarningEntry[] = [
  { id: "e1", date: "2026-02-25", amount: 399, bookingId: "sb1", description: "Birth Chart — Amit Kumar" },
  { id: "e2", date: "2026-02-24", amount: 639, bookingId: "sb2", description: "Career — Priya Sharma" },
  { id: "e3", date: "2026-02-23", amount: 319, bookingId: "sb3", description: "Match Making — Ravi Mehta" },
];

export const mockEarningsChartData = Array.from({ length: 30 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (29 - i));
  return { date: d.toISOString().slice(0, 10), amount: Math.round(300 + Math.random() * 500) };
});

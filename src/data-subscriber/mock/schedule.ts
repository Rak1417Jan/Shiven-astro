import type { AvailabilityDay, BlockedDate } from "@/types/subscriber";

export const mockAvailability: AvailabilityDay[] = [
  { day: "mon", enabled: true, start: "09:00", end: "18:00" },
  { day: "tue", enabled: true, start: "09:00", end: "18:00" },
  { day: "wed", enabled: true, start: "09:00", end: "18:00" },
  { day: "thu", enabled: true, start: "09:00", end: "18:00" },
  { day: "fri", enabled: true, start: "09:00", end: "18:00" },
  { day: "sat", enabled: true, start: "10:00", end: "14:00" },
  { day: "sun", enabled: false, start: "09:00", end: "18:00" },
];

export const mockBlockedDates: BlockedDate[] = [
  { id: "bd1", start: "2026-03-10", end: "2026-03-12", reason: "Personal leave" },
];

export const mockScheduleSlots = [
  { date: "2026-03-01", time: "11:00", customerName: "Priya Sharma", service: "Kundali Reading", status: "confirmed" },
  { date: "2026-03-01", time: "14:00", customerName: "Amit Kumar", service: "Birth Chart", status: "pending" },
  { date: "2026-03-01", time: "15:00", customerName: null, service: null, status: "free" },
];

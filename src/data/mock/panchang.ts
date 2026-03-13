import type { PanchangDay } from "@/types/subscriber";

export const mockPanchangToday: PanchangDay = {
  date: "2026-02-25",
  tithi: "Krishna Paksha Dashami",
  nakshatra: "Uttara Phalguni",
  yoga: "Siddha",
  karana: "Vanija",
  paksha: "Krishna",
  sunrise: "6:52 AM",
  sunset: "6:35 PM",
  moonrise: "11:42 PM",
  moonset: "10:18 AM",
  rahuKaal: { start: "3:00 PM", end: "4:30 PM" },
  muhurats: [
    { name: "Abhijit Muhurat", start: "12:15 PM", end: "1:00 PM", type: "auspicious" },
    { name: "Amrit Kalam", start: "9:30 AM", end: "11:00 AM", type: "auspicious" },
  ],
  festivals: [
    { name: "Maha Shivaratri", description: "Night of Lord Shiva", date: "2026-02-26" },
  ],
};

export function getPanchangForDate(_date: string): PanchangDay {
  return { ...mockPanchangToday, date: _date };
}

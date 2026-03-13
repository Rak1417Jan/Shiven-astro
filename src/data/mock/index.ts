export { mockAstrologers } from "./astrologers";
export { mockBookings } from "./bookings";
export { mockCustomer } from "./customer";
export { mockPanchangToday, getPanchangForDate } from "./panchang";
export { mockKundaliChart } from "./kundali";
export { mockNotifications } from "./notifications";
export { mockTransactions } from "./transactions";

export {
  mockSubscriberBookings,
  mockClients,
  mockEarningsStats,
  mockEarningEntries,
  mockEarningsChartData,
  mockAvailability,
  mockBlockedDates,
  mockScheduleSlots,
  mockSubscriberServices,
} from "@/data-subscriber/mock";

export const MOCK_WALLET_BALANCE = 1502;
export const MOCK_REPORTS = [
  { id: "r1", title: "Birth Chart Report", type: "Birth Chart", date: "2026-02-20" },
  { id: "r2", title: "Compatibility Report", type: "Match Making", date: "2026-02-15" },
];
export const MOCK_ADDRESSES = [
  { id: "ad1", label: "Home", line1: "123 Main St", line2: "Apt 4", city: "Mumbai", state: "Maharashtra", pincode: "400001", isDefault: true },
  { id: "ad2", label: "Work", line1: "456 Office Park", city: "Mumbai", state: "Maharashtra", pincode: "400002", isDefault: false },
];

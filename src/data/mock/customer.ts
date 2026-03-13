import type { Customer } from "@/types/subscriber";

export const mockCustomer: Customer = {
  id: "c1",
  name: "Demo User",
  email: "demo@example.com",
  phone: "+91 98765 43210",
  birthDetails: {
    dob: "1990-05-15",
    birthTime: "10:30",
    birthPlace: "Mumbai, Maharashtra",
  },
  languagePreference: "Hindi",
};

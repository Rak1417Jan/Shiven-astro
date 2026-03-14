/**
 * Shared type definitions for the unified astro platform.
 * Covers both customer-facing (Astrologer, Booking, Customer, etc.)
 * and subscriber/astrologer-dashboard types.
 */

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export type ServiceType = "video" | "voice" | "chat" | "report";

export type BookingStatus = "PENDING" | "CONFIRMED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";

// ---------------------------------------------------------------------------
// Astrologer / Subscriber profile
// ---------------------------------------------------------------------------

export interface AstrologerService {
  id: string;
  name: string;
  type: ServiceType;
  durationMinutes: number;
  price: number;
  active?: boolean;
}

export interface Astrologer {
  id: string;
  slug: string;
  name: string;
  photo?: string;
  coverImage?: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  totalBookings: number;
  experience: number;
  specializations: string[];
  languages: string[];
  bio: string;
  isOnline: boolean;
  isAvailableNow: boolean;
  priceFrom: number;
  kycVerified: boolean;
  services: AstrologerService[];
}

// ---------------------------------------------------------------------------
// Customer
// ---------------------------------------------------------------------------

export interface BirthDetails {
  dob: string;
  birthTime?: string;
  birthPlace?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDetails?: BirthDetails;
  languagePreference?: string;
}

// ---------------------------------------------------------------------------
// Booking
// ---------------------------------------------------------------------------

export interface Booking {
  id: string;
  astrologerId: string;
  astrologerName: string;
  astrologerPhoto?: string;
  serviceName: string;
  serviceType: ServiceType;
  scheduledAt: string;
  amount: number;
  status: BookingStatus;
  customerName: string;
  customerNotes?: string;
  birthDetails?: BirthDetails;
}

// ---------------------------------------------------------------------------
// Subscriber (astrologer-side) types
// ---------------------------------------------------------------------------

export interface SubscriberBooking {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone?: string;
  customerEmail?: string;
  serviceName: string;
  serviceType: ServiceType;
  scheduledAt: string;
  amount: number;
  netEarning: number;
  status: BookingStatus;
  birthDetails?: BirthDetails;
  customerNotes?: string;
}

export interface SubscriberService {
  id: string;
  name: string;
  type: ServiceType;
  durationMinutes: number;
  price: number;
  active: boolean;
}

export interface Client {
  id: string;
  name: string;
  lastVisit: string;
  totalBookings: number;
  segment: string;
  phone?: string;
  service?: string;
  location?: string;
}

export interface EarningEntry {
  id: string;
  date: string;
  amount: number;
  bookingId: string;
  description: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  link?: string;
}

export interface AvailabilityDay {
  day: string;
  enabled: boolean;
  start: string;
  end: string;
}

export interface BlockedDate {
  id: string;
  start: string;
  end: string;
  reason?: string;
}

// ---------------------------------------------------------------------------
// Kundali / Panchang
// ---------------------------------------------------------------------------

export interface Planet {
  name: string;
  sign: string;
  degree: string;
  nakshatra: string;
  house: number;
}

export interface KundaliChart {
  planets: Planet[];
  rulingPlanet: string;
  reportSnippet: string;
}

export interface Muhurat {
  name: string;
  start: string;
  end: string;
  type: "auspicious" | "inauspicious" | string;
}

export interface Festival {
  name: string;
  description: string;
  date: string;
}

export interface PanchangDay {
  date: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  paksha: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  rahuKaal: { start: string; end: string };
  muhurats: Muhurat[];
  festivals: Festival[];
}

// ---------------------------------------------------------------------------
// Wallet / Transactions
// ---------------------------------------------------------------------------

export interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
}

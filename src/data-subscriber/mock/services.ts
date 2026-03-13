import type { SubscriberService } from "@/types/subscriber";

export const mockSubscriberServices: SubscriberService[] = [
  { id: "s1", name: "Birth Chart Analysis", type: "video", durationMinutes: 30, price: 499, active: true },
  { id: "s2", name: "Match Making", type: "voice", durationMinutes: 20, price: 399, active: true },
  { id: "s3", name: "Career Guidance", type: "chat", durationMinutes: 15, price: 299, active: false },
];

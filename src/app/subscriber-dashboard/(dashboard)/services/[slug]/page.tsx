"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesStatic } from "@/data/staticPages";

const LABELS: Record<string, string> = {
  "birth-kundali": "Birth Kundali",
  "match-making": "Match Making",
  "prashna-kundali": "Prashna Kundali",
  "daily-personal-worship": "Daily & Personal Worship",
  "major-pujas-homams": "Major Hindu Pujas & Homams",
  "domestic-social-ceremonies": "Domestic & Social Ceremonies",
  "life-cycle-rituals": "Life-Cycle Rituals",
  "death-post-death-rituals": "Death & Post-Death Rituals",
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const fallbackTitle = LABELS[slug] ?? "Astrology Service";
  const stored = servicesStatic[slug] as
    | { title: string; description?: string; items: { name: string; duration?: string; price: string }[] }
    | undefined;

  const title = stored?.title ?? fallbackTitle;
  const description =
    stored?.description ??
    "Static preview of how this service will be presented to your customers on the platform.";

  const items =
    stored?.items ??
    [
      { name: `${fallbackTitle} – Basic`, duration: "30 min", price: "₹500" },
      { name: `${fallbackTitle} – Detailed`, duration: "60 min", price: "₹900" },
    ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-xl font-semibold">{title}</h1>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Offerings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  {item.duration && <p className="text-sm text-muted-foreground">{item.duration}</p>}
                </div>
                <span className="font-semibold text-primary">{item.price}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}


"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { panchangStatic } from "@/data/staticPages";

const LABELS: Record<string, string> = {
  muhurt: "Muhurt (Auspicious Timings)",
  "grah-rashi": "Grah / Rashi (Planet & Sign Info)",
  panchang: "Daily Panchang",
  calendar: "Hindu Calendar",
  "vrat-upvas": "Vrat & Upvas",
};

export default function PanchangPage() {
  const params = useParams();
  const slug = params.slug as string;
  const stored = panchangStatic[slug] as
    | { title: string; subtitle?: string; rows: { label: string; value: string }[] }
    | undefined;

  const title = stored?.title ?? LABELS[slug] ?? "Panchang";
  const subtitle =
    stored?.subtitle ??
    "Static Panchang preview for demonstration. In production this will show live daily data.";
  const rows =
    stored?.rows ??
    [
      { label: "Tithi", value: "Shukla Paksha · Tritiya" },
      { label: "Nakshatra", value: "Rohini" },
      { label: "Yoga", value: "Siddhi" },
      { label: "Karana", value: "Bava" },
    ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-xl font-semibold">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-3">
            {rows.map((row, i) => (
              <div key={i} className="flex justify-between gap-4 border-b pb-3 last:border-0 last:pb-0">
                <dt className="text-muted-foreground">{row.label}</dt>
                <dd className="font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}

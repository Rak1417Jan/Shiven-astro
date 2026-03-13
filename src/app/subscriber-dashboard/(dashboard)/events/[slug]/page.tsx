"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { eventsStatic } from "@/data/staticPages";

const LABELS: Record<string, string> = {
  "job-fair": "Job Fair",
  webinars: "Counseling webinars",
  registration: "Event registration & reminders",
  "live-sessions": "Live Sessions",
};

export default function EventsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const stored = eventsStatic[slug] as
    | { title: string; items: { title: string; date: string; status: string }[] }
    | undefined;

  const title = stored?.title ?? LABELS[slug] ?? "Events & Activities";
  const items =
    stored?.items ??
    [
      { title: `${title} – sample event`, date: "Mar 20, 2026 · 6:00 PM", status: "Upcoming" },
      { title: `${title} – sample event 2`, date: "Mar 27, 2026 · 7:30 PM", status: "Upcoming" },
    ];

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">{title}</h1>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <Card key={i}>
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              <Badge variant="secondary">{item.status}</Badge>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}


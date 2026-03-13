"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { communicationsStatic } from "@/data/staticPages";

const LABELS: Record<string, string> = {
  manual: "Manual Message",
  scheduled: "Scheduled Message",
  whatsapp: "Whatsapp chatbot",
  templates: "Templates Based Updates",
};

export default function CommunicationsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const stored = communicationsStatic[slug] as
    | { title: string; items: { to: string; preview: string; date: string }[] }
    | undefined;

  const title = stored?.title ?? LABELS[slug] ?? "Communications";
  const items =
    stored?.items ??
    [
      { to: "Sample customer", preview: `${title} example message preview`, date: "—" },
      { to: "Mailing list A", preview: `${title} example scheduled/bulk message`, date: "—" },
    ];

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">{title}</h1>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <p className="font-medium">{item.to}</p>
              <p className="text-sm text-muted-foreground">{item.preview}</p>
              {item.date !== "—" && <p className="mt-1 text-xs text-muted-foreground">{item.date}</p>}
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}


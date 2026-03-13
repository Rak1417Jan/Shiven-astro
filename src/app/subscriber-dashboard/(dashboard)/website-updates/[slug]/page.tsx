"use client";

import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { websiteUpdatesStatic } from "@/data/staticPages";

const SLUGS = ["reels", "podcasts", "online-books", "services", "newsletter"];

export default function WebsiteUpdatesPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = slug && SLUGS.includes(slug) ? websiteUpdatesStatic[slug] : null;

  if (!data) {
    return (
      <div className="space-y-4">
        <h1 className="font-heading text-xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">The requested page does not exist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">{data.title}</h1>
      <ul className="space-y-3">
        {data.items.map((item, i) => (
          <Card key={i}>
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.type}{item.date ? ` · ${item.date}` : ""}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}

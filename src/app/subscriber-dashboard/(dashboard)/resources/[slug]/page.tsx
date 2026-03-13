"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resourcesStatic } from "@/data/staticPages";

const LABELS: Record<string, string> = {
  blogs: "Blogs",
  articles: "Articles",
  "case-studies": "Case Studies",
  gallery: "Gallery",
};

export default function ResourcesPage() {
  const params = useParams();
  const slug = params.slug as string;
  const stored = resourcesStatic[slug] as
    | { title: string; items: { title: string; date: string; excerpt: string }[] }
    | undefined;

  const title = stored?.title ?? LABELS[slug] ?? "Resources";
  const items =
    stored?.items ??
    [
      { title: `${title} sample entry`, date: "—", excerpt: "Static example of how your content will appear." },
      { title: `${title} sample entry 2`, date: "—", excerpt: "Replace this with your real posts and media." },
    ];

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">{title}</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.title}</CardTitle>
              {item.date !== "—" && <p className="text-sm text-muted-foreground">{item.date}</p>}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

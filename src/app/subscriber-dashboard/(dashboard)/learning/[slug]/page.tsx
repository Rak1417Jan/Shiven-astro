"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { learningStatic } from "@/data/staticPages";

const LABELS: Record<string, string> = {
  "video-lessons": "Video Lessons",
  "myths-facts": "Myths & Facts",
  "right-wrong": "Right & Wrong",
  courses: "Online / Offline Courses",
  "online-books": "Online Books",
  practices: "List of Various Practices & Why to do it",
  remedies: "Remedies",
  "shloka-chants": "Online Shloka Chants",
};

export default function LearningPage() {
  const params = useParams();
  const slug = params.slug as string;
  const stored = learningStatic[slug] as
    | { title: string; items: { title: string; type: string; duration?: string }[] }
    | undefined;

  const title = stored?.title ?? LABELS[slug] ?? "Learning";
  const items =
    stored?.items ??
    [
      { title: `${title} – Intro session`, type: "Video", duration: "15 min" },
      { title: `${title} – Deep dive`, type: "Article", duration: "10 min read" },
    ];

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">{title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.type}{item.duration ? ` · ${item.duration}` : ""}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

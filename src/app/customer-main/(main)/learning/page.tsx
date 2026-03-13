import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Learning Hub | Astro Platform",
  description: "Video lessons, myths & facts, courses, books, and remedies — learn Vedic astrology and related practices.",
};

const learningSections = [
  {
    title: "Video Lessons",
    description:
      "Short, structured videos to understand basic and advanced concepts of Vedic astrology, Vastu, and related practices.",
    status: "Coming soon",
  },
  {
    title: "Myths & Facts",
    description:
      "Separate common misconceptions from authentic, text‑backed guidance so customers can make informed choices.",
    status: "In planning",
  },
  {
    title: "Right & Wrong Practices",
    description:
      "Gentle guidance on do’s and don’ts around remedies, pooja, and daily rituals – what to follow and what to avoid.",
    status: "Coming soon",
  },
  {
    title: "Online / Offline Courses",
    description:
      "Long‑form learning paths for serious students of astrology and Vastu, with certification options.",
    status: "Coming soon",
  },
  {
    title: "Online Books",
    description:
      "Curated list of recommended classics and beginner‑friendly books you can read online or purchase.",
    status: "Curation in progress",
  },
  {
    title: "Practices & Remedies",
    description:
      "Background and rationale behind different remedies so users understand why a practice is suggested.",
    status: "Coming soon",
  },
];

export default function LearningPage() {
  const breadcrumbs = [{ label: "Learning", href: "/learning" }];

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Learning Hub
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          A structured place for customers who want to go beyond one‑time
          consultations and actually learn the principles behind astrology,
          Panchang, and remedies.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {learningSections.map((section) => (
          <Card key={section.title}>
            <CardContent className="space-y-2 p-4">
              <h2 className="text-sm font-semibold md:text-base">
                {section.title}
              </h2>
              <p className="text-xs text-muted-foreground md:text-sm">
                {section.description}
              </p>
              {section.status && (
                <p className="text-[11px] font-medium text-primary/80">
                  {section.status}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-lg border bg-muted/20 p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Want one-on-one guidance while you learn?
        </p>
        <Button asChild className="mt-2">
          <Link href="/customer/astrologers">Book a consultation</Link>
        </Button>
      </section>
    </div>
  );
}


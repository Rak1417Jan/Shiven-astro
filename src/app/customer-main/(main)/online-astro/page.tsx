import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Online Astro | Astro Platform",
  description: "Book appointments, voice or video consultations, and ask questions to expert astrologers.",
};

const options = [
  {
    title: "Book Appointment",
    description:
      "Choose an astrologer, select a service, and book a convenient time slot for voice or video consultation.",
    href: "/astrologers",
    cta: "Find astrologers",
  },
  {
    title: "Voice / Video Consultation",
    description:
      "Have in‑depth discussions on career, relationships, finances, and more over secure call or video.",
    href: "/bookings",
    cta: "View upcoming calls",
  },
  {
    title: "Ask a Question (Q&A)",
    description:
      "Post specific questions and get expert guidance from our astrologers.",
    href: "/online-astro/questions",
    cta: "Ask a question",
  },
];

export default function OnlineAstroPage() {
  const breadcrumbs = [{ label: "Online Astro", href: "/online-astro" }];

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Online Astro Services
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Book voice or video consultations, manage your appointments, and soon,
          ask public or private questions to our community of astrologers.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {options.map((o) => (
          <Card key={o.title} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col justify-between p-4">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold md:text-base">
                  {o.title}
                </h2>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {o.description}
                </p>
              </div>
              <div className="mt-4">
                <Button asChild size="sm" className="w-full">
                  <Link href={o.href}>{o.cta}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


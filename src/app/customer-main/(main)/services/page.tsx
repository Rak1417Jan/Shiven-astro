import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Services | Astro Platform",
  description: "Birth Kundali, Match Making, Prashna Kundali — explore astrology services with verified astrologers.",
};

const services = [
  {
    slug: "birth-kundali",
    title: "Birth Kundali",
    description:
      "Get a detailed natal chart with key planetary positions, houses, and life themes based on your exact birth details.",
    ctaHref: "/kundali",
    ctaLabel: "Generate Kundali",
  },
  {
    slug: "match-making",
    title: "Match Making",
    description:
      "Analyze Guna Milan, doshas, and compatibility factors for marriage or long‑term partnerships.",
    ctaHref: "/astrologers?service=match-making",
    ctaLabel: "Consult for match making",
  },
  {
    slug: "prashna-kundali",
    title: "Prashna Kundali",
    description:
      "Ask a specific question when birth details are unavailable and get insights through Prashna (horary) charts.",
    ctaHref: "/astrologers?service=prashna",
    ctaLabel: "Ask a question",
  },
];

export default function ServicesPage() {
  const breadcrumbs = [{ label: "Services", href: "/services" }];

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Services
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Explore our core astrology services – from detailed birth charts to
          match making and prashna based consultations – all powered by verified
          astrologers on Astro Platform.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col justify-between p-4">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold md:text-base">
                  {service.title}
                </h2>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {service.description}
                </p>
              </div>
              <div className="mt-4">
                <Button asChild size="sm" className="w-full">
                  <Link href={service.ctaHref}>{service.ctaLabel}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


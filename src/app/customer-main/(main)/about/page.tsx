import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "About Us | Astro Platform",
  description: "Learn about Astro Platform — vision, verified astrologers, and customer-first astrology guidance.",
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us", href: "/about" }];

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          About Astro Platform
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Astro Platform is a modern digital destination to connect you with
          trusted Vedic astrologers, access authentic Panchang and Kundali
          insights, and explore curated learning resources around astrology,
          Vastu, and related practices.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <h2 className="mb-1 text-sm font-semibold md:text-base">
              Our Vision
            </h2>
            <p className="text-xs text-muted-foreground md:text-sm">
              Make quality astrology guidance accessible, transparent, and
              outcomes-focused for everyday decisions and life milestones.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="mb-1 text-sm font-semibold md:text-base">
              Verified Experts
            </h2>
            <p className="text-xs text-muted-foreground md:text-sm">
              Every astrologer on the platform is screened for credentials,
              experience, and customer ratings so that you can consult with
              confidence.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="mb-1 text-sm font-semibold md:text-base">
              Customer First
            </h2>
            <p className="text-xs text-muted-foreground md:text-sm">
              Clear pricing, simple booking flows, and post-consultation support
              ensure a smooth experience from discovery to remedies.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="border-t pt-6">
        <p className="text-sm text-muted-foreground">
          Ready to get started?{" "}
          <Link href="/customer/astrologers" className="text-primary font-medium underline">
            Find an astrologer
          </Link>{" "}
          or{" "}
          <Link href="/customer/contact" className="text-primary font-medium underline">
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
}


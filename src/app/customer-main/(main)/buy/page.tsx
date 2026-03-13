import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Buy Now | Astro Platform",
  description: "Birth Kundali reports, match making, gemstone recommendations, and Vastu consultations — buy reports and services.",
};

const products = [
  {
    title: "Detailed Birth Kundali Report",
    description:
      "A 20–25 page digital report with key charts, strengths, challenges, and suggested areas of focus.",
    priceLabel: "From ₹799",
    href: "/kundali",
  },
  {
    title: "Match Making Report",
    description:
      "Comprehensive compatibility analysis with Guna Milan, doshas, mitigation suggestions, and guidance.",
    priceLabel: "From ₹999",
    href: "/astrologers?service=match-making",
  },
  {
    title: "Gemstone Recommendation",
    description:
      "Personalized guidance on suitable gemstones based on your chart, budget, and comfort.",
    priceLabel: "From ₹599",
    href: "/astrologers?service=gemstone",
  },
  {
    title: "Vastu Consultation",
    description:
      "High‑level review of home or office layout with prioritized Vastu recommendations.",
    priceLabel: "From ₹1499",
    href: "/astrologers?service=vastu",
  },
];

export default function BuyPage() {
  const breadcrumbs = [{ label: "Buy Now", href: "/buy" }];

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Buy Reports & Services
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Prefer a one‑time report or a focused service instead of an open‑ended
          consultation? Choose from the curated options below.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product.title} className="flex h-full flex-col">
            <CardContent className="flex flex-1 flex-col justify-between p-4">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold md:text-base">
                  {product.title}
                </h2>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {product.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {product.priceLabel}
                </p>
              </div>
              <div className="mt-4">
                <Button asChild size="sm" className="w-full">
                  <Link href={product.href}>Proceed</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


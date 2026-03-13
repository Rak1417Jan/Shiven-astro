import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Terms of Use | Astro Platform",
  description: "Terms of use for Astro Platform services.",
};

export default function TermsPage() {
  const breadcrumbs = [{ label: "Terms of Use", href: "/terms" }];

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />
      <h1 className="font-heading text-2xl font-bold tracking-tight">
        Terms of Use
      </h1>
      <p className="text-sm text-muted-foreground">
        This is a placeholder. Replace with your actual terms of use, including
        acceptance of terms, use of services, user conduct, disclaimers, and
        governing law.
      </p>
      <p className="text-sm text-muted-foreground">
        <Link href="/customer/contact" className="text-primary underline">
          Contact us
        </Link>{" "}
        for any questions regarding these terms.
      </p>
    </div>
  );
}

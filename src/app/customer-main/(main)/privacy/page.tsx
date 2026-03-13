import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Privacy Policy | Astro Platform",
  description: "Privacy policy for Astro Platform.",
};

export default function PrivacyPage() {
  const breadcrumbs = [{ label: "Privacy Policy", href: "/privacy" }];

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />
      <h1 className="font-heading text-2xl font-bold tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground">
        This is a placeholder. Replace with your actual privacy policy,
        covering data collection, use, storage, sharing, cookies, user rights,
        and contact for privacy requests.
      </p>
      <p className="text-sm text-muted-foreground">
        <Link href="/customer/contact" className="text-primary underline">
          Contact us
        </Link>{" "}
        for privacy-related queries.
      </p>
    </div>
  );
}

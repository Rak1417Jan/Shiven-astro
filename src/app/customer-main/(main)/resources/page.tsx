import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Resources | Astro Platform",
  description: "Blogs, articles, case studies, and gallery — learn and explore astrology with Astro Platform.",
};

const resourceSections = [
  {
    title: "Blogs",
    description:
      "Short, practical posts that explain everyday astrology use‑cases, success stories, and platform updates.",
    href: "#",
  },
  {
    title: "Articles",
    description:
      "Deeper write‑ups on concepts like dashas, yogas, and compatibility, written in simple language.",
    href: "#",
  },
  {
    title: "Case Studies",
    description:
      "Real‑world scenarios (with identities anonymised) that show how guidance translated into outcomes.",
    href: "#",
  },
  {
    title: "Gallery",
    description:
      "Images from events, sessions, and educational material to bring the offline experience online.",
    href: "#",
  },
];

const samplePosts = [
  {
    title: "How to choose the right muhurat for your wedding",
    excerpt: "A short guide to understanding tithi, nakshatra, and planetary hours when fixing your wedding date.",
    category: "Blog",
    date: "Feb 2026",
  },
  {
    title: "Understanding the 12 houses in Vedic astrology",
    excerpt: "What each house represents and how it affects different areas of life.",
    category: "Article",
    date: "Jan 2026",
  },
  {
    title: "Career change during Saturn dasha — a case study",
    excerpt: "How one professional used astrology guidance to time a career shift.",
    category: "Case Study",
    date: "Jan 2026",
  },
];

export default function ResourcesPage() {
  const breadcrumbs = [{ label: "Resources", href: "/resources" }];

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Resources
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Read blogs, articles, and case studies or browse our gallery to get a
          feel of how Astro Platform and our astrologers work with customers.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resourceSections.map((section) => (
          <Link key={section.title} href={section.href}>
            <Card className="h-full transition hover:shadow-md">
              <CardContent className="space-y-2 p-4">
                <h2 className="text-sm font-semibold md:text-base">
                  {section.title}
                </h2>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {section.description}
                </p>
                <span className="text-xs font-medium text-primary">Explore →</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      <section>
        <h2 className="font-heading mb-3 text-lg font-semibold">
          Latest from our blog & articles
        </h2>
        <div className="space-y-3">
          {samplePosts.map((post) => (
            <Card key={post.title}>
              <CardContent className="p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-1 font-semibold text-sm md:text-base">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-2 inline-block text-xs font-medium text-primary hover:underline"
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}


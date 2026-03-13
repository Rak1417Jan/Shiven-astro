"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AstrologerCard } from "@/components/subscriber/AstrologerCard";
import { PanchangWidget } from "@/components/subscriber/PanchangWidget";
import { mockAstrologers, mockBookings } from "@/data/mock";
import { AUTH_STORAGE_KEY } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const categories = [
  { href: "/customer/astrologers?category=astrology", label: "Astrology", comingSoon: false },
];

export default function HomePage() {
  const [isLoggedIn] = useState(
    typeof window !== "undefined" &&
      !!localStorage.getItem(AUTH_STORAGE_KEY)
  );
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("all");

  const featuredAstrologers = mockAstrologers.slice(0, 6);
  const filteredAstrologers = featuredAstrologers.filter((a) => {
    const q = search.trim().toLowerCase();
    const matchSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.location.toLowerCase().includes(q) ||
      a.languages.some((l) => l.toLowerCase().includes(q));
    const matchCity = city === "all" || a.location.toLowerCase().includes(city.toLowerCase());
    return matchSearch && matchCity;
  });
  const recentBookings = isLoggedIn ? mockBookings.slice(0, 2) : [];

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-6">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Consult expert astrologers
        </h1>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, city, language..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="all">All cities</option>
            <option value="palanpur">Palanpur</option>
            <option value="surat">Surat</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="vadodara">Vadodara</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/customer/astrologers?available=1">
            <Button variant="outline" size="sm">Available Now</Button>
          </Link>
          <Link href="/customer/astrologers?sort=rating">
            <Button variant="outline" size="sm">Top Rated</Button>
          </Link>
          <Link href="/customer/astrologers?sort=price">
            <Button variant="outline" size="sm">Lowest Price</Button>
          </Link>
        </div>
      </section>

      {/* AI Match banner - when logged in with birth details */}
      {isLoggedIn && (
        <section>
          <Card className="border-primary/30 bg-gradient-to-r from-secondary/10 to-primary/10">
            <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <div>
                  <h2 className="font-semibold">Based on your birth chart, we found your ideal astrologers</h2>
                  <p className="text-sm text-muted-foreground">Personalized recommendations for you</p>
                </div>
              </div>
              <Link href="/customer/astrologers?match=1">
                <Button>View matches</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Categories */}
      <section>
        <h2 className="font-heading mb-3 text-lg font-semibold">Categories</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.label} href={c.comingSoon ? "#" : c.href} className="relative">
              <Card className={`h-full transition hover:shadow ${c.comingSoon ? "opacity-75" : ""}`}>
                <CardContent className="p-4">
                  <p className="font-medium">{c.label}</p>
                  {c.comingSoon && (
                    <Badge variant="secondary" className="mt-2 text-xs">Coming Soon</Badge>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Astrologers */}
      <section>
        <h2 className="font-heading mb-3 text-lg font-semibold">Top Rated Astrologers</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAstrologers.map((a) => (
            <AstrologerCard key={a.id} astrologer={a} basePath="/customer" />
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/customer/astrologers">
            <Button variant="outline">View all astrologers</Button>
          </Link>
        </div>
      </section>

      {/* Panchang widget */}
      <section>
        <PanchangWidget />
      </section>

      {/* How it works */}
      <section>
        <h2 className="font-heading mb-4 text-lg font-semibold">How it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <p className="font-semibold">1. Find</p>
              <p className="text-sm text-muted-foreground">Browse astrologers by specialization, rating, and price.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="font-semibold">2. Book</p>
              <p className="text-sm text-muted-foreground">Choose a slot and pay securely via wallet or UPI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="font-semibold">3. Consult</p>
              <p className="text-sm text-muted-foreground">Join video or voice call at the scheduled time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent bookings - when logged in */}
      {isLoggedIn && recentBookings.length > 0 && (
        <section>
          <h2 className="font-heading mb-3 text-lg font-semibold">Recent bookings</h2>
          <div className="space-y-3">
            {recentBookings.map((b) => (
              <Card key={b.id}>
                <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-medium">{b.astrologerName}</p>
                    <p className="text-sm text-muted-foreground">{b.serviceName} · {new Date(b.scheduledAt).toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={b.status === "CONFIRMED" ? "success" : b.status === "COMPLETED" ? "default" : "secondary"}>
                      {b.status}
                    </Badge>
                    <Link href={`/customer/bookings/${b.id}`}>
                      <Button size="sm" variant="outline">View</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

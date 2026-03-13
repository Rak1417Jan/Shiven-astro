"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating } from "@/components/shared/StarRating";
import { Badge } from "@/components/ui/badge";
import { mockAstrologers } from "@/data/mock";

const TABS = ["About", "Services", "Reviews", "Availability"] as const;

export default function AstrologerProfilePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("About");

  const astrologer = mockAstrologers.find((a) => a.slug === slug);

  if (!astrologer) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-muted-foreground">Astrologer not found.</p>
        <Link href="/customer/astrologers">
          <Button variant="outline" className="mt-3">Back to Astrologers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      {/* Header */}
      <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-transparent p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="relative shrink-0">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold text-muted-foreground">
              {astrologer.name.charAt(0)}
            </div>
            {astrologer.isOnline && (
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-[#0fa958] ring-2 ring-background" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-heading text-2xl font-bold">{astrologer.name}</h1>
              {astrologer.kycVerified && <Badge>Verified</Badge>}
              <Badge variant={astrologer.isOnline ? "success" : "secondary"}>
                {astrologer.isOnline ? "Online" : "Offline"}
              </Badge>
            </div>
            <p className="text-muted-foreground">{astrologer.specializations.join(" · ")}</p>
            <div className="mt-2 flex items-center gap-2">
              <StarRating rating={astrologer.rating} />
              <span className="text-sm text-muted-foreground">({astrologer.reviewCount} reviews)</span>
            </div>
            <p className="text-sm text-muted-foreground">{astrologer.location} · {astrologer.languages.join(", ")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={`/customer/book/${astrologer.id}`}>
                <Button>Book Consultation</Button>
              </Link>
              <Button variant="outline">Follow</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-2">
        <Link href={`/customer/book/${astrologer.id}?mode=voice`}>
          <Button variant="outline" size="sm">Voice · ₹{astrologer.priceFrom}</Button>
        </Link>
        <Link href={`/customer/book/${astrologer.id}?mode=video`}>
          <Button variant="outline" size="sm">Video · ₹{astrologer.priceFrom}</Button>
        </Link>
        <Link href={`/customer/book/${astrologer.id}?mode=chat`}>
          <Button variant="outline" size="sm">Chat</Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`border-b-2 px-4 py-2 text-sm font-medium ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "About" && (
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{astrologer.bio}</p>
            <p><strong>Experience:</strong> {astrologer.experience} years</p>
            <div>
              <p className="font-medium">Specializations</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {astrologer.specializations.map((s: string) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "Services" && (
        <Card>
          <CardHeader>
            <CardTitle>Services & Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {astrologer.services.map((s: { id: string; name: string; durationMinutes: number; type: string; price: number }) => (
                <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3">
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.durationMinutes} min · {s.type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">₹{s.price}</span>
                    <Link href={`/customer/book/${astrologer.id}?service=${s.id}`}>
                      <Button size="sm">Book</Button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {activeTab === "Reviews" && (
        <Card>
          <CardHeader>
            <CardTitle>Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No reviews to show. (Static demo)</p>
          </CardContent>
        </Card>
      )}

      {activeTab === "Availability" && (
        <Card>
          <CardHeader>
            <CardTitle>Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Select a date to see slots. (Static demo)</p>
            <Link href={`/customer/book/${astrologer.id}`}>
              <Button className="mt-3">Book a slot</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

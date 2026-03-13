"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockBookings } from "@/data/mock";

const TABS = ["Upcoming", "Completed", "Cancelled"] as const;

export default function BookingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Upcoming");

  const filtered =
    tab === "Upcoming"
      ? mockBookings.filter((b) => b.status === "CONFIRMED" || b.status === "PENDING")
      : tab === "Completed"
        ? mockBookings.filter((b) => b.status === "COMPLETED")
        : mockBookings.filter((b) => b.status === "CANCELLED");

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">My Bookings</h1>
      <div className="flex gap-2 border-b">
        {TABS.map((t) => (
          <button
            key={t}
            className={`border-b-2 px-4 py-2 text-sm font-medium ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No {tab.toLowerCase()} bookings.
            <Link href="/customer/astrologers">
              <Button variant="outline" className="mt-3">Browse astrologers</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((b) => (
            <Card key={b.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
                <div className="flex gap-3">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                    {b.astrologerName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{b.astrologerName}</p>
                    <p className="text-sm text-muted-foreground">{b.serviceName} · {new Date(b.scheduledAt).toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={b.status === "CONFIRMED" ? "success" : b.status === "COMPLETED" ? "default" : "secondary"}>
                    {b.status}
                  </Badge>
                  <Link href={`/customer/bookings/${b.id}`}>
                    <Button size="sm" variant="outline">View</Button>
                  </Link>
                  {b.status === "CONFIRMED" && (
                    <Link href={`/customer/bookings/${b.id}/call`}>
                      <Button size="sm">Join Call</Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

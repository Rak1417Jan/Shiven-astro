"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockSubscriberBookings } from "@/data/mock";

const TABS = ["Pending", "Upcoming", "Completed", "Cancelled"] as const;

export default function BookingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Pending");

  const filtered =
    tab === "Pending"
      ? mockSubscriberBookings.filter((b) => b.status === "PENDING")
      : tab === "Upcoming"
        ? mockSubscriberBookings.filter((b) => b.status === "CONFIRMED" || b.status === "IN_PROGRESS")
        : tab === "Completed"
          ? mockSubscriberBookings.filter((b) => b.status === "COMPLETED")
          : mockSubscriberBookings.filter((b) => b.status === "CANCELLED");

  return (
    <div className="space-y-6">
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
          </CardContent>
        </Card>
      ) : (
        <ul className="space-y-3">
          {filtered.map((b) => (
            <Card key={b.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
                <div>
                  <p className="font-medium">{b.customerName}</p>
                  <p className="text-sm text-muted-foreground">{b.serviceName} · {new Date(b.scheduledAt).toLocaleString()}</p>
                  <p className="text-sm">₹{b.amount} (you earn ₹{b.netEarning})</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={b.status === "PENDING" ? "warning" : b.status === "CONFIRMED" ? "default" : "secondary"}>
                    {b.status}
                  </Badge>
                  {b.status === "PENDING" && (
                    <>
                      <Button size="sm" variant="outline">Reject</Button>
                      <Link href={`/bookings/${b.id}`}>
                        <Button size="sm">Accept</Button>
                      </Link>
                    </>
                  )}
                  {b.status === "CONFIRMED" && (
                    <Link href={`/bookings/${b.id}`}>
                      <Button size="sm">View / Start Call</Button>
                    </Link>
                  )}
                  {b.status === "COMPLETED" && (
                    <Link href={`/bookings/${b.id}`}>
                      <Button size="sm" variant="outline">View</Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
}

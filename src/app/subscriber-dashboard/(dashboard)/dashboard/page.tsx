"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockEarningsStats, mockSubscriberBookings, mockScheduleSlots } from "@/data/mock";

export default function DashboardPage() {
  const pending = mockSubscriberBookings.filter((b) => b.status === "PENDING");
  const todaySlots = mockScheduleSlots.filter((s) => s.date === "2026-03-01");

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today&apos;s earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">₹{mockEarningsStats.today}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">₹{mockEarningsStats.thisMonth.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Pending: ₹{mockEarningsStats.pendingSettlement}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today&apos;s bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">{todaySlots.filter((s) => s.customerName).length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {todaySlots.map((slot, i) => (
                <li key={i} className="flex items-center justify-between rounded-lg border p-3">
                  <span className="font-medium">{slot.time}</span>
                  <span className="text-muted-foreground">
                    {slot.customerName || "Free"} · {slot.service || "—"}
                  </span>
                  {slot.customerName && (
                    <Link href="/subscriber/bookings/sb1">
                      <Button size="sm">Start Call</Button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending requests</CardTitle>
          </CardHeader>
          <CardContent>
            {pending.length === 0 ? (
              <p className="text-sm text-muted-foreground">No pending requests.</p>
            ) : (
              <ul className="space-y-2">
                {pending.map((b) => (
                  <li key={b.id} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{b.customerName}</p>
                      <p className="text-sm text-muted-foreground">{b.serviceName}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Reject</Button>
                      <Link href={`/bookings/${b.id}`}>
                        <Button size="sm">Accept</Button>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link href="/subscriber/schedule/availability">
          <Button variant="outline">Set Availability</Button>
        </Link>
        <Link href="/subscriber/bookings">
          <Button variant="outline">View All Bookings</Button>
        </Link>
        <Link href="/subscriber/earnings/payout">
          <Button variant="outline">Request Payout</Button>
        </Link>
        <Link href="/profile">
          <Button variant="outline">Update Profile</Button>
        </Link>
      </div>
    </div>
  );
}

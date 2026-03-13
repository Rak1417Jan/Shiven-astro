"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockEarningsStats, mockEarningEntries } from "@/data/mock";

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">
              ₹{(mockEarningsStats.thisMonth + mockEarningsStats.pendingSettlement).toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">₹{mockEarningsStats.thisMonth.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending settlement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-2xl font-bold">₹{mockEarningsStats.pendingSettlement}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 flex items-center justify-center">
            <Link href="/subscriber/earnings/payout">
              <Button>Request payout</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockEarningEntries.map((e) => (
              <li key={e.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{e.description}</p>
                  <p className="text-xs text-muted-foreground">{e.date}</p>
                </div>
                <span className="font-semibold text-[#0fa958]">+₹{e.amount}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

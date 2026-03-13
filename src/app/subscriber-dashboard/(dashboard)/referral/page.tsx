"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockReferralStats, mockReferralList } from "@/data/staticPages";

export default function ReferralPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Referral Business</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{mockReferralStats.totalReferrals}</p>
            <p className="text-sm text-muted-foreground">Total referrals</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{mockReferralStats.converted}</p>
            <p className="text-sm text-muted-foreground">Converted</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">₹{mockReferralStats.earnings.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Referral earnings</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockReferralList.map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-sm text-muted-foreground">Joined: {r.joined}</p>
                </div>
                <span className="font-semibold text-[#0fa958]">+₹{r.bonus}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

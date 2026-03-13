"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockAdCampaigns } from "@/data/staticPages";

export default function AdvertisingPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Advertising</h1>
      <p className="text-muted-foreground">Your ad campaigns and performance.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockAdCampaigns.map((c) => (
          <Card key={c.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{c.name}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant={c.status === "Active" ? "default" : "secondary"}>{c.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Spend: ₹{c.spend.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Reach: {c.reach}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

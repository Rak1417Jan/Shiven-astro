"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockSubscriptions } from "@/data/staticPages";

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">My Subscriptions</h1>
      <Card>
        <CardHeader>
          <CardTitle>Active subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockSubscriptions.map((s) => (
              <li key={s.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{s.plan}</p>
                  <p className="text-sm text-muted-foreground">Renews: {s.renews}</p>
                </div>
                <span className="font-semibold">₹{s.price}/mo</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

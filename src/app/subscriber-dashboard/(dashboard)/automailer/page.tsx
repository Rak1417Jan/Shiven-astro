"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockMailerCampaigns } from "@/data/staticPages";

export default function AutoMailerPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Auto-Mailer System</h1>
      <Card>
        <CardHeader>
          <CardTitle>Email campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockMailerCampaigns.map((c) => (
              <li key={c.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">Sent: {c.sent}</p>
                </div>
                <span className="text-sm text-muted-foreground">Opens: {c.opens}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

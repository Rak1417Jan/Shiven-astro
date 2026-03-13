"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = [
  { q: "How do I get paid?", a: "Earnings are settled as per platform policy. Request payout from Earnings." },
  { q: "How do I set my availability?", a: "Go to Schedule → Availability and set hours for each day." },
  { q: "Can I reject a booking?", a: "Yes. In Pending requests, click Reject. The customer will be notified." },
];

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-lg font-semibold">Help & support</h2>
      <Card>
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {FAQ.map((item, i) => (
            <details key={i} className="rounded-lg border p-3">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

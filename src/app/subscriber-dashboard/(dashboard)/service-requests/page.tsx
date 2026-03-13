"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockServiceRequests } from "@/data/staticPages";

export default function ServiceRequestsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Service Request</h1>
      <p className="text-muted-foreground">Support and service requests.</p>
      <Card>
        <CardHeader>
          <CardTitle>Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockServiceRequests.map((r) => (
              <li key={r.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3">
                <div>
                  <p className="font-medium">{r.subject}</p>
                  <p className="text-sm text-muted-foreground">{r.type} · {r.date}</p>
                </div>
                <Badge variant={r.status === "Open" ? "secondary" : "default"}>{r.status}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

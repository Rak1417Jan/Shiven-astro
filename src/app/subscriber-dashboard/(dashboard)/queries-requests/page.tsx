"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockQueries } from "@/data/staticPages";

export default function QueriesRequestsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Revert to Queries & Requests</h1>
      <Card>
        <CardHeader>
          <CardTitle>Client queries</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockQueries.map((q) => (
              <li key={q.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3">
                <div>
                  <p className="font-medium">{q.subject}</p>
                  <p className="text-sm text-muted-foreground">{q.date}</p>
                </div>
                <Badge variant={q.status === "Replied" ? "default" : "secondary"}>{q.status}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

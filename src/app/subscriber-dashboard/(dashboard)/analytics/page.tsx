"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAnalytics } from "@/data/staticPages";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Analytics & Reports</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockAnalytics.map((a, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{a.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{a.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

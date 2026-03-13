"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockReportTypes } from "@/data/staticPages";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Generate Reports</h1>
      <p className="text-muted-foreground">Generate and download reports.</p>
      <ul className="space-y-3">
        {mockReportTypes.map((r) => (
          <Card key={r.id}>
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium">{r.name}</p>
                <p className="text-sm text-muted-foreground">Last generated: {r.lastGenerated}</p>
              </div>
              <Button size="sm">Generate</Button>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}

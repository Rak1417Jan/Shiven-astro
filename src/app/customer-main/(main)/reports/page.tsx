"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_REPORTS } from "@/data/mock";

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">My Reports</h1>
      {MOCK_REPORTS.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No reports yet. Generate a Kundali or book a consultation to get reports.
            <Link href="/customer/kundali">
              <Button variant="outline" className="mt-3">Create Kundali</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <ul className="space-y-3">
          {MOCK_REPORTS.map((r) => (
            <Card key={r.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-medium">{r.title}</p>
                  <p className="text-sm text-muted-foreground">{r.type} · {r.date}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View</Button>
                  <Button size="sm" variant="ghost">Download</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
}

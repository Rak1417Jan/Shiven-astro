"use client";

import { Card, CardContent } from "@/components/ui/card";
import { mockLibraries } from "@/data/staticPages";

export default function LibrariesPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Libraries</h1>
      <p className="text-muted-foreground">Your content collections.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockLibraries.map((lib) => (
          <Card key={lib.id}>
            <CardContent className="p-4">
              <p className="font-medium">{lib.name}</p>
              <p className="text-sm text-muted-foreground">{lib.type} · {lib.count} items</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

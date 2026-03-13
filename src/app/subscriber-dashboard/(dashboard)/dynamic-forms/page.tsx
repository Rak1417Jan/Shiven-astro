"use client";

import { Card, CardContent } from "@/components/ui/card";
import { mockForms } from "@/data/staticPages";

export default function DynamicFormsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Dynamic Forms</h1>
      <p className="text-muted-foreground">Forms used for intake and feedback.</p>
      <ul className="space-y-3">
        {mockForms.map((f) => (
          <Card key={f.id}>
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium">{f.name}</p>
                <p className="text-sm text-muted-foreground">{f.responses} responses · Last used: {f.lastUsed}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}

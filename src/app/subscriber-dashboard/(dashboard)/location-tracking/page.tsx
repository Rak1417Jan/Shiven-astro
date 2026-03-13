"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockLocations } from "@/data/staticPages";

export default function LocationTrackingPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Location Sharing / Tracking</h1>
      <p className="text-muted-foreground">Manage locations you share with clients.</p>
      <ul className="space-y-3">
        {mockLocations.map((loc) => (
          <Card key={loc.id}>
            <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium">{loc.name}</p>
                <p className="text-sm text-muted-foreground">{loc.address}</p>
              </div>
              <Badge variant={loc.shared ? "default" : "secondary"}>{loc.shared ? "Shared" : "Private"}</Badge>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio images</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Upload and manage your portfolio images (placeholder).</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-lg border bg-muted flex items-center justify-center text-muted-foreground">
                Image {i}
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4">Upload</Button>
        </CardContent>
      </Card>
    </div>
  );
}

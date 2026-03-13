"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockSubscriberServices } from "@/data/mock";
import { toast } from "sonner";

export default function ServicesPage() {
  const [services, setServices] = useState(mockSubscriberServices);

  const handleToggle = (id: string) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));
    toast.success("Updated (demo)");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My services</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4">
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.type} · {s.durationMinutes} min · ₹{s.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={s.active}
                      onChange={() => handleToggle(s.id)}
                    />
                    Active
                  </label>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Button variant="outline">Add service</Button>
    </div>
  );
}

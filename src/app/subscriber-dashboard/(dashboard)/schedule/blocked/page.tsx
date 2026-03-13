"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockBlockedDates } from "@/data/mock";
import { toast } from "sonner";

export default function BlockedDatesPage() {
  const handleAdd = () => {
    toast.success("Blocked date added (demo)");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Block dates</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div>
              <Label>From</Label>
              <Input type="date" className="w-40" />
            </div>
            <div>
              <Label>To</Label>
              <Input type="date" className="w-40" />
            </div>
            <div>
              <Label>Reason</Label>
              <Input placeholder="e.g. Personal leave" className="w-48" />
            </div>
            <div className="self-end">
              <Button onClick={handleAdd}>Add</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Blocked dates list</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockBlockedDates.map((b) => (
              <li key={b.id} className="flex items-center justify-between rounded-lg border p-3">
                <span>{b.start} – {b.end} · {b.reason}</span>
                <Button size="sm" variant="ghost">Delete</Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

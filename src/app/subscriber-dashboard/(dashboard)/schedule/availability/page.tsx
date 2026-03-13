"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockAvailability } from "@/data/mock";
import { toast } from "sonner";

const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;

export default function AvailabilityPage() {
  const [slots, setSlots] = useState(mockAvailability);
  const [slotDuration, setSlotDuration] = useState(30);

  const handleSave = () => {
    toast.success("Availability saved (demo)");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Availability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {DAYS.map((day) => {
            const slot = slots.find((s) => s.day === day) ?? { day, enabled: false, start: "09:00", end: "18:00" };
            return (
              <div key={day} className="flex flex-wrap items-center gap-4 rounded-lg border p-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={slot.enabled}
                    onChange={(e) =>
                      setSlots((prev) =>
                        prev.map((s) => (s.day === day ? { ...s, enabled: e.target.checked } : s))
                      )
                    }
                  />
                  <span className="capitalize font-medium">{day}</span>
                </label>
                <div className="flex gap-2">
                  <div>
                    <Label className="text-xs">Start</Label>
                    <Input
                      type="time"
                      value={slot.start}
                      onChange={(e) =>
                        setSlots((prev) => prev.map((s) => (s.day === day ? { ...s, start: e.target.value } : s)))
                      }
                      className="w-28"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">End</Label>
                    <Input
                      type="time"
                      value={slot.end}
                      onChange={(e) =>
                        setSlots((prev) => prev.map((s) => (s.day === day ? { ...s, end: e.target.value } : s)))
                      }
                      className="w-28"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <Label>Slot duration (minutes)</Label>
            <Input
              type="number"
              value={slotDuration}
              onChange={(e) => setSlotDuration(Number(e.target.value))}
              className="w-24"
            />
          </div>
          <Button onClick={handleSave}>Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockConsultationSlots } from "@/data/staticPages";

type ViewMode = "day" | "week" | "month";

export default function ConsultationPage() {
  const [view, setView] = useState<ViewMode>("day");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "Available" | "Booked">("all");

  const filtered = useMemo(
    () =>
      mockConsultationSlots.filter((slot) => {
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          slot.date.toLowerCase().includes(q) ||
          slot.time.toLowerCase().includes(q) ||
          (slot.customerName ?? "").toLowerCase().includes(q);
        const humanStatus = slot.available ? "Available" : "Booked";
        const matchStatus = status === "all" || humanStatus === status;
        return matchSearch && matchStatus;
      }),
    [search, status]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h1 className="font-heading text-xl font-semibold">Voice / Video Consultation</h1>
          <p className="text-sm text-muted-foreground">
            View and manage your consultation slots across day, week and month.
          </p>
        </div>
        <div className="inline-flex rounded-full border bg-background p-1 text-xs">
          {(["day", "week", "month"] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setView(mode)}
              className={`rounded-full px-3 py-1 capitalize ${
                view === mode ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <SearchAndFilterBar
        placeholder="Search by date, time or customer..."
        search={search}
        onSearchChange={setSearch}
      >
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value as "all" | "Available" | "Booked")}
        >
          <option value="all">All statuses</option>
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>
      </SearchAndFilterBar>

      <Card>
        <CardHeader>
          <CardTitle>
            {view === "day" && "Today’s slots (demo)"}
            {view === "week" && "Week view (demo)"}
            {view === "month" && "Month view (demo)"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {filtered.map((slot) => {
              const humanStatus = slot.available ? "Available" : "Booked";
              return (
                <li
                  key={slot.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">
                      {slot.date} · {slot.time}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {slot.duration}
                      {slot.customerName ? ` · ${slot.customerName}` : ""}
                    </p>
                  </div>
                  <Badge variant={slot.available ? "default" : "secondary"}>{humanStatus}</Badge>
                  {slot.available && (
                    <Button size="sm" variant="outline">
                      Block slot
                    </Button>
                  )}
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="rounded-lg border p-4 text-center text-sm text-muted-foreground">
                No slots match your filters.
              </li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}


"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockScheduleSlots } from "@/data/mock";

type ViewMode = "day" | "week" | "month";

export default function SchedulePage() {
  const [view, setView] = useState<ViewMode>("week");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "Free" | "Booked">("all");

  const filtered = useMemo(
    () =>
      mockScheduleSlots.filter((slot) => {
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          (slot.customerName ?? "").toLowerCase().includes(q) ||
          (slot.service ?? "").toLowerCase().includes(q) ||
          slot.time.toLowerCase().includes(q);
        const humanStatus = slot.customerName ? "Booked" : "Free";
        const matchStatus = status === "all" || humanStatus === status;
        return matchSearch && matchStatus;
      }),
    [search, status]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h1 className="font-heading text-xl font-semibold">Schedule</h1>
          <p className="text-sm text-muted-foreground">
            View your appointments and free slots in day, week or month view.
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
        placeholder="Search by time, customer or service..."
        search={search}
        onSearchChange={setSearch}
      >
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value as "all" | "Free" | "Booked")}
        >
          <option value="all">All slots</option>
          <option value="Free">Free</option>
          <option value="Booked">Booked</option>
        </select>
      </SearchAndFilterBar>

      <Card>
        <CardHeader>
          <CardTitle>
            {view === "day" && "Day view (demo)"}
            {view === "week" && "Week view (demo)"}
            {view === "month" && "Month view (demo)"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {filtered.map((slot, i) => (
              <li key={i} className="flex items-center justify-between rounded-lg border p-3">
                <span>{slot.time}</span>
                <span className="text-sm text-muted-foreground">
                  {slot.customerName || "Free slot"} · {slot.service || "—"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {slot.customerName ? "Booked" : "Free"}
                </span>
              </li>
            ))}
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


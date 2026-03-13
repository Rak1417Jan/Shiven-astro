"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockCrmContacts } from "@/data/staticPages";

type CrmRow = {
  id: string;
  date: string;
  name: string;
  phone: string;
  direction: "Incoming" | "Outgoing";
  source: string;
  subject: string;
  followUpRequired: boolean;
  followUpDate?: string;
  priority: "Low" | "Medium" | "High";
  status: string;
  notes?: string;
};

export default function CrmPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "Open" | "Closed">("all");

  const rows: CrmRow[] = mockCrmContacts as CrmRow[];

  const filtered = useMemo(
    () =>
      rows.filter((r) => {
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          r.name.toLowerCase().includes(q) ||
          r.phone.toLowerCase().includes(q) ||
          r.subject.toLowerCase().includes(q) ||
          r.notes?.toLowerCase().includes(q);
        const matchStatus = status === "all" || r.status === status;
        return matchSearch && matchStatus;
      }),
    [rows, search, status]
  );

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">CRM</h1>

      <SearchAndFilterBar
        placeholder="Search by name, number, subject or notes..."
        search={search}
        onSearchChange={setSearch}
      >
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value as "all" | "Open" | "Closed")}
        >
          <option value="all">All statuses</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </SearchAndFilterBar>

      <Card>
        <CardHeader>
          <CardTitle>Interactions</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-3 py-2 font-medium">Date</th>
                <th className="px-3 py-2 font-medium">Name of Person</th>
                <th className="px-3 py-2 font-medium">Contact Number</th>
                <th className="px-3 py-2 font-medium">In/Out</th>
                <th className="px-3 py-2 font-medium">Lead Source</th>
                <th className="px-3 py-2 font-medium">Subject</th>
                <th className="px-3 py-2 font-medium">Follow Up</th>
                <th className="px-3 py-2 font-medium">Priority</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t align-top hover:bg-muted/40">
                  <td className="px-3 py-2 whitespace-nowrap">{r.date}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{r.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{r.phone}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{r.direction}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{r.source}</td>
                  <td className="px-3 py-2">{r.subject}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {r.followUpRequired ? `Yes · ${r.followUpDate ?? "-"}` : "No"}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{r.priority}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{r.status}</td>
                  <td className="px-3 py-2 max-w-xs">{r.notes}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={10} className="px-3 py-4 text-center text-muted-foreground">
                    No CRM entries match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}


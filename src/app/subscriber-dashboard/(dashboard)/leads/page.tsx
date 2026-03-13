"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockLeads } from "@/data/staticPages";

type LeadRow = {
  id: string;
  date: string;
  name: string;
  phone: string;
  source: string;
  subject: string;
  description?: string;
  resolutionDate?: string;
  priority: "Low" | "Medium" | "High";
  status: string;
};

export default function LeadsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "Open" | "Closed">("all");

  const rows: LeadRow[] = mockLeads as LeadRow[];

  const filtered = useMemo(
    () =>
      rows.filter((l) => {
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          l.name.toLowerCase().includes(q) ||
          l.phone.toLowerCase().includes(q) ||
          l.subject.toLowerCase().includes(q) ||
          l.description?.toLowerCase().includes(q);
        const matchStatus = status === "all" || l.status === status;
        return matchSearch && matchStatus;
      }),
    [rows, search, status]
  );

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Lead Management</h1>

      <SearchAndFilterBar
        placeholder="Search by name, number, subject or description..."
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
          <CardTitle>Leads</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-3 py-2 font-medium">Date</th>
                <th className="px-3 py-2 font-medium">Name of Person</th>
                <th className="px-3 py-2 font-medium">Contact Number</th>
                <th className="px-3 py-2 font-medium">Source of Enquiry</th>
                <th className="px-3 py-2 font-medium">Subject</th>
                <th className="px-3 py-2 font-medium">Description</th>
                <th className="px-3 py-2 font-medium">Resolution Date</th>
                <th className="px-3 py-2 font-medium">Priority</th>
                <th className="px-3 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id} className="border-t align-top hover:bg-muted/40">
                  <td className="px-3 py-2 whitespace-nowrap">{l.date}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{l.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{l.phone}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{l.source}</td>
                  <td className="px-3 py-2">{l.subject}</td>
                  <td className="px-3 py-2 max-w-xs">{l.description}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{l.resolutionDate ?? "-"}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{l.priority}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{l.status}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-3 py-4 text-center text-muted-foreground">
                    No leads match your search.
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


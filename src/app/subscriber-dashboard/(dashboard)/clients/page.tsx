"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockClients } from "@/data/mock";

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState<"all" | "VIP" | "New" | "Regular">("all");

  const filtered = useMemo(
    () =>
      mockClients.filter((c) => {
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.phone.toLowerCase().includes(q) ||
          c.service.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q);
        const matchSegment = segment === "all" || c.segment === segment;
        return matchSearch && matchSegment;
      }),
    [search, segment]
  );

  return (
    <div className="space-y-6">
      <SearchAndFilterBar
        placeholder="Search by name, number, service or location..."
        search={search}
        onSearchChange={setSearch}
      >
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={segment}
          onChange={(e) => setSegment(e.target.value as "all" | "VIP" | "New" | "Regular")}
        >
          <option value="all">All segments</option>
          <option value="VIP">VIP</option>
          <option value="New">New</option>
          <option value="Regular">Regular</option>
        </select>
      </SearchAndFilterBar>

      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/60">
            <tr className="text-left">
              <th className="px-3 py-2 font-medium">Name</th>
              <th className="px-3 py-2 font-medium">Number</th>
              <th className="px-3 py-2 font-medium">Service availed</th>
              <th className="px-3 py-2 font-medium">Location</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t hover:bg-muted/40">
                <td className="px-3 py-2">
                  <Link href={`/clients/${c.id}`} className="font-medium text-primary hover:underline">
                    {c.name}
                  </Link>
                </td>
                <td className="px-3 py-2">{c.phone}</td>
                <td className="px-3 py-2">{c.service}</td>
                <td className="px-3 py-2">{c.location}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-3 py-4 text-center text-muted-foreground">
                  No customers match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockInvoices } from "@/data/staticPages";

type InvoiceRow = {
  id: string;
  date: string;
  client: string;
  amount: number;
  status: string;
  type: "Service" | "Product";
};

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "Paid" | "Pending" | "Cancelled">("all");
  const [type, setType] = useState<"all" | "Service" | "Product">("all");

  const rows: InvoiceRow[] = mockInvoices as InvoiceRow[];

  const filtered = useMemo(
    () =>
      rows.filter((inv) => {
        const q = search.trim().toLowerCase();
        const matchSearch =
          !q ||
          inv.id.toLowerCase().includes(q) ||
          inv.client.toLowerCase().includes(q) ||
          inv.date.toLowerCase().includes(q);
        const matchStatus = status === "all" || inv.status === status;
        const matchType = type === "all" || inv.type === type;
        return matchSearch && matchStatus && matchType;
      }),
    [rows, search, status, type]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="font-heading text-xl font-semibold">Invoices</h1>
        <Button size="sm" variant="default">
          + Create invoice
        </Button>
      </div>

      <SearchAndFilterBar
        placeholder="Search by invoice ID, client or date..."
        search={search}
        onSearchChange={setSearch}
      >
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value as "all" | "Paid" | "Pending" | "Cancelled")}
        >
          <option value="all">All statuses</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={type}
          onChange={(e) => setType(e.target.value as "all" | "Service" | "Product")}
        >
          <option value="all">All types</option>
          <option value="Service">Service</option>
          <option value="Product">Product</option>
        </select>
      </SearchAndFilterBar>

      <Card>
        <CardHeader>
          <CardTitle>All invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="pb-3 pr-3 font-medium">Invoice #</th>
                  <th className="pb-3 pr-3 font-medium">Date</th>
                  <th className="pb-3 pr-3 font-medium">Customer</th>
                  <th className="pb-3 pr-3 font-medium">Type</th>
                  <th className="pb-3 pr-3 font-medium">Amount</th>
                  <th className="pb-3 pr-3 font-medium">Status</th>
                  <th className="pb-3 pr-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((inv) => (
                  <tr key={inv.id} className="border-b last:border-0">
                    <td className="py-3 pr-3 font-medium whitespace-nowrap">{inv.id}</td>
                    <td className="py-3 pr-3 whitespace-nowrap">{inv.date}</td>
                    <td className="py-3 pr-3 whitespace-nowrap">{inv.client}</td>
                    <td className="py-3 pr-3 whitespace-nowrap">{inv.type}</td>
                    <td className="py-3 pr-3 whitespace-nowrap">₹{inv.amount.toLocaleString()}</td>
                    <td className="py-3 pr-3 whitespace-nowrap">
                      <Badge variant={inv.status === "Paid" ? "default" : "secondary"}>{inv.status}</Badge>
                    </td>
                    <td className="py-3 pr-3 whitespace-nowrap">
                      <div className="flex gap-2 text-xs">
                        <button type="button" className="text-primary hover:underline">
                          Download
                        </button>
                        <button type="button" className="text-primary hover:underline">
                          Share
                        </button>
                        <button type="button" className="text-muted-foreground hover:underline">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-4 text-center text-muted-foreground">
                      No invoices match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


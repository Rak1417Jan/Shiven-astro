"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SearchAndFilterBar } from "@/components/shared-subscriber/SearchAndFilterBar";
import { mockProducts } from "@/data/staticPages";

type ProductRow = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  active: boolean;
};

export default function ManageProductsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"all" | "Active" | "Inactive">("all");
  const [category, setCategory] = useState<"all" | "Gemstone" | "Rudraksha" | "Yantra" | "Course" | "Other">("all");

  const rows: ProductRow[] = mockProducts as ProductRow[];

  const filtered = useMemo(
    () =>
      rows.filter((p) => {
        const q = search.trim().toLowerCase();
        const matchSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
        const humanStatus = p.active ? "Active" : "Inactive";
        const matchStatus = status === "all" || humanStatus === status;
        const matchCategory = category === "all" || p.category === category;
        return matchSearch && matchStatus && matchCategory;
      }),
    [rows, search, status, category]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="font-heading text-xl font-semibold">Manage Products</h1>
        <Button size="sm" variant="default">
          + Add product
        </Button>
      </div>

      <SearchAndFilterBar
        placeholder="Search products by name or category..."
        search={search}
        onSearchChange={setSearch}
      >
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={status}
          onChange={(e) => setStatus(e.target.value as "all" | "Active" | "Inactive")}
        >
          <option value="all">All statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value as "all" | "Gemstone" | "Rudraksha" | "Yantra" | "Course" | "Other"
            )
          }
        >
          <option value="all">All categories</option>
          <option value="Gemstone">Gemstone</option>
          <option value="Rudraksha">Rudraksha</option>
          <option value="Yantra">Yantra</option>
          <option value="Course">Course</option>
          <option value="Other">Other</option>
        </select>
      </SearchAndFilterBar>

      <Card>
        <CardHeader>
          <CardTitle>Your products &amp; services</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-3 py-2 font-medium">Product</th>
                <th className="px-3 py-2 font-medium">Category</th>
                <th className="px-3 py-2 font-medium">Price</th>
                <th className="px-3 py-2 font-medium">Stock</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-t hover:bg-muted/40">
                  <td className="px-3 py-2 whitespace-nowrap">{p.name}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{p.category}</td>
                  <td className="px-3 py-2 whitespace-nowrap">₹{p.price.toLocaleString()}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{p.stock}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <Badge variant={p.active ? "default" : "secondary"}>
                      {p.active ? "Active" : "Inactive"}
                    </Badge>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    <div className="flex gap-2 text-xs">
                      <button className="text-primary hover:underline" type="button">
                        Edit
                      </button>
                      <button className="text-muted-foreground hover:underline" type="button">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-3 py-4 text-center text-muted-foreground">
                    No products match your filters.
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


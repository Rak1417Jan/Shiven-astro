"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockRetailPurchases } from "@/data/staticPages";

export default function RetailPurchasesPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Retail Purchase</h1>
      <Card>
        <CardHeader>
          <CardTitle>Purchase history</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockRetailPurchases.map((p) => (
              <li key={p.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{p.item}</p>
                  <p className="text-sm text-muted-foreground">{p.date}</p>
                </div>
                <span className="font-semibold">₹{p.amount}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MOCK_ADDRESSES } from "@/data/mock";

export default function AddressesPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold tracking-tight">Addresses</h1>
        <Button variant="outline" size="sm">Add address</Button>
      </div>
      <ul className="space-y-3">
        {MOCK_ADDRESSES.map((a) => (
          <Card key={a.id}>
            <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{a.label}</p>
                  {a.isDefault && <Badge variant="secondary">Default</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{a.line1}{a.line2 ? `, ${a.line2}` : ""}, {a.city}, {a.state} {a.pincode}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">Edit</Button>
                <Button size="sm" variant="ghost">Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </ul>
      <Link href="/customer/profile">
        <Button variant="ghost" className="w-full">Back to profile</Button>
      </Link>
    </div>
  );
}

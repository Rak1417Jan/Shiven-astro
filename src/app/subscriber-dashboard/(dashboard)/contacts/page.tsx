"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockContacts } from "@/data/staticPages";

export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Contact Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockContacts.map((c) => (
              <li key={c.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.email} · {c.phone}</p>
                </div>
                <Badge variant="secondary">{c.tags}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

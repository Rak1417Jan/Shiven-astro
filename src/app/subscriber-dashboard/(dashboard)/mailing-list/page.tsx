"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockMailingList } from "@/data/staticPages";

export default function MailingListPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Mailing List</h1>
      <Card>
        <CardHeader>
          <CardTitle>Subscribers</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockMailingList.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3">
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.email}</p>
                </div>
                <Badge variant={s.subscribed ? "default" : "secondary"}>{s.subscribed ? "Subscribed" : "Unsubscribed"}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

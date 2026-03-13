"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { mockNotifications } from "@/data/mock";

export default function NotificationsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Notifications</h1>
      <ul className="space-y-2">
        {mockNotifications.map((n) => (
          <li key={n.id}>
            <Link href={n.link ?? "#"}>
              <Card className={`transition hover:shadow ${!n.read ? "border-primary/30 bg-primary/5" : ""}`}>
                <CardContent className="p-4">
                  <p className="font-medium">{n.title}</p>
                  <p className="text-sm text-muted-foreground">{n.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

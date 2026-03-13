"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockClients } from "@/data/mock";
import { mockSubscriberBookings } from "@/data/mock";

export default function ClientProfilePage() {
  const params = useParams();
  const id = params?.id as string;
  const client = mockClients.find((c) => c.id === id);
  const history = mockSubscriberBookings.filter((b) => b.customerId === id);

  if (!client) {
    return (
      <div>
        <p className="text-muted-foreground">Client not found.</p>
        <Link href="/clients">
          <Button variant="outline" className="mt-3">Back to Clients</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{client.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">Last visit: {client.lastVisit}</p>
          <p className="text-sm text-muted-foreground">Total bookings: {client.totalBookings}</p>
          {client.segment && <p className="text-sm">Segment: {client.segment}</p>}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Booking history</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {history.map((b) => (
              <li key={b.id} className="flex items-center justify-between rounded-lg border p-3">
                <span>{b.serviceName} · {new Date(b.scheduledAt).toLocaleString()}</span>
                <Link href={`/bookings/${b.id}`}>
                  <Button size="sm" variant="outline">View</Button>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="flex gap-2">
        <Button variant="outline">Message</Button>
        <Button variant="outline">Add note</Button>
        <Link href="/clients">
          <Button variant="ghost">Back to Clients</Button>
        </Link>
      </div>
    </div>
  );
}

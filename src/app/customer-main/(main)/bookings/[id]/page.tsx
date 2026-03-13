"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockBookings } from "@/data/mock";

export default function BookingDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const booking = mockBookings.find((b) => b.id === id);

  if (!booking) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <p className="text-muted-foreground">Booking not found.</p>
        <Link href="/customer/bookings">
          <Button variant="outline" className="mt-3">Back to Bookings</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold">Booking #{booking.id}</h1>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Details</CardTitle>
            <Badge variant={booking.status === "CONFIRMED" ? "success" : booking.status === "COMPLETED" ? "default" : "secondary"}>
              {booking.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p><span className="text-muted-foreground">Astrologer:</span> {booking.astrologerName}</p>
          <p><span className="text-muted-foreground">Service:</span> {booking.serviceName}</p>
          <p><span className="text-muted-foreground">Date & time:</span> {new Date(booking.scheduledAt).toLocaleString()}</p>
          <p><span className="text-muted-foreground">Amount:</span> ₹{booking.amount}</p>
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-2">
        {booking.status === "CONFIRMED" && (
          <Link href={`/bookings/${booking.id}/call`}>
            <Button>Join Call</Button>
          </Link>
        )}
        <Link href={`/bookings/${booking.id}/chat`}>
          <Button variant="outline">Open Chat</Button>
        </Link>
        <Link href="/customer/bookings">
          <Button variant="ghost">Back to Bookings</Button>
        </Link>
      </div>
    </div>
  );
}

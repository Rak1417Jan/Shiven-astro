"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockSubscriberBookings } from "@/data/mock";

export default function BookingDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const booking = mockSubscriberBookings.find((b) => b.id === id);

  if (!booking) {
    return (
      <div>
        <p className="text-muted-foreground">Booking not found.</p>
        <Link href="/subscriber/bookings">
          <Button variant="outline" className="mt-3">Back to Bookings</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Booking #{booking.id}</CardTitle>
            <Badge>{booking.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Customer</p>
            <p className="font-medium">{booking.customerName}</p>
            {booking.customerPhone && <p className="text-sm">{booking.customerPhone}</p>}
            {booking.customerEmail && <p className="text-sm">{booking.customerEmail}</p>}
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Service</p>
            <p>{booking.serviceName} · {booking.serviceType}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Scheduled</p>
            <p>{new Date(booking.scheduledAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Amount / Your earning</p>
            <p>₹{booking.amount} / ₹{booking.netEarning}</p>
          </div>
          {booking.birthDetails && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Birth details</p>
              <p className="text-sm">DOB: {booking.birthDetails.dob}, Time: {booking.birthDetails.birthTime}, Place: {booking.birthDetails.birthPlace}</p>
            </div>
          )}
          {booking.customerNotes && (
            <div>
              <p className="text-sm font-medium text-muted-foreground">Customer notes</p>
              <p className="text-sm">{booking.customerNotes}</p>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="flex flex-wrap gap-2">
        {booking.status === "CONFIRMED" && <Button>Start Call</Button>}
        <Button variant="outline">Add notes</Button>
        <Button variant="outline">Open Chat</Button>
        <Link href="/subscriber/bookings">
          <Button variant="ghost">Back to Bookings</Button>
        </Link>
      </div>
    </div>
  );
}

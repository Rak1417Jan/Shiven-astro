"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockAstrologers } from "@/data/mock";
import { CheckCircle } from "lucide-react";

export default function BookingConfirmedPage() {
  const params = useParams();
  const astrologerId = params?.astrologerId as string;
  const astrologer = mockAstrologers.find((a) => a.id === astrologerId);

  const bookingId = "BK123456";
  const serviceName = "Birth Chart Analysis";
  const dateTime = "Mar 1, 2026 at 2:00 PM";
  const amount = 499;

  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-12 text-center">
      <div className="flex justify-center">
        <div className="rounded-full bg-[#0fa958]/20 p-4">
          <CheckCircle className="h-16 w-16 text-[#0fa958]" />
        </div>
      </div>
      <h1 className="font-heading text-2xl font-bold">Booking Confirmed!</h1>
      <p className="text-muted-foreground">Booking ID: #{bookingId}</p>
      <Card>
        <CardContent className="pt-6">
          <table className="w-full text-left text-sm">
            <tbody>
              <tr>
                <td className="py-1 text-muted-foreground">Astrologer</td>
                <td className="py-1 font-medium">{astrologer?.name ?? "—"}</td>
              </tr>
              <tr>
                <td className="py-1 text-muted-foreground">Service</td>
                <td className="py-1 font-medium">{serviceName}</td>
              </tr>
              <tr>
                <td className="py-1 text-muted-foreground">Date & time</td>
                <td className="py-1 font-medium">{dateTime}</td>
              </tr>
              <tr>
                <td className="py-1 text-muted-foreground">Amount</td>
                <td className="py-1 font-medium">₹{amount}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-2">
        <Link href="/customer/bookings">
          <Button className="w-full">View my booking</Button>
        </Link>
        <Link href="/customer/dashboard">
          <Button variant="outline" className="w-full">Back to home</Button>
        </Link>
      </div>
    </div>
  );
}

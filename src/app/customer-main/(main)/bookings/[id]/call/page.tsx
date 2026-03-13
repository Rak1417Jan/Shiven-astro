"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mic, Video, PhoneOff } from "lucide-react";

export default function CallPlaceholderPage() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 p-4">
        <div className="h-48 w-48 rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground">
          Avatar
        </div>
        <p className="text-lg font-medium">In a real app, Agora would connect here.</p>
        <p className="text-muted-foreground">Timer: 00:00</p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon"><Mic className="h-5 w-5" /></Button>
          <Button variant="outline" size="icon"><Video className="h-5 w-5" /></Button>
          <Button variant="destructive" size="icon"><PhoneOff className="h-5 w-5" /></Button>
        </div>
      </div>
      <div className="border-t p-4">
        <Link href={`/customer/bookings/${id}`}>
          <Button variant="outline" className="w-full">Leave call (placeholder)</Button>
        </Link>
      </div>
    </div>
  );
}

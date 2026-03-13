"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const MOCK_MESSAGES = [
  { id: "1", from: "astrologer", text: "Hello! Ready for our session?", time: "10:00 AM" },
  { id: "2", from: "you", text: "Yes, I have a few questions about my career.", time: "10:01 AM" },
];

export default function ChatPlaceholderPage() {
  const params = useParams();
  const id = params?.id as string;
  const [input, setInput] = useState("");

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] flex-col md:mx-auto md:max-w-2xl">
      <div className="border-b p-3">
        <Link href={`/customer/bookings/${id}`} className="text-sm text-primary hover:underline">
          ← Back to booking
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {MOCK_MESSAGES.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.from === "you" ? "justify-end" : "justify-start"}`}
          >
            <Card className={`max-w-[80%] ${m.from === "you" ? "bg-primary text-primary-foreground" : ""}`}>
              <CardContent className="py-2 px-3">
                <p className="text-sm">{m.text}</p>
                <p className="text-xs opacity-80">{m.time}</p>
              </CardContent>
            </Card>
          </div>
        ))}
        <p className="text-center text-xs text-muted-foreground">Socket.io placeholder — messages are static</p>
      </div>
      <div className="border-t p-3 flex gap-2">
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setInput("")}
        />
        <Button onClick={() => setInput("")}>Send</Button>
      </div>
    </div>
  );
}

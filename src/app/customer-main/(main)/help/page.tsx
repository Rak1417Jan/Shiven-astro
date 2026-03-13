"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FAQ = [
  { q: "How do I book a consultation?", a: "Go to Astrologers, choose an astrologer, and click Book Now. Select service, date/time, enter details, and pay." },
  { q: "Can I cancel a booking?", a: "Yes. Open the booking and use Cancel. Refund depends on the cancellation policy." },
  { q: "How do I add money to my wallet?", a: "Go to Wallet and click Add Money. Choose amount and pay via UPI/card." },
];

export default function HelpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ticket submitted (demo)");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Help & Support</h1>

      <Card>
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {FAQ.map((item, i) => (
            <details key={i} className="rounded-lg border p-3">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submit a ticket</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { toast } from "sonner";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent. We'll get back to you soon.");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const breadcrumbs = [{ label: "Contact Us", href: "/contact" }];

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Contact Us
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Have a question, partnership idea, or media query? Reach out to us
          using the form below and our team will get back to you.
        </p>
      </section>

      <Card>
        <CardContent className="p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Name</Label>
                <Input
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label>Phone (optional)</Label>
              <Input
                placeholder="+91…"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label>Message</Label>
              <Textarea
                rows={4}
                placeholder="Share a bit about how we can help you…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs font-semibold text-muted-foreground">
              Support
            </p>
            <p className="text-sm">support@astroplatform.example</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs font-semibold text-muted-foreground">
              WhatsApp
            </p>
            <p className="text-sm">+91-98XXXXXX00</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs font-semibold text-muted-foreground">
              Hours
            </p>
            <p className="text-sm">10:00 AM – 8:00 PM IST, all days</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

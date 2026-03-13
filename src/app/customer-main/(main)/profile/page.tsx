"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockCustomer } from "@/data/mock";
import { toast } from "sonner";
import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState(mockCustomer.name);
  const [email, setEmail] = useState(mockCustomer.email);
  const [phone, setPhone] = useState(mockCustomer.phone);
  const [dob, setDob] = useState(mockCustomer.birthDetails?.dob ?? "");
  const [birthTime, setBirthTime] = useState(mockCustomer.birthDetails?.birthTime ?? "");
  const [birthPlace, setBirthPlace] = useState(mockCustomer.birthDetails?.birthPlace ?? "");

  const handleSave = () => {
    toast.success("Profile saved (demo)");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">My Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-sm font-medium text-muted-foreground">Birth details</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              <div><Label className="text-xs">DOB</Label><Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} /></div>
              <div><Label className="text-xs">Birth time</Label><Input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} /></div>
              <div><Label className="text-xs">Birth place</Label><Input value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} /></div>
            </div>
          </div>
          <Button onClick={handleSave}>Save</Button>
        </CardContent>
      </Card>
      <Link href="/customer/profile/addresses">
        <Button variant="outline" className="w-full">Manage addresses</Button>
      </Link>
    </div>
  );
}

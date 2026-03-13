"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { mockAstrologers } from "@/data/mock";
import { mockCustomer } from "@/data/mock";
import { toast } from "sonner";

const STEPS = ["Service", "Date & Time", "Your Details", "Review & Pay"];

export default function BookFlowPage() {
  const params = useParams();
  const router = useRouter();
  const astrologerId = params?.astrologerId as string;
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState(mockCustomer.name);
  const [phone, setPhone] = useState(mockCustomer.phone);
  const [email, setEmail] = useState(mockCustomer.email);
  const [dob, setDob] = useState(mockCustomer.birthDetails?.dob ?? "");
  const [birthTime, setBirthTime] = useState(mockCustomer.birthDetails?.birthTime ?? "");
  const [birthPlace, setBirthPlace] = useState(mockCustomer.birthDetails?.birthPlace ?? "");
  const [notes, setNotes] = useState("");
  const [terms, setTerms] = useState(false);

  const astrologer = mockAstrologers.find((a) => a.id === astrologerId);
  const selectedService = astrologer?.services.find((s: { id: string }) => s.id === selectedServiceId);

  const mockSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

  if (!astrologer) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-muted-foreground">Astrologer not found.</p>
        <Link href="/customer/astrologers">
          <Button variant="outline" className="mt-3">Back</Button>
        </Link>
      </div>
    );
  }

  const platformFee = selectedService ? Math.round(selectedService.price * 0.05) : 0;
  const gst = selectedService ? Math.round((selectedService.price + platformFee) * 0.18) : 0;
  const total = selectedService ? selectedService.price + platformFee + gst : 0;

  const handleConfirm = () => {
    toast.success("Booking placed (demo)");
    router.push(`/customer/book/${astrologerId}/confirmed`);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-semibold">
          {astrologer.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{astrologer.name}</p>
          <p className="text-sm text-muted-foreground">{astrologer.specializations[0]}</p>
        </div>
      </div>

      <Progress value={(step / 4) * 100} />
      <p className="text-sm text-muted-foreground">Step {step} of 4: {STEPS[step - 1]}</p>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {astrologer.services.map((s: { id: string; name: string; durationMinutes: number; type: string; price: number }) => (
              <button
                key={s.id}
                type="button"
                className={`w-full rounded-lg border p-4 text-left transition ${selectedServiceId === s.id ? "border-primary bg-primary/5" : ""}`}
                onClick={() => setSelectedServiceId(s.id)}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{s.name}</span>
                  <span className="font-semibold text-primary">₹{s.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{s.durationMinutes} min · {s.type}</p>
              </button>
            ))}
            <Button className="w-full" disabled={!selectedServiceId} onClick={() => setStep(2)}>
              Continue
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Select date & time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Date</Label>
              <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split("T")[0]} />
            </div>
            <div>
              <Label>Time slot</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {mockSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`rounded-md border px-3 py-2 text-sm ${selectedTime === t ? "border-primary bg-primary text-primary-foreground" : ""}`}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <Button className="w-full" disabled={!selectedDate || !selectedTime} onClick={() => setStep(3)}>
              Continue
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Your details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Phone</Label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <p className="text-sm font-medium">Birth details (for astrology)</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                <div>
                  <Label className="text-xs">DOB</Label>
                  <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs">Birth time</Label>
                  <Input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs">Birth place</Label>
                  <Input placeholder="City" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
                </div>
              </div>
            </div>
            {dob && birthTime && birthPlace && (
              <div className="rounded-lg border border-[#f4c430]/50 bg-[#f4c430]/10 p-3">
                <p className="text-sm font-medium">Your Cosmic Snapshot (AI insight placeholder)</p>
                <p className="mt-1 text-xs text-muted-foreground">Share this with your astrologer to kick off the session.</p>
              </div>
            )}
            <div>
              <Label>Any questions for the astrologer?</Label>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Optional" />
            </div>
            <Button className="w-full" onClick={() => setStep(4)}>
              Continue
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && selectedService && (
        <Card>
          <CardHeader>
            <CardTitle>Review & Pay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-3 text-sm">
              <p><strong>Astrologer:</strong> {astrologer.name}</p>
              <p><strong>Service:</strong> {selectedService.name} · {selectedService.durationMinutes} min</p>
              <p><strong>Date & time:</strong> {selectedDate} {selectedTime}</p>
            </div>
            <div className="space-y-1 text-sm">
              <p className="flex justify-between">Service fee <span>₹{selectedService.price}</span></p>
              <p className="flex justify-between">Platform fee (5%) <span>₹{platformFee}</span></p>
              <p className="flex justify-between">GST (18%) <span>₹{gst}</span></p>
              <p className="flex justify-between font-semibold">Total <span>₹{total}</span></p>
            </div>
            <p className="text-xs text-muted-foreground">Payment: Wallet or Razorpay (demo)</p>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
              I agree to Terms & Conditions and Cancellation Policy
            </label>
            <Button className="w-full" disabled={!terms} onClick={handleConfirm}>
              Confirm & Pay ₹{total}
            </Button>
          </CardContent>
        </Card>
      )}

      {step > 1 && (
        <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
          Back
        </Button>
      )}
    </div>
  );
}

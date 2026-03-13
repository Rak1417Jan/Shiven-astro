"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AUTH_STORAGE_KEY } from "@/lib/constants";

export default function VerifyOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6 && typeof window !== "undefined") {
      localStorage.setItem(AUTH_STORAGE_KEY, "true");
      router.push("/dashboard");
    }
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;
    setResendCooldown(60);
    const t = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) clearInterval(t);
        return c - 1;
      });
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">Verify your mobile</CardTitle>
        <CardDescription>We sent a 6-digit code to +91 XXXXX 43210</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVerify} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP</Label>
            <Input
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="000000"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="text-center text-lg tracking-[0.5em]"
            />
          </div>
          <Button type="submit" className="w-full" disabled={otp.length !== 6}>
            Verify
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Didn&apos;t receive?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={resendCooldown > 0}
              className="text-primary hover:underline disabled:opacity-50"
            >
              Resend {resendCooldown > 0 ? `(${resendCooldown}s)` : ""}
            </button>
          </p>
        </form>
        <p className="mt-4 text-center text-sm">
          <Link href="/login" className="text-primary hover:underline">
            Back to Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const PRESETS = [100, 200, 500, 1000, 2000];

export default function AddMoneyPage() {
  const router = useRouter();
  const [amount, setAmount] = useState<number | "">("");
  const custom = typeof amount === "number" && !PRESETS.includes(amount) ? amount : 0;
  const displayAmount = typeof amount === "number" ? amount : custom || 0;

  const handleAdd = () => {
    const value = displayAmount;
    if (value < 50 || value > 10000) {
      toast.error("Amount must be between ₹50 and ₹10,000");
      return;
    }
    toast.success("Payment success (demo). Amount added to wallet.");
    router.push("/wallet");
  };

  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Add Money</h1>
      <Card>
        <CardHeader>
          <CardTitle>Choose amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                className={`rounded-lg border px-4 py-2 text-sm font-medium ${amount === p ? "border-primary bg-primary text-primary-foreground" : ""}`}
                onClick={() => setAmount(p)}
              >
                ₹{p}
              </button>
            ))}
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Custom amount (₹50 – ₹10,000)</label>
            <Input
              type="number"
              min={50}
              max={10000}
              placeholder="Enter amount"
              value={amount === "" ? "" : amount}
              onChange={(e) => {
                const v = e.target.value ? Number(e.target.value) : "";
                setAmount(v);
              }}
              className="mt-1"
            />
          </div>
          <Button className="w-full" onClick={handleAdd} disabled={displayAmount < 50}>
            Add ₹{displayAmount || "—"} to Wallet
          </Button>
        </CardContent>
      </Card>
      <Link href="/customer/wallet">
        <Button variant="ghost" className="w-full">Cancel</Button>
      </Link>
    </div>
  );
}

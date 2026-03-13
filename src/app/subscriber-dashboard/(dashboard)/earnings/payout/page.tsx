"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockEarningsStats } from "@/data/mock";
import { toast } from "sonner";

export default function PayoutPage() {
  const [amount, setAmount] = useState("");

  const handleRequest = () => {
    toast.success("Payout requested (demo)");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Request payout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Bank account</Label>
            <p className="text-sm text-muted-foreground">•••• 1234 (HDFC Bank)</p>
          </div>
          <div>
            <Label>Available balance</Label>
            <p className="font-heading text-xl font-bold">₹{mockEarningsStats.pendingSettlement}</p>
          </div>
          <div>
            <Label>Amount to withdraw (₹)</Label>
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="max-w-xs"
            />
          </div>
          <Button onClick={handleRequest} disabled={!amount}>
            Request payout
          </Button>
        </CardContent>
      </Card>
      <Link href="/subscriber/earnings">
        <Button variant="ghost">Back to Earnings</Button>
      </Link>
    </div>
  );
}

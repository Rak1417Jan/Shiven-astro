"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockTransactions, MOCK_WALLET_BALANCE } from "@/data/mock";

export default function WalletPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Wallet</h1>
      <Card className="bg-gradient-to-br from-primary/20 to-primary/5">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">Available balance</p>
          <p className="font-heading text-3xl font-bold">₹{MOCK_WALLET_BALANCE.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">As of {new Date().toLocaleDateString()}</p>
          <Link href="/customer/wallet/add" className="mt-4 inline-block">
            <Button>Add Money</Button>
          </Link>
        </CardContent>
      </Card>
      <div>
        <h2 className="font-semibold mb-2">Recent transactions</h2>
        <ul className="space-y-2">
          {mockTransactions.slice(0, 10).map((t) => (
            <li key={t.id} className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">{t.description}</p>
                <p className="text-xs text-muted-foreground">{new Date(t.date).toLocaleString()}</p>
              </div>
              <span className={t.type === "credit" ? "text-[#0fa958]" : "text-foreground"}>
                {t.type === "credit" ? "+" : "-"}₹{t.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockWallet, mockWalletHistory } from "@/data/staticPages";

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Digital Wallet</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium text-muted-foreground">Current balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-heading text-3xl font-bold">₹{mockWallet.balance.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">{mockWallet.currency}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockWalletHistory.map((t) => (
              <li key={t.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="font-medium">{t.desc}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <span className={t.amount >= 0 ? "font-semibold text-[#0fa958]" : "font-semibold text-muted-foreground"}>
                  {t.amount >= 0 ? "+" : ""}₹{t.amount.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

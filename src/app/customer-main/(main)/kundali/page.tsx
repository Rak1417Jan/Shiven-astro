"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockKundaliChart } from "@/data/mock";

export default function KundaliPage() {
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [showChart, setShowChart] = useState(false);

  const chart = showChart ? mockKundaliChart : null;

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Kundali / Birth Chart</h1>

      <Card>
        <CardHeader>
          <CardTitle>Enter birth details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Date of birth</Label>
            <Input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div>
            <Label>Birth time</Label>
            <Input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
          </div>
          <div>
            <Label>Birth place</Label>
            <Input placeholder="City, State" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
          </div>
          <Button
            disabled={!dob || !birthPlace}
            onClick={() => setShowChart(true)}
          >
            Generate chart
          </Button>
        </CardContent>
      </Card>

      {chart && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Birth chart (North Indian style)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2 rounded-xl border-2 border-primary/30 p-4 md:grid-cols-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((house) => (
                  <div key={house} className="rounded border bg-muted/30 p-2 text-center text-sm">
                    <p className="font-semibold">House {house}</p>
                    {chart.planets
                      .filter((p: { house: number; name: string; sign: string }) => p.house === house)
                      .map((p: { house: number; name: string; sign: string }) => (
                        <p key={p.name} className="text-xs">{p.name} ({p.sign})</p>
                      ))}
                  </div>
                ))}
              </div>
              {chart.rulingPlanet && (
                <p className="mt-3 text-sm text-muted-foreground">Ruling planet: {chart.rulingPlanet}</p>
              )}
            </CardContent>
          </Card>
          {chart.reportSnippet && (
            <Card>
              <CardHeader>
                <CardTitle>Brief insight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{chart.reportSnippet}</p>
              </CardContent>
            </Card>
          )}
          <Link href="/customer/astrologers">
            <Button>Discuss with an astrologer</Button>
          </Link>
        </>
      )}
    </div>
  );
}

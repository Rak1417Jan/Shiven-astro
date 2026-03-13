"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockPanchangToday } from "@/data/mock";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

const SUGGESTED_QUESTIONS = [
  "Is today good for starting a business?",
  "When is the best time to travel today?",
  "What should I avoid doing today?",
];

const TABS = [
  { id: "today", label: "Today's Panchang" },
  { id: "muhurt", label: "Muhurt" },
  { id: "grah-rashi", label: "Grah / Rashi" },
  { id: "calendar", label: "Hindu Calendar" },
] as const;

const GRAH_RASHI = [
  { name: "Surya (Sun)", rashi: "Simha", brief: "Soul, authority, father, health." },
  { name: "Chandra (Moon)", rashi: "Varies", brief: "Mind, emotions, mother, travel." },
  { name: "Mangal (Mars)", rashi: "Mesha, Vrishchika", brief: "Courage, property, siblings." },
  { name: "Budh (Mercury)", rashi: "Mithuna, Kanya", brief: "Intellect, speech, business." },
  { name: "Guru (Jupiter)", rashi: "Dhanu, Meena", brief: "Wisdom, children, spirituality." },
  { name: "Shukra (Venus)", rashi: "Vrishabha, Tula", brief: "Love, luxury, marriage." },
  { name: "Shani (Saturn)", rashi: "Makar, Kumbha", brief: "Discipline, karma, longevity." },
  { name: "Rahu", rashi: "N/A (shadow)", brief: "Desire, innovation, sudden events." },
  { name: "Ketu", rashi: "N/A (shadow)", brief: "Detachment, past karma, spirituality." },
];

const SAMPLE_CALENDAR_DAYS = [
  { date: "1", tithi: "Prathama", festival: null },
  { date: "8", tithi: "Ashtami", festival: "Masa Shivaratri" },
  { date: "14", tithi: "Chaturdashi", festival: null },
  { date: "15", tithi: "Amavasya/Purnima", festival: "Amavasya" },
  { date: "26", tithi: "—", festival: "Maha Shivaratri" },
];

export default function PanchangPage() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("today");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const d = mockPanchangToday;

  const handleAsk = () => {
    setAnswer(
      "(AI placeholder) Based on today's Panchang, the Abhijit Muhurat (12:15 PM – 1:00 PM) is favourable for important work. Rahu Kaal (3:00 PM – 4:30 PM) should be avoided for new ventures."
    );
  };

  const breadcrumbs = [{ label: "Panchang", href: "/panchang" }];

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <div className="flex flex-wrap gap-2 border-b pb-3">
        {TABS.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {activeTab === "today" && (
        <div className="space-y-8">
          <div>
            <h1 className="font-heading text-2xl font-bold tracking-tight">
              Today&apos;s Panchang
            </h1>
            <p className="text-muted-foreground">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-muted-foreground">Tithi</p>
                <p className="font-medium">{d.tithi}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Nakshatra</p>
                <p className="font-medium">{d.nakshatra}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Yoga</p>
                <p className="font-medium">{d.yoga}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Sunrise / Sunset</p>
                <p className="font-medium">{d.sunrise} / {d.sunset}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Rahu Kaal</p>
                <p className="font-medium">{d.rahuKaal.start} – {d.rahuKaal.end}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Muhurats today</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {d.muhurats.map((m: { name: string; start: string; end: string }, i: number) => (
                  <li
                    key={i}
                    className="rounded border-l-4 border-[#0fa958] bg-[#0fa958]/5 px-3 py-2 text-sm"
                  >
                    {m.name}: {m.start} – {m.end}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ask about today&apos;s Panchang</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    className="rounded-full border bg-muted/50 px-3 py-1 text-sm hover:bg-muted"
                    onClick={() => setQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <Button onClick={handleAsk}>Ask</Button>
              </div>
              {answer && (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-sm">
                  {answer}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "muhurt" && (
        <div className="space-y-6">
          <h1 className="font-heading text-2xl font-bold tracking-tight">Muhurt</h1>
          <p className="text-muted-foreground text-sm">
            Auspicious time windows (muhurats) are used for starting important
            activities—marriage, griha pravesh, business, travel. Below are
            today&apos;s key muhurats.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Muhurats</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {d.muhurats.map((m: { name: string; start: string; end: string }, i: number) => (
                  <li
                    key={i}
                    className="rounded border-l-4 border-[#0fa958] bg-[#0fa958]/5 px-3 py-2 text-sm"
                  >
                    {m.name}: {m.start} – {m.end}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground">
            For a full muhurat for a specific date and purpose,{" "}
            <Link href="/customer/astrologers" className="text-primary underline">
              consult an astrologer
            </Link>
            .
          </p>
        </div>
      )}

      {activeTab === "grah-rashi" && (
        <div className="space-y-6">
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            Grah / Rashi (Planets & Signs)
          </h1>
          <p className="text-muted-foreground text-sm">
            Brief reference for the nine grahas (planets/nodes) and their
            significations. Rashi (zodiac sign) placement in a birth chart
            modifies these meanings.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {GRAH_RASHI.map((g) => (
              <Card key={g.name}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm">{g.name}</h3>
                  <p className="text-xs text-muted-foreground">Rashi: {g.rashi}</p>
                  <p className="mt-1 text-xs">{g.brief}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            For personalised grah and rashi analysis,{" "}
            <Link href="/customer/kundali" className="text-primary underline">
              generate your Kundali
            </Link>{" "}
            or{" "}
            <Link href="/customer/astrologers" className="text-primary underline">
              book a consultation
            </Link>
            .
          </p>
        </div>
      )}

      {activeTab === "calendar" && (
        <div className="space-y-6">
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            Hindu Calendar
          </h1>
          <p className="text-muted-foreground text-sm">
            Lunar month view with key tithis and festivals. This is a simplified
            view; full calendar with location-based timings is coming soon.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>
                {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-2">Date</th>
                      <th className="p-2">Tithi</th>
                      <th className="p-2">Festival / Vrat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_CALENDAR_DAYS.map((row, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="p-2">{row.date}</td>
                        <td className="p-2">{row.tithi}</td>
                        <td className="p-2">{row.festival ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Full Hindu calendar with vrats and location-based timings will be
                available in a future update.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

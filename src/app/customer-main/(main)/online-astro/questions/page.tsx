"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { toast } from "sonner";

const SAMPLE_QUESTIONS = [
  {
    id: "1",
    question: "Is it a good day to start a new job or business venture?",
    answer: "Based on today's Panchang, Abhijit Muhurat (12:15–1:00 PM) is favourable for initiating important work. Avoid Rahu Kaal for new ventures.",
    askedAt: "2 days ago",
  },
  {
    id: "2",
    question: "Which gemstone is suitable for my chart?",
    answer: "Gemstone recommendation depends on your birth chart, current dasha, and specific goals. Book a short consultation with an astrologer for a personalised suggestion.",
    askedAt: "1 week ago",
  },
  {
    id: "3",
    question: "What is the significance of Rahu Kaal?",
    answer: "Rahu Kaal is a daily inauspicious window (duration varies by location). Starting important tasks during this period is traditionally avoided in Vedic astrology.",
    askedAt: "1 week ago",
  },
];

export default function OnlineAstroQuestionsPage() {
  const [newQuestion, setNewQuestion] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    toast.success("Question submitted. Our astrologers will respond soon.");
    setNewQuestion("");
    setDetail("");
  };

  const breadcrumbs = [
    { label: "Online Astro", href: "/online-astro" },
    { label: "Ask a Question", href: "/online-astro/questions" },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-6">
      <BreadcrumbNav items={breadcrumbs} />

      <section className="space-y-3">
        <h1 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Ask a Question
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Post your question and get guidance from our astrologers. You can also
          browse answers to commonly asked questions below.
        </p>
      </section>

      <Card>
        <CardContent className="p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Your question</Label>
              <Input
                placeholder="e.g. Is this month good for buying property?"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label>Additional context (optional)</Label>
              <Textarea
                rows={3}
                placeholder="Birth date, place, or any relevant details…"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="mt-1"
              />
            </div>
            <Button type="submit">Submit question</Button>
          </form>
        </CardContent>
      </Card>

      <section>
        <h2 className="font-heading mb-3 text-lg font-semibold">
          Recently answered
        </h2>
        <div className="space-y-3">
          {SAMPLE_QUESTIONS.map((q) => (
            <Card key={q.id}>
              <CardContent className="p-4">
                <p className="font-medium text-sm">{q.question}</p>
                <p className="mt-2 text-xs text-muted-foreground">{q.answer}</p>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Answered {q.askedAt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <p className="text-center text-sm text-muted-foreground">
        For a private, in-depth answer,{" "}
        <Link href="/customer/astrologers" className="text-primary underline">
          book a consultation
        </Link>
        .
      </p>
    </div>
  );
}

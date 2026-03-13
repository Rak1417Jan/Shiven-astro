"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockQuestions } from "@/data/staticPages";

export default function QuestionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Questions (Quara)</h1>
      <p className="text-muted-foreground">Answer client questions and manage Q&A.</p>
      <Card>
        <CardHeader>
          <CardTitle>Recent questions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockQuestions.map((q) => (
              <li key={q.id} className="rounded-lg border p-3">
                <p className="font-medium">{q.question}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{q.date}</span>
                  {q.answered ? <Badge variant="secondary">Answered</Badge> : <Badge variant="outline">Pending</Badge>}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

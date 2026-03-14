"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating } from "@/components/shared/StarRating";
import { mockReviews, mockReviewStats } from "@/data/staticPages";

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Star Rating, Review & Feedback</h1>
      <div className="flex gap-4">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{mockReviewStats.average}</p>
            <p className="text-sm text-muted-foreground">Average rating</p>
            <StarRating rating={Math.round(mockReviewStats.average)} className="mt-2" />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <p className="text-2xl font-bold">{mockReviewStats.total}</p>
            <p className="text-sm text-muted-foreground">Total reviews</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockReviews.map((r) => (
              <li key={r.id} className="rounded-lg border p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{r.client}</p>
                  <StarRating rating={Number(r.rating ?? 0)} className="shrink-0" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{r.comment}</p>
                <p className="mt-1 text-xs text-muted-foreground">{r.date}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

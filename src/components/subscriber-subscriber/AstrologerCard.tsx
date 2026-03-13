import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/shared/StarRating";
import type { Astrologer } from "@/types/subscriber";
import { cn } from "@/lib/utils";

export function AstrologerCard({ astrologer, compact }: { astrologer: Astrologer; compact?: boolean }) {
  return (
    <Card className={cn("overflow-hidden transition-shadow hover:shadow-md", compact && "flex flex-row gap-4")}>
      <CardContent className={cn("p-0", compact ? "flex flex-1 flex-row items-center p-4" : "p-4")}>
        <div className={cn("flex gap-4", compact && "flex-1")}>
          <div className="relative shrink-0">
            <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">
              {astrologer.name.charAt(0)}
            </div>
            {astrologer.isOnline && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#0fa958] ring-2 ring-background" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold leading-tight">{astrologer.name}</h3>
                <p className="text-xs text-muted-foreground">{astrologer.specializations.slice(0, 2).join(" · ")}</p>
              </div>
              {astrologer.kycVerified && (
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary">Verified</span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <StarRating rating={astrologer.rating ?? 0} className="shrink-0" />
              <span className="text-xs text-muted-foreground">({astrologer.reviewCount})</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              From ₹{astrologer.priceFrom} · {astrologer.languages.slice(0, 2).join(", ")}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href={`/astrologers/${astrologer.slug}`}>
                <Button size="sm" variant="outline">View Profile</Button>
              </Link>
              <Link href={`/book/${astrologer.id}`}>
                <Button size="sm">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

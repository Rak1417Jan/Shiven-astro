import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockPanchangToday } from "@/data/mock";

export function PanchangWidget() {
  const d = mockPanchangToday;
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-[#f4c430]/10 to-transparent">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold">Today&apos;s Panchang</h3>
          <Link href="/panchang">
            <Button variant="ghost" size="sm">View Full</Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 text-sm">
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
          <p className="text-muted-foreground">Rahu Kaal</p>
          <p className="font-medium">{d.rahuKaal.start} – {d.rahuKaal.end}</p>
        </div>
      </CardContent>
    </Card>
  );
}

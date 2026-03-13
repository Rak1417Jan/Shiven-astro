"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAstrologers } from "@/data/mock";
import { Badge } from "@/components/ui/badge";

export default function ContactsPage() {
  const contacts = mockAstrologers;

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">My Astrologer Contacts</h1>
      <p className="text-sm text-muted-foreground">
        This section lists astrologers you have interacted with, so you can quickly reach out again.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Saved astrologers</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/60">
              <tr className="text-left">
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Location</th>
                <th className="px-3 py-2 font-medium">Languages</th>
                <th className="px-3 py-2 font-medium">Specializations</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((a) => (
                <tr key={a.id} className="border-t hover:bg-muted/40">
                  <td className="px-3 py-2">
                    <Link href={`/customer/astrologers/${a.slug}`} className="text-primary hover:underline">
                      {a.name}
                    </Link>
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{a.location}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {a.languages.map((l) => (
                      <Badge key={l} variant="secondary" className="mr-1">
                        {l}
                      </Badge>
                    ))}
                  </td>
                  <td className="px-3 py-2">
                    {a.specializations.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}


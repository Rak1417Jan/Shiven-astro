"use client";

import { useMemo, useState } from "react";
import { AstrologerCard } from "@/components/subscriber/AstrologerCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockAstrologers } from "@/data/mock";
import { Search } from "lucide-react";

export default function AstrologersPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"rating" | "price" | "experience">("rating");
  const [city, setCity] = useState("all");
  const [language, setLanguage] = useState("all");

  const filtered = useMemo(() => {
    let list = [...mockAstrologers];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.specializations.some((s: string) => s.toLowerCase().includes(q)) ||
          a.languages.some((l: string) => l.toLowerCase().includes(q))
      );
    }
    if (city !== "all") {
      list = list.filter((a) => a.location.toLowerCase().includes(city.toLowerCase()));
    }
    if (language !== "all") {
      list = list.filter((a) => a.languages.some((l) => l.toLowerCase() === language.toLowerCase()));
    }
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "price") list.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "experience") list.sort((a, b) => b.experience - a.experience);
    return list;
  }, [search, sort, city, language]);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Browse Astrologers</h1>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, specialization, language..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="all">All cities</option>
            <option value="palanpur">Palanpur</option>
            <option value="surat">Surat</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="vadodara">Vadodara</option>
          </select>
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="all">All languages</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="gujarati">Gujarati</option>
          </select>
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value as "rating" | "price" | "experience")}
          >
            <option value="rating">Rating</option>
            <option value="price">Price: Low to High</option>
            <option value="experience">Experience</option>
          </select>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">Found {filtered.length} astrologers</p>
      {filtered.length === 0 ? (
        <div className="rounded-xl border bg-card p-8 text-center">
          <p className="text-muted-foreground">No astrologers found. Try clearing filters.</p>
          <Button variant="outline" className="mt-3" onClick={() => { setSearch(""); }}>
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AstrologerCard key={a.id} astrologer={a} basePath="/customer" />
          ))}
        </div>
      )}
    </div>
  );
}

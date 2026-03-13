"use client";

import { Input } from "@/components/ui/input";
import { ReactNode } from "react";

type Props = {
  placeholder?: string;
  search: string;
  onSearchChange: (value: string) => void;
  children?: ReactNode;
};

export function SearchAndFilterBar({ placeholder, search, onSearchChange, children }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Input
        placeholder={placeholder ?? "Search..."}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-xs"
      />
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder, FileText } from "lucide-react";
import { mockFiles } from "@/data/staticPages";

export default function FilesPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-xl font-semibold">Files & Folder</h1>
      <Card>
        <CardHeader>
          <CardTitle>Storage</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {mockFiles.map((f) => (
              <li key={f.id} className="flex items-center gap-3 rounded-lg border p-3">
                {f.type === "Folder" ? <Folder className="h-5 w-5 text-muted-foreground" /> : <FileText className="h-5 w-5 text-muted-foreground" />}
                <div className="flex-1">
                  <p className="font-medium">{f.name}</p>
                  <p className="text-sm text-muted-foreground">Updated: {f.updated}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function SettingsPage() {
  const handleSave = () => toast.success("Settings saved (demo)");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            <span className="text-sm">Email for new bookings</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            <span className="text-sm">SMS reminders</span>
          </label>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bank account</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">•••• 1234 · HDFC Bank (placeholder)</p>
          <Button variant="outline" size="sm" className="mt-2">Update</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Subscription plan</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Current plan: Basic (demo)</p>
        </CardContent>
      </Card>
      <Button onClick={handleSave}>Save settings</Button>
    </div>
  );
}

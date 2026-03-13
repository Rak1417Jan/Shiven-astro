import { SubscriberSidebar } from "@/components/shared-subscriber/SubscriberSidebar";
import { SubscriberTopbar } from "@/components/shared-subscriber/SubscriberTopbar";
import { AuthGuard } from "@/components/shared-subscriber/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-dvh">
        <SubscriberSidebar />
        <div className="min-w-0 flex-1 flex flex-col">
          <SubscriberTopbar />
          <main className="flex-1 overflow-auto">
            <div className="mx-auto w-full max-w-6xl px-4 py-6">{children}</div>
          </main>
        </div>
      </div>
    </AuthGuard>
  );
}

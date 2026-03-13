import { CustomerHeader } from "@/components/shared-customer/CustomerHeader";
import { CustomerSidebar } from "@/components/shared-customer/CustomerSidebar";
import { Footer } from "@/components/shared/Footer";
import { AuthGuard } from "@/components/shared/AuthGuard";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-dvh flex-col">
        <div className="flex min-h-dvh flex-1 flex-col md:flex-row">
          <CustomerSidebar />
          <div className="min-w-0 flex-1 flex flex-col">
            <CustomerHeader />
            <main className="flex-1 overflow-auto">
              <div className="mx-auto w-full max-w-6xl px-4 py-6">{children}</div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}

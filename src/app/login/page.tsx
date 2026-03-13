"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AUTH_STORAGE_KEY } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();

  const handleContinueAs = (role: "customer" | "subscriber") => {
    if (typeof window === "undefined") return;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ role }));
    router.push(role === "customer" ? "/customer/dashboard" : "/subscriber/dashboard");
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-card p-6 shadow-lg">
        <header className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold font-heading">
            Welcome back to Astro Platform
          </h1>
          <p className="text-sm text-muted-foreground">
            Login as a customer or astrologer to continue.
          </p>
        </header>

        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="••••••••"
            />
          </div>
        </form>

        <div className="space-y-3">
          <p className="text-xs font-medium text-muted-foreground">
            Continue as:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => handleContinueAs("customer")}
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => handleContinueAs("subscriber")}
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
            >
              Astrologer
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          New here?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}


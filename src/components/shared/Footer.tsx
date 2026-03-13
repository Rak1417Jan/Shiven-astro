import Link from "next/link";

const footerLinks = {
  "Get started": [
    { label: "Find Astrologers", href: "/customer/astrologers" },
    { label: "Services", href: "/customer/services" },
    { label: "Panchang", href: "/customer/panchang" },
    { label: "Buy Reports", href: "/customer/buy" },
  ],
  Learn: [
    { label: "Learning Hub", href: "/customer/learning" },
    { label: "Resources", href: "/customer/resources" },
    { label: "Online Astro", href: "/customer/online-astro" },
  ],
  Company: [
    { label: "About Us", href: "/customer/about" },
    { label: "Contact Us", href: "/customer/contact" },
    { label: "Help & Support", href: "/customer/help" },
  ],
  Legal: [
    { label: "Terms of Use", href: "/customer/terms" },
    { label: "Privacy Policy", href: "/customer/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/customer/dashboard" className="font-heading text-lg font-bold text-primary">
              Astro Platform
            </Link>
            <p className="mt-2 text-xs text-muted-foreground">
              Consult expert astrologers. Panchang, Kundali, and personalised guidance.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Astro Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

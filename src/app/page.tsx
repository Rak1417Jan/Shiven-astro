import Link from "next/link";
import {
  consultationModes,
  coreServices,
  featuredAstrologers,
  learningCategories,
  remedies,
} from "@/data/landing/services";

export default function Home() {
  return (
    <div className="min-h-dvh bg-[#fef7ed] text-[#1c1917]">
      {/* Public header - warm white with saffron accent */}
      <header className="sticky top-0 z-30 border-b border-orange-200/80 bg-white/95 backdrop-blur-sm shadow-sm shadow-orange-100/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-md shadow-orange-300/40">
              <span className="text-xl font-semibold text-white">♃</span>
            </div>
            <div className="leading-tight">
              <p className="font-heading text-sm font-bold text-orange-600">
                Jyotish Platform
              </p>
              <p className="text-[11px] text-amber-800/70">
                Cosmic guidance · Practical clarity
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
            <Link href="#hero" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-orange-600 transition-colors">
              About Us
            </Link>
            <Link href="#services" className="hover:text-orange-600 transition-colors">
              Services
            </Link>
            <Link href="#panchang" className="hover:text-orange-600 transition-colors">
              Panchang
            </Link>
            <Link href="#online-astro" className="hover:text-orange-600 transition-colors">
              Online Astro
            </Link>
            <Link href="#learning" className="hover:text-orange-600 transition-colors">
              Learning
            </Link>
            <Link href="#resources" className="hover:text-orange-600 transition-colors">
              Resources
            </Link>
            <Link href="#contact" className="hover:text-orange-600 transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="rounded-full border border-orange-300 px-4 py-2 text-sm font-medium text-orange-700 hover:bg-orange-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hidden rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-300/40 hover:from-amber-600 hover:to-orange-600 transition-all md:inline-flex"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero - cream + soft orange glow */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-orange-100 bg-gradient-to-br from-[#fef7ed] via-[#fff8f0] to-[#fef3e2]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,146,60,0.25),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(245,158,11,0.15),transparent),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(254,243,199,0.5),transparent)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:py-24">
            <div className="max-w-xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-amber-800 shadow-sm">
                ✦ Trusted astrologers · Panchang · Kundli · Remedies
              </p>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-stone-800 md:text-4xl lg:text-5xl">
                Discover Cosmic Insights &amp; Connect with Expert Astrologers
              </h1>
              <p className="text-base text-stone-600 leading-relaxed">
                Get your Birth Kundali, Match Making, Prashna, Muhurt and more — all in one place. Chat, call or book sessions with verified astrologers in minutes.
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex flex-col gap-2 md:flex-row md:items-center">
                  <div className="flex-1 rounded-full border border-orange-200 bg-white px-4 py-3 shadow-inner">
                    <input
                      className="w-full bg-transparent text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none"
                      placeholder="Search astrologers by name, specialization, or service..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="/login"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-orange-300/40 hover:from-amber-600 hover:to-orange-600 transition-all md:flex-none"
                    >
                      Consult Now
                    </Link>
                    <Link
                      href="/login"
                      className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-orange-400 bg-white px-4 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition-colors md:flex-none"
                    >
                      Generate Kundli
                    </Link>
                  </div>
                </div>
                <p className="text-xs text-stone-500">
                  No login required to explore. Create a free account when you are ready to consult.
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative mx-auto max-w-sm rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl shadow-orange-200/30">
                <div className="mb-4 flex items-center justify-between text-xs text-amber-800/80">
                  <span>Today&apos;s Cosmic Snapshot</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-medium text-amber-800">
                    Panchang · Kundli · Remedies
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-4">
                    <p className="text-[11px] text-amber-700/80">Birth Kundali</p>
                    <p className="mt-1 text-sm font-semibold text-stone-800">Decode your life blueprint</p>
                    <p className="mt-1 text-[11px] text-stone-600">Planetary strengths, yogas &amp; life themes.</p>
                  </div>
                  <div className="rounded-2xl bg-orange-50/80 border border-orange-100 p-4">
                    <p className="text-[11px] text-orange-700/80">Match Making</p>
                    <p className="mt-1 text-sm font-semibold text-stone-800">Relationship clarity</p>
                    <p className="mt-1 text-[11px] text-stone-600">Kundli milan, guna score &amp; guidance.</p>
                  </div>
                  <div className="rounded-2xl bg-amber-50/80 border border-amber-100 p-4">
                    <p className="text-[11px] text-amber-700/80">Prashna</p>
                    <p className="mt-1 text-sm font-semibold text-stone-800">Ask a focused question</p>
                    <p className="mt-1 text-[11px] text-stone-600">Perfect for specific doubts.</p>
                  </div>
                  <div className="rounded-2xl bg-orange-50/80 border border-orange-100 p-4">
                    <p className="text-[11px] text-orange-700/80">Muhurt</p>
                    <p className="mt-1 text-sm font-semibold text-stone-800">Choose the right moment</p>
                    <p className="mt-1 text-[11px] text-stone-600">Weddings, property, business &amp; more.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-orange-100 pt-3 text-[11px] text-stone-500">
                  <span>Powered by verified astrologers</span>
                  <span className="text-amber-700">⭐ 4.8 · 10,000+ sessions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core services - white cards on cream */}
        <section id="services" className="border-b border-orange-100 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="max-w-2xl space-y-2">
              <h2 className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                Our Core Services
              </h2>
              <p className="text-base text-stone-600">
                Every journey is unique. Choose from powerful astrology services designed for clarity and growth.
              </p>
            </header>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {coreServices.map((service) => (
                <div
                  key={service.id}
                  className="group flex flex-col justify-between rounded-2xl border border-orange-100 bg-[#fef7ed] p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50"
                >
                  <div className="space-y-1.5">
                    <p className="text-[11px] uppercase tracking-widest text-orange-600 font-medium">
                      Astro Service
                    </p>
                    <h3 className="font-heading text-base font-semibold text-stone-800">
                      {service.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-600">
                      {service.description}
                    </p>
                  </div>
                  <button className="mt-4 inline-flex items-center justify-between rounded-full border border-orange-300 bg-white px-4 py-2 text-xs font-medium text-orange-600 transition group-hover:bg-orange-50 group-hover:border-orange-400">
                    <span>{service.cta}</span>
                    <span aria-hidden>→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full services catalogue */}
        <section className="border-b border-orange-100 bg-[#fef7ed] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="max-w-3xl space-y-2">
              <h2 className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                Explore All Astrology &amp; Allied Services
              </h2>
              <p className="text-base text-stone-600">
                Beyond core Kundali and matchmaking, our ecosystem covers specialised branches of astrology,
                remedies and spiritual sciences — so you can find exactly the support you need.
              </p>
            </header>

            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-sm text-stone-700">
              <div className="space-y-2">
                <h3 className="font-heading text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Core Astrology Branches
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                  <li>Vedic Astrology (Jyotish) / Natal Astrology (Janma Kundali)</li>
                  <li>Western Astrology (Sun-sign based)</li>
                  <li>Chinese Astrology (Lunar animal zodiac)</li>
                  <li>Horary Astrology (Prashna) – question based</li>
                  <li>Electional / Muhurta Astrology – auspicious timings</li>
                  <li>Mundane Astrology – world events &amp; politics</li>
                  <li>Medical Astrology – health &amp; wellness focus</li>
                  <li>Relationship / Synastry Astrology – compatibility</li>
                  <li>Nadi Astrology – palm-leaf based predictions</li>
                  <li>Corporate / Business Astrology &amp; finance</li>
                  <li>ALP Astrology (Advanced Lunar Prediction)</li>
                  <li>Lal Kitab Astrology – remedial system</li>
                  <li>Mole Astrology – body marks &amp; omens</li>
                  <li>Sports &amp; Stock Market Astrology</li>
                  <li>KP / Krishnamurti Paddhati Astrology</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Regional &amp; Esoteric Systems
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                  <li>Mayan Astrology</li>
                  <li>Tibetan Astrology</li>
                  <li>Egyptian Astrology</li>
                  <li>Karmic &amp; Past-Life Astrology</li>
                  <li>Evolutionary Astrology (Soul growth)</li>
                  <li>Psychological Astrology</li>
                  <li>Esoteric / Occult / Mystical Astrology</li>
                  <li>Astro-cartography (Locational Astrology)</li>
                </ul>

                <h3 className="mt-4 font-heading text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Environmental &amp; Spatial
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                  <li>Vastu Shastra (Indian architectural harmony)</li>
                  <li>Feng Shui (Chinese geomancy)</li>
                  <li>Astro-Vastu / Astro-Architecture</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Divination &amp; Predictive Arts
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                  <li>Numerology</li>
                  <li>Tarot Reading</li>
                  <li>Palmistry (Hasta Samudrik Shastra)</li>
                  <li>Face Reading / Physiognomy</li>
                  <li>Runes Reading</li>
                  <li>Pendulum Dowsing / Radiesthesia</li>
                  <li>Dream Interpretation (Oneiromancy)</li>
                  <li>Tea Leaf Reading (Tasseography)</li>
                  <li>Aura Reading &amp; Psychic Reading</li>
                </ul>

                <h3 className="mt-4 font-heading text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Remedies &amp; Healing
                </h3>
                <ul className="space-y-1.5 list-disc list-inside text-stone-700">
                  <li>Gemology / Gem Therapy (Ratna Shastra)</li>
                  <li>Crystal Astrology &amp; Crystal Healing</li>
                  <li>Mantra &amp; Yantra based remedies</li>
                  <li>Rudraksha &amp; sacred objects</li>
                  <li>Color Therapy linked to planets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Online consultation - light orange tint */}
        <section
          id="online-astro"
          className="border-b border-orange-100 bg-gradient-to-b from-[#fff8f0] to-[#fef7ed] py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <header className="max-w-2xl space-y-2">
              <h2 className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                Consult Online, Anytime
              </h2>
              <p className="text-base text-stone-600">
                Talk to astrologers over voice, video or chat. Get guidance when it matters — from anywhere.
              </p>
            </header>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {consultationModes.map((mode) => (
                <div
                  key={mode.id}
                  className="flex flex-col justify-between rounded-2xl border border-orange-100 bg-white p-5 shadow-sm text-stone-600 transition hover:border-orange-200 hover:shadow-md"
                >
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-sm font-semibold text-stone-800">
                      {mode.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                  <span className="mt-3 text-xs text-orange-600 font-medium">
                    Available with selected astrologers
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning & resources */}
        <section id="learning" className="border-b border-orange-100 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <header className="max-w-2xl space-y-2">
              <h2 className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                Expand Your Knowledge
              </h2>
              <p className="text-base text-stone-600">
                Learn the language of the cosmos with structured learning and real case studies.
              </p>
            </header>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {learningCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-orange-100 bg-[#fef7ed] p-5"
                >
                  <h3 className="font-heading text-base font-semibold text-stone-800">
                    {category.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-stone-600">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-orange-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured astrologers */}
        <section
          id="resources"
          className="border-b border-orange-100 bg-gradient-to-b from-[#fef7ed] to-[#fff8f0] py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <header className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div className="space-y-2">
                <h2 className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                  Our Trusted Astrologers
                </h2>
                <p className="text-base text-stone-600">
                  Handpicked experts in Vedic astrology, Vastu, Prashna and more — ready to guide you.
                </p>
              </div>
              <Link
                href="/customer/dashboard"
                className="inline-flex items-center justify-center rounded-full border-2 border-orange-400 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
              >
                View all astrologers
              </Link>
            </header>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featuredAstrologers.map((astro) => (
                <article
                  key={astro.id}
                  className="flex flex-col justify-between rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-base font-semibold text-stone-800">
                          {astro.name}
                        </h3>
                        <p className="text-xs text-stone-500">
                          {astro.specialization}
                        </p>
                      </div>
                      <div className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                        ⭐ {astro.rating.toFixed(1)}
                      </div>
                    </div>
                    <p className="text-xs text-stone-500">{astro.experience}</p>
                  </div>
                  <Link
href="/login"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-amber-600 hover:to-orange-600 transition-all"
                >
                  View Profile
                </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why do remedies */}
        <section
          id="panchang"
          className="border-b border-orange-100 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <header className="max-w-2xl space-y-2">
              <h2 className="font-heading text-2xl font-bold text-stone-800 md:text-3xl">
                Why Do Remedies?
              </h2>
              <p className="text-base text-stone-600">
                Remedies align your effort with supportive cosmic patterns — so you move with less friction and more grace.
              </p>
            </header>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {remedies.map((remedy) => (
                <div
                  key={remedy.id}
                  className="rounded-2xl border border-orange-100 bg-[#fef7ed] p-5"
                >
                  <h3 className="font-heading text-sm font-semibold text-orange-700">
                    {remedy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {remedy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / footer */}
        <section
          id="contact"
          className="border-b border-orange-100 bg-gradient-to-b from-[#fef7ed] to-[#fef3e2] py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-stone-800">
                  Ready to begin your cosmic journey?
                </h2>
                <p className="text-base text-stone-600">
                  Explore services freely, learn at your own pace, and connect with trusted astrologers when you are ready.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/40 hover:from-amber-600 hover:to-orange-600 transition-all"
                  >
                    Get Started for Free
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full border-2 border-orange-400 px-5 py-2.5 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    Already a member? Login
                  </Link>
                </div>
              </div>

              <div className="grid gap-6 text-sm text-stone-600 md:grid-cols-3">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-700">
                    Quick Links
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    <li><Link href="#" className="hover:text-orange-600">About Us</Link></li>
                    <li><Link href="#" className="hover:text-orange-600">Contact Us</Link></li>
                    <li><Link href="#" className="hover:text-orange-600">Terms &amp; Conditions</Link></li>
                    <li><Link href="#" className="hover:text-orange-600">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-orange-600">Refund Policy</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-700">
                    Resources &amp; Learning
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    <li>Blog &amp; Articles</li>
                    <li>Gallery &amp; Success Stories</li>
                    <li>Myths &amp; Facts</li>
                    <li>Right &amp; Wrong</li>
                    <li>Online Courses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-orange-700">
                    Connect With Us
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    <li>Quora</li>
                    <li>Podcast</li>
                    <li>Reels &amp; Shorts</li>
                    <li>Facebook · Instagram · YouTube</li>
                  </ul>
                  <div className="mt-3">
                    <label className="text-xs text-stone-500">Language</label>
                    <select className="mt-1 w-full rounded-lg border border-orange-200 bg-white px-3 py-2 text-sm text-stone-700">
                      <option>English</option>
                      <option>हिन्दी</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-orange-200 pt-4 text-xs text-stone-500">
              © {new Date().getFullYear()} Jyotish Platform. All rights reserved.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


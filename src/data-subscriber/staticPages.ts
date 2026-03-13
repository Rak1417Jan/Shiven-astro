/**
 * Static data for subscriber dashboard pages (non–coming-soon screens).
 */

// —— Services (astrology service types) ———
export const servicesStatic: Record<string, { title: string; description: string; items: { name: string; price: string; duration: string }[] }> = {
  "birth-kundali": {
    title: "Birth Kundali",
    description: "Detailed birth chart analysis and predictions.",
    items: [
      { name: "Basic Kundali", price: "₹499", duration: "30 min" },
      { name: "Detailed Kundali", price: "₹999", duration: "60 min" },
      { name: "Kundali with Remedies", price: "₹1,499", duration: "90 min" },
    ],
  },
  "match-making": {
    title: "Match Making",
    description: "Kundli matching for marriage compatibility.",
    items: [
      { name: "Basic Gun Milan", price: "₹399", duration: "—" },
      { name: "Detailed Match Report", price: "₹899", duration: "—" },
    ],
  },
  "prashna-kundali": {
    title: "Prashna Kundali",
    description: "Answer-based chart analysis.",
    items: [
      { name: "Single Question", price: "₹299", duration: "15 min" },
      { name: "Three Questions", price: "₹699", duration: "45 min" },
    ],
  },
  "daily-personal-worship": {
    title: "Daily & Personal Worship",
    description: "Personalized daily worship and ritual guidance.",
    items: [
      { name: "Daily Ritual Plan", price: "₹199", duration: "—" },
      { name: "Personal Puja Guidance", price: "₹499", duration: "30 min" },
    ],
  },
  "major-pujas-homams": {
    title: "Major Hindu Pujas & Homams",
    description: "Organisation and guidance for major ceremonies.",
    items: [
      { name: "Maha Mrityunjay Homam", price: "₹2,499", duration: "—" },
      { name: "Grah Shanti Puja", price: "₹1,999", duration: "—" },
    ],
  },
  "domestic-social-ceremonies": {
    title: "Domestic & Social Ceremonies",
    description: "Guidance for house and social events.",
    items: [
      { name: "House Warming", price: "₹1,499", duration: "—" },
      { name: "Naming Ceremony", price: "₹999", duration: "—" },
    ],
  },
  "life-cycle-rituals": {
    title: "Life-Cycle Rituals",
    description: "Samskaras and life-stage rituals.",
    items: [
      { name: "Upanayana", price: "₹3,499", duration: "—" },
      { name: "Vivaha Sanskar", price: "₹4,999", duration: "—" },
    ],
  },
  "death-post-death-rituals": {
    title: "Death & Post-Death Rituals",
    description: "Antyeshti and annual shraddha guidance.",
    items: [
      { name: "Shraddha Guidance", price: "₹1,299", duration: "—" },
      { name: "Pitru Paksha Puja", price: "₹999", duration: "—" },
    ],
  },
};

// —— Panchang ———
export const panchangStatic: Record<string, { title: string; subtitle: string; rows: { label: string; value: string }[] }> = {
  muhurt: {
    title: "Muhurt",
    subtitle: "Auspicious timings",
    rows: [
      { label: "Today’s Abhijit Muhurat", value: "12:08 PM – 12:56 PM" },
      { label: "Amrit Kalam", value: "08:42 AM – 10:18 AM" },
      { label: "Rahu Kalam", value: "03:00 PM – 04:36 PM" },
      { label: "Brahma Muhurat", value: "05:12 AM – 05:56 AM" },
    ],
  },
  "grah-rashi": {
    title: "Grah / Rashi (Info)",
    subtitle: "Planet and sign information",
    rows: [
      { label: "Sun", value: "Capricorn (Makara)" },
      { label: "Moon", value: "Sagittarius (Dhanu)" },
      { label: "Mars", value: "Leo (Simha)" },
      { label: "Mercury", value: "Capricorn (Makara)" },
      { label: "Jupiter", value: "Taurus (Vrishabha)" },
      { label: "Venus", value: "Sagittarius (Dhanu)" },
      { label: "Saturn", value: "Aquarius (Kumbha)" },
    ],
  },
  panchang: {
    title: "Panchang",
    subtitle: "Daily almanac",
    rows: [
      { label: "Tithi", value: "Krishna Paksha Chaturthi" },
      { label: "Nakshatra", value: "Mula" },
      { label: "Yoga", value: "Siddha" },
      { label: "Karana", value: "Bava" },
      { label: "Rahu Kalam", value: "03:00 PM – 04:36 PM" },
    ],
  },
  calendar: {
    title: "Hindu Calendar",
    subtitle: "Important dates",
    rows: [
      { label: "Maha Shivaratri", value: "Mar 8, 2026" },
      { label: "Holi", value: "Mar 14, 2026" },
      { label: "Ram Navami", value: "Mar 27, 2026" },
      { label: "Hanuman Jayanti", value: "Apr 12, 2026" },
    ],
  },
  "vrat-upvas": {
    title: "Vrat & Upvas",
    subtitle: "Fasts and observances",
    rows: [
      { label: "Today", value: "No major vrat" },
      { label: "Upcoming", value: "Maha Shivaratri Vrat – Mar 8" },
      { label: "Weekly", value: "Somvar Vrat (Mondays)" },
      { label: "Monthly", value: "Pradosh – Feb 28" },
    ],
  },
};

// —— Learning ———
export const learningStatic: Record<string, { title: string; items: { title: string; type: string; duration?: string }[] }> = {
  "video-lessons": {
    title: "Video Lessons",
    items: [
      { title: "Introduction to Vedic Astrology", type: "Video", duration: "45 min" },
      { title: "Understanding the 12 Rashis", type: "Video", duration: "1 hr" },
      { title: "Nakshatras Explained", type: "Video", duration: "55 min" },
    ],
  },
  "myths-facts": {
    title: "Myths & Facts",
    items: [
      { title: "Myth: Astrology is only sun signs", type: "Article" },
      { title: "Fact: Moon sign and rising matter", type: "Article" },
      { title: "Myth: Remedies always work instantly", type: "Article" },
    ],
  },
  "right-wrong": {
    title: "Right & Wrong",
    items: [
      { title: "Right way to wear gemstones", type: "Article" },
      { title: "Wrong timing for important work", type: "Article" },
    ],
  },
  courses: {
    title: "Online / Offline Courses",
    items: [
      { title: "Vedic Astrology Basics", type: "Course", duration: "8 weeks" },
      { title: "Remedial Astrology", type: "Course", duration: "6 weeks" },
    ],
  },
  "online-books": {
    title: "Online Books",
    items: [
      { title: "Brihat Parashara Hora Shastra (Summary)", type: "eBook" },
      { title: "Phaladeepika", type: "eBook" },
    ],
  },
  practices: {
    title: "List of Various Practices & Why to do it",
    items: [
      { title: "Daily Surya Namaskar", type: "Practice" },
      { title: "Mantra Japa", type: "Practice" },
      { title: "Donation (Daan) on birthdays", type: "Practice" },
    ],
  },
  remedies: {
    title: "Remedies",
    items: [
      { title: "Gemstone recommendations by Rashi", type: "Remedy" },
      { title: "Mantras for Graha Shanti", type: "Remedy" },
      { title: "Charity and fasting", type: "Remedy" },
    ],
  },
  "shloka-chants": {
    title: "Online Shloka Chants",
    items: [
      { title: "Ganesh Mantra", type: "Audio" },
      { title: "Navagraha Stotram", type: "Audio" },
      { title: "Hanuman Chalisa", type: "Audio" },
    ],
  },
};

// —— Resources ———
export const resourcesStatic: Record<string, { title: string; items: { title: string; date: string; excerpt: string }[] }> = {
  blogs: {
    title: "Blogs",
    items: [
      { title: "Understanding Your Moon Sign", date: "Feb 20, 2026", excerpt: "How the Moon sign affects emotions and daily life." },
      { title: "Gemstones in Vedic Astrology", date: "Feb 15, 2026", excerpt: "A guide to choosing and wearing gemstones." },
    ],
  },
  articles: {
    title: "Articles",
    items: [
      { title: "Dasha and Antardasha Simplified", date: "Feb 10, 2026", excerpt: "Timing of events through planetary periods." },
      { title: "Yogas in Birth Chart", date: "Feb 5, 2026", excerpt: "Important planetary combinations and their effects." },
    ],
  },
  "case-studies": {
    title: "Case Studies",
    items: [
      { title: "Career shift during Saturn transit", date: "Jan 28, 2026", excerpt: "How one client navigated Sade Sati." },
      { title: "Marriage timing and match-making", date: "Jan 20, 2026", excerpt: "Case of delayed marriage and remedies." },
    ],
  },
  gallery: {
    title: "Gallery",
    items: [
      { title: "Puja and Homam photos", date: "—", excerpt: "Gallery of ceremonies conducted." },
      { title: "Event and workshop images", date: "—", excerpt: "Seminars and workshops." },
    ],
  },
};

// —— Invoices ———
export const mockInvoices = [
  { id: "INV-001", date: "2026-02-20", client: "Ramesh K.", amount: 2499, status: "Paid" },
  { id: "INV-002", date: "2026-02-18", client: "Priya S.", amount: 999, status: "Paid" },
  { id: "INV-003", date: "2026-02-15", client: "Amit D.", amount: 1499, status: "Pending" },
  { id: "INV-004", date: "2026-02-10", client: "Sneha M.", amount: 399, status: "Paid" },
];

// —— Manage Products ———
export const mockProducts = [
  { id: "1", name: "Birth Kundali – Basic", price: 499, type: "Service", active: true },
  { id: "2", name: "Match Making Report", price: 899, type: "Report", active: true },
  { id: "3", name: "30-min Consultation", price: 799, type: "Service", active: true },
  { id: "4", name: "Yearly Horoscope", price: 599, type: "Report", active: false },
];

// —— Advertising ———
export const mockAdCampaigns = [
  { id: "1", name: "Facebook – Feb 2026", spend: 2500, reach: "12.5k", status: "Active" },
  { id: "2", name: "Google Ads – Astrology", spend: 5000, reach: "28k", status: "Completed" },
  { id: "3", name: "Instagram Reels", spend: 0, reach: "8.2k", status: "Active" },
];

// —— Digital Wallet ———
export const mockWallet = { balance: 12450, currency: "INR" };
export const mockWalletHistory = [
  { id: "1", desc: "Credit – Consultation", amount: 799, date: "2026-02-22" },
  { id: "2", desc: "Debit – Payout", amount: -5000, date: "2026-02-20" },
  { id: "3", desc: "Credit – Kundali", amount: 999, date: "2026-02-18" },
];

// —— Retail & Subscriptions ———
export const mockRetailPurchases = [
  { id: "1", item: "Rudraksha Mala", amount: 899, date: "2026-02-15" },
  { id: "2", item: "Panchang 2026", amount: 199, date: "2026-02-01" },
];
export const mockSubscriptions = [
  { id: "1", plan: "Pro Astrologer", price: 999, renews: "2026-03-26" },
];

// —— Website Updates (Reels, Podcasts, etc.) ———
export const websiteUpdatesStatic: Record<string, { title: string; items: { title: string; date?: string; type: string }[] }> = {
  reels: { title: "Reels", items: [{ title: "Quick tip: Moon and emotions", type: "Reel", date: "Feb 22" }, { title: "Rashi of the day", type: "Reel", date: "Feb 20" }] },
  podcasts: { title: "Podcasts", items: [{ title: "Ep 5: Saturn and karma", type: "Podcast", date: "Feb 18" }, { title: "Ep 4: Marriage timing", type: "Podcast", date: "Feb 10" }] },
  "online-books": { title: "Online Books", items: [{ title: "Panchang 2026", type: "eBook" }, { title: "Remedy Handbook", type: "eBook" }] },
  services: { title: "Online / Offline Services", items: [{ title: "All services listed", type: "Link" }, { title: "Book appointment", type: "Link" }] },
  newsletter: { title: "Newsletter Subscription", items: [{ title: "Subscribers: 1,240", type: "Stat" }, { title: "Last sent: Feb 20", type: "Stat" }] },
};

// —— Libraries ———
export const mockLibraries = [
  { id: "1", name: "Vedic Astrology Basics", type: "Collection", count: 24 },
  { id: "2", name: "Remedies & Mantras", type: "Collection", count: 18 },
  { id: "3", name: "Classical Texts (Summaries)", type: "Collection", count: 12 },
];

// —— Reviews / Star Rating ———
export const mockReviews = [
  { id: "1", client: "Ramesh K.", rating: 5, comment: "Very accurate and helpful.", date: "2026-02-20" },
  { id: "2", client: "Priya S.", rating: 4, comment: "Good session, would recommend.", date: "2026-02-18" },
  { id: "3", client: "Amit D.", rating: 5, comment: "Remedies worked well.", date: "2026-02-15" },
];
export const mockReviewStats = { average: 4.7, total: 128 };

// —— Queries & Requests ———
export const mockQueries = [
  { id: "1", subject: "Career guidance", status: "Replied", date: "2026-02-21" },
  { id: "2", subject: "Marriage compatibility", status: "Pending", date: "2026-02-22" },
  { id: "3", subject: "Remedy follow-up", status: "Replied", date: "2026-02-19" },
];

// —— Dynamic Forms ———
export const mockForms = [
  { id: "1", name: "Client intake form", responses: 45, lastUsed: "2026-02-22" },
  { id: "2", name: "Service feedback", responses: 120, lastUsed: "2026-02-20" },
];

// —— Referral ———
export const mockReferralStats = { totalReferrals: 23, converted: 18, earnings: 3600 };
export const mockReferralList = [
  { id: "1", name: "Vikram R.", joined: "2026-02-15", bonus: 200 },
  { id: "2", name: "Anita M.", joined: "2026-02-10", bonus: 200 },
];

// —— CRM ———
export const mockCrmContacts = [
  { id: "1", name: "Ramesh K.", segment: "VIP", lastContact: "2026-02-20", bookings: 5 },
  { id: "2", name: "Priya S.", segment: "Regular", lastContact: "2026-02-18", bookings: 2 },
  { id: "3", name: "Amit D.", segment: "New", lastContact: "2026-02-15", bookings: 1 },
];

// —— Leads ———
export const mockLeads = [
  { id: "1", name: "New Lead 1", source: "Website", status: "New", date: "2026-02-22" },
  { id: "2", name: "New Lead 2", source: "Referral", status: "Contacted", date: "2026-02-21" },
  { id: "3", name: "New Lead 3", source: "Facebook", status: "Qualified", date: "2026-02-20" },
];

// —— Location ———
export const mockLocations = [
  { id: "1", name: "Main Office", address: "123 Temple St, City", shared: true },
  { id: "2", name: "Home (Consultation)", address: "Private", shared: false },
];

// —— Reports ———
export const mockReportTypes = [
  { id: "1", name: "Earnings summary", lastGenerated: "2026-02-20" },
  { id: "2", name: "Client list export", lastGenerated: "2026-02-18" },
  { id: "3", name: "Booking report", lastGenerated: "2026-02-22" },
];

// —— Events ———
export const eventsStatic: Record<string, { title: string; items: { title: string; date: string; status: string }[] }> = {
  "job-fair": { title: "Job Fair", items: [{ title: "Astrology Career Fair 2026", date: "Mar 15, 2026", status: "Open" }] },
  webinars: { title: "Counseling Webinars", items: [{ title: "Stress and Planets", date: "Mar 1, 2026", status: "Registered" }, { title: "Relationship Astrology", date: "Mar 10, 2026", status: "Open" }] },
  registration: { title: "Event Registration & Reminders", items: [{ title: "Maha Shivaratri Workshop", date: "Mar 8", status: "Reminder set" }] },
  "live-sessions": { title: "Live Sessions", items: [{ title: "Weekly Q&A – Mar 2", date: "Mar 2, 6 PM", status: "Scheduled" }] },
};

// —— Communications ———
export const communicationsStatic: Record<string, { title: string; items: { to: string; preview: string; date: string }[] }> = {
  manual: { title: "Manual Message", items: [{ to: "Ramesh K.", preview: "Thank you for the booking...", date: "2026-02-22" }] },
  scheduled: { title: "Scheduled Message", items: [{ to: "All clients", preview: "Reminder: Tomorrow’s session...", date: "2026-02-23" }] },
  whatsapp: { title: "WhatsApp Chatbot", items: [{ to: "Bot", preview: "Replies: 45 today", date: "2026-02-22" }] },
  templates: { title: "Templates Based Updates", items: [{ to: "Booking confirmation", preview: "Template used 120 times", date: "—" }] },
};

// —— Auto-Mailer ———
export const mockMailerCampaigns = [
  { id: "1", name: "Weekly horoscope", sent: "2026-02-20", opens: "42%" },
  { id: "2", name: "New service launch", sent: "2026-02-15", opens: "38%" },
];

// —— Mailing List ———
export const mockMailingList = [
  { id: "1", email: "ramesh@example.com", name: "Ramesh K.", subscribed: true },
  { id: "2", email: "priya@example.com", name: "Priya S.", subscribed: true },
  { id: "3", email: "amit@example.com", name: "Amit D.", subscribed: false },
];

// —— Contact Management ———
export const mockContacts = [
  { id: "1", name: "Ramesh K.", email: "ramesh@example.com", phone: "+91 98xxx", tags: "VIP" },
  { id: "2", name: "Priya S.", email: "priya@example.com", phone: "+91 97xxx", tags: "Regular" },
];

// —— Files & Folder ———
export const mockFiles = [
  { id: "1", name: "Kundali templates", type: "Folder", updated: "2026-02-20" },
  { id: "2", name: "Report_Feb2026.pdf", type: "File", updated: "2026-02-22" },
  { id: "3", name: "Marketing assets", type: "Folder", updated: "2026-02-15" },
];

// —— Analytics ———
export const mockAnalytics = [
  { label: "Profile views", value: "1,240" },
  { label: "Booking requests", value: "89" },
  { label: "Conversion rate", value: "7.2%" },
];

// —— Service Requests ———
export const mockServiceRequests = [
  { id: "1", type: "Technical", subject: "Cannot upload photo", status: "Open", date: "2026-02-22" },
  { id: "2", type: "Billing", subject: "Payout delay", status: "Resolved", date: "2026-02-18" },
];

// —— Consultation (Voice/Video) ———
export const mockConsultationSlots = [
  { id: "1", date: "2026-02-27", time: "10:00 AM", duration: "30 min", available: true },
  { id: "2", date: "2026-02-27", time: "11:00 AM", duration: "30 min", available: false },
  { id: "3", date: "2026-02-28", time: "09:00 AM", duration: "60 min", available: true },
];

// —— Questions (Quara-style) ———
export const mockQuestions = [
  { id: "1", question: "Is this a good time for property purchase?", answered: true, date: "2026-02-21" },
  { id: "2", question: "Which gemstone for career?", answered: true, date: "2026-02-20" },
  { id: "3", question: "Marriage timing in my chart?", answered: false, date: "2026-02-22" },
];

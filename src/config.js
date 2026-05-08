/**
 * ============================================================
 *  EDIT THIS FILE ONLY — all pages read from here
 * ============================================================
 */

export const APP = {
  name: "To The Summit!",
  tagline: "Meet up on the mountain top. Build your own ski routes and find your friends.",
  description:
      "Roam the mountains, but find your way to your friends easily and safely. Plan your next adventures on the slopes, and organize meetups for lunch or apres-ski together while you're on the mountain.",
  ctaLabel: "Join the Waitlist",
  ctaHref: "mailto:info@weatherlightventures.com",
  secondaryCtaLabel: "View on GitHub",
  secondaryCtaHref: "https://github.com/blackbeltbob/summit",

  // Drop your logo file into /public and set the path here.
  // Set to null to show the app name as text instead.
  logoSrc: null, // e.g. "/logo.png"
  logoAlt: "YourApp logo",

  // Add as many screenshots as you like.
  // Put images in /public and reference them as "/screenshot1.png" etc.
  screenshots: [
    { src: "/screenshot1.png", alt: "Main dashboard" },
    { src: "/screenshot2.png", alt: "Settings panel" },
  ],

  featureDescription: "Our Strenghts",
  features: [
    { icon: "🛠️", title: "Everyone", body: "Easy registration, just invite your friends to join you." },
    { icon: "⚡", title: "Easily", body: "Tell us where you want to go, and we'll plot a course." },
    { icon: "🔒", title: "Safely", body: "Define your limits, and we'll avoid challenges too great for you." },
    { icon: "🌍", title: "Everywhere", body: "Select locations from a list of slopes, restaurants, and bars." },
  ],

  footer: {
    company: "Weatherlight Ventures",
    year: new Date().getFullYear(),
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact", href: "mailto:info@weatherlightventures.com" },
    ],
  },

  // Privacy page content — edit the sections array to add/remove/reorder.
  privacy: {
    lastUpdated: "May 2026",
    intro: "Your privacy matters. This policy explains what data YourApp collects, why, and how it's handled.",
    sections: [
      {
        title: "Data we collect",
        body: "Describe the data you collect (e.g. email address on sign-up, usage analytics, crash reports). Be specific and honest.",
      },
      {
        title: "How we use it",
        body: "Explain the purpose: improving the product, sending updates, etc. If you sell or share data with third parties, say so here.",
      },
      {
        title: "Storage & security",
        body: "Where is data stored? Which third-party services do you use (e.g. Supabase, AWS)? What security measures are in place?",
      },
      {
        title: "Your rights",
        body: "Users can request deletion or export of their data at any time by emailing you@example.com.",
      },
      {
        title: "Cookies",
        body: "Describe your cookie usage. If you use analytics (e.g. Plausible, GA), mention it here.",
      },
      {
        title: "Changes to this policy",
        body: "We may update this policy. When we do, we'll update the date above. Continued use of the app constitutes acceptance.",
      },
      {
        title: "Contact",
        body: "Questions? Email us at you@example.com.",
      },
    ],
  },
};

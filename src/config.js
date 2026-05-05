/**
 * ============================================================
 *  EDIT THIS FILE ONLY — all pages read from here
 * ============================================================
 */
export const APP = {
  name: "YourApp",
  tagline: "The one-line pitch that makes someone stop scrolling.",
  description:
    "A short paragraph (2–3 sentences) describing what your app does, who it's for, and the core problem it solves. Keep it honest and specific.",
  ctaLabel: "Join the Waitlist",
  ctaHref: "mailto:you@example.com",
  secondaryCtaLabel: "View on GitHub",
  secondaryCtaHref: "https://github.com/you/yourapp",

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

  features: [
    { icon: "⚡", title: "Fast", body: "One sentence on why this feature matters to users." },
    { icon: "🔒", title: "Private", body: "One sentence on why this feature matters to users." },
    { icon: "🌍", title: "Everywhere", body: "One sentence on why this feature matters to users." },
    { icon: "🛠️", title: "Customisable", body: "One sentence on why this feature matters to users." },
  ],

  footer: {
    company: "Your Name / Company",
    year: new Date().getFullYear(),
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact", href: "mailto:you@example.com" },
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

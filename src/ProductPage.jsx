/**
 * ============================================================
 *  EDIT THIS SECTION ONLY — everything else updates itself
 * ============================================================
 */
const APP = {
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
};
/** ============================================================ */


const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink:    #0f0f11;
    --bg:     #f7f5f0;
    --accent: #d4501a;
    --muted:  #7a7870;
    --card:   #ffffff;
    --border: #e2e0da;
    --radius: 16px;
  }

  body { background: var(--bg); color: var(--ink); font-family: 'DM Sans', sans-serif; }

  /* NAV */
  .nav {
    position: sticky; top: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(247,245,240,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }
  .nav-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.25rem; letter-spacing: -0.02em; }
  .nav-logo img { height: 32px; }
  .nav-cta {
    background: var(--ink); color: #fff;
    border: none; border-radius: 8px;
    padding: 0.5rem 1.25rem; font-size: 0.875rem; font-family: inherit;
    cursor: pointer; transition: opacity .15s;
  }
  .nav-cta:hover { opacity: 0.8; }

  /* HERO */
  .hero {
    max-width: 860px; margin: 0 auto;
    padding: 6rem 2rem 4rem;
    text-align: center;
  }
  .hero-eyebrow {
    display: inline-block;
    background: var(--accent); color: #fff;
    font-size: 0.75rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
    padding: 0.25rem 0.75rem; border-radius: 999px; margin-bottom: 1.5rem;
  }
  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800; line-height: 1.05; letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
  }
  .hero p {
    font-size: 1.125rem; color: var(--muted); line-height: 1.7;
    max-width: 560px; margin: 0 auto 2.5rem;
  }
  .hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .btn-primary {
    background: var(--accent); color: #fff;
    border: none; border-radius: 10px;
    padding: 0.85rem 2rem; font-size: 1rem; font-family: inherit; font-weight: 600;
    cursor: pointer; text-decoration: none;
    transition: transform .15s, box-shadow .15s;
    box-shadow: 0 4px 14px rgba(212,80,26,0.35);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(212,80,26,0.4); }
  .btn-secondary {
    background: transparent; color: var(--ink);
    border: 1.5px solid var(--border); border-radius: 10px;
    padding: 0.85rem 2rem; font-size: 1rem; font-family: inherit; font-weight: 400;
    cursor: pointer; text-decoration: none;
    transition: border-color .15s;
  }
  .btn-secondary:hover { border-color: var(--ink); }

  /* SCREENSHOTS */
  .screenshots { padding: 3rem 2rem 5rem; }
  .screenshots-inner { max-width: 1000px; margin: 0 auto; }
  .screenshots h2 { font-family: 'Syne', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 1.5rem; }
  .screenshot-rail { display: flex; gap: 1.25rem; overflow-x: auto; padding-bottom: 1rem; scroll-snap-type: x mandatory; }
  .screenshot-rail::-webkit-scrollbar { height: 4px; }
  .screenshot-rail::-webkit-scrollbar-thumb { background: var(--border); border-radius: 999px; }
  .screenshot-card {
    flex: 0 0 auto; scroll-snap-align: start;
    width: min(80vw, 640px);
    border-radius: var(--radius);
    overflow: hidden;
    border: 1px solid var(--border);
    background: var(--card);
    box-shadow: 0 2px 20px rgba(0,0,0,0.07);
  }
  .screenshot-card img { width: 100%; height: auto; display: block; }
  .screenshot-placeholder {
    width: 100%; aspect-ratio: 16/9;
    background: linear-gradient(135deg, #e8e4dc 0%, #d8d4cc 100%);
    display: flex; align-items: center; justify-content: center;
    color: var(--muted); font-size: 0.875rem;
  }

  /* FEATURES */
  .features { padding: 4rem 2rem; background: var(--ink); color: #fff; }
  .features-inner { max-width: 900px; margin: 0 auto; }
  .features-header { margin-bottom: 3rem; }
  .features-header h2 {
    font-family: 'Syne', sans-serif; font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 800; letter-spacing: -0.02em;
  }
  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
  .feature-card { padding: 1.5rem; border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius); }
  .feature-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
  .feature-title { font-family: 'Syne', sans-serif; font-weight: 700; margin-bottom: 0.5rem; }
  .feature-body { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

  /* FOOTER */
  .footer { padding: 2.5rem 2rem; border-top: 1px solid var(--border); }
  .footer-inner { max-width: 900px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
  .footer-copy { font-size: 0.875rem; color: var(--muted); }
  .footer-links { display: flex; gap: 1.5rem; }
  .footer-links a { font-size: 0.875rem; color: var(--muted); text-decoration: none; }
  .footer-links a:hover { color: var(--ink); }

  @media (max-width: 600px) {
    .nav { padding: 1rem; }
    .hero { padding: 4rem 1.25rem 3rem; }
    .footer-inner { flex-direction: column; align-items: flex-start; }
  }
`;

export default function ProductPage() {
  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          {APP.logoSrc ? <img src={APP.logoSrc} alt={APP.logoAlt} /> : APP.name}
        </div>
        <a className="nav-cta" href={APP.ctaHref}>{APP.ctaLabel}</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <span className="hero-eyebrow">Early Access</span>
        <h1>{APP.tagline}</h1>
        <p>{APP.description}</p>
        <div className="hero-actions">
          <a className="btn-primary" href={APP.ctaHref}>{APP.ctaLabel}</a>
          {APP.secondaryCtaHref && (
            <a className="btn-secondary" href={APP.secondaryCtaHref} target="_blank" rel="noreferrer">
              {APP.secondaryCtaLabel}
            </a>
          )}
        </div>
      </section>

      {/* SCREENSHOTS */}
      {APP.screenshots.length > 0 && (
        <section className="screenshots">
          <div className="screenshots-inner">
            <h2>Screenshots</h2>
            <div className="screenshot-rail">
              {APP.screenshots.map((s, i) => (
                <div className="screenshot-card" key={i}>
                  {s.src
                    ? <img src={s.src} alt={s.alt} loading="lazy" />
                    : <div className="screenshot-placeholder">{s.alt}</div>
                  }
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="features">
        <div className="features-inner">
          <div className="features-header">
            <h2>Why {APP.name}?</h2>
          </div>
          <div className="features-grid">
            {APP.features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-body">{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-copy">
            © {APP.footer.year} {APP.footer.company}
          </span>
          <nav className="footer-links">
            {APP.footer.links.map((l, i) => (
              <a key={i} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}

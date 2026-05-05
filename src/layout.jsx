import { Link } from "react-router-dom";
import { APP } from "./config";

export const globalCss = `
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
  .nav-logo {
    font-family: 'Syne', sans-serif; font-weight: 800;
    font-size: 1.25rem; letter-spacing: -0.02em;
    text-decoration: none; color: var(--ink);
  }
  .nav-logo img { height: 32px; }
  .nav-cta {
    background: var(--ink); color: #fff;
    border: none; border-radius: 8px;
    padding: 0.5rem 1.25rem; font-size: 0.875rem; font-family: inherit;
    cursor: pointer; transition: opacity .15s; text-decoration: none;
  }
  .nav-cta:hover { opacity: 0.8; }

  /* FOOTER */
  .footer { padding: 2.5rem 2rem; border-top: 1px solid var(--border); }
  .footer-inner { max-width: 900px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
  .footer-copy { font-size: 0.875rem; color: var(--muted); }
  .footer-links { display: flex; gap: 1.5rem; }
  .footer-links a { font-size: 0.875rem; color: var(--muted); text-decoration: none; }
  .footer-links a:hover { color: var(--ink); }

  @media (max-width: 600px) {
    .nav { padding: 1rem; }
    .footer-inner { flex-direction: column; align-items: flex-start; }
  }
`;

export function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-logo" to="/">
        {APP.logoSrc ? <img src={APP.logoSrc} alt={APP.logoAlt} /> : APP.name}
      </Link>
      <a className="nav-cta" href={APP.ctaHref}>{APP.ctaLabel}</a>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">© {APP.footer.year} {APP.footer.company}</span>
        <nav className="footer-links">
          {APP.footer.links.map((l, i) => (
            l.href.startsWith("/")
              ? <Link key={i} to={l.href}>{l.label}</Link>
              : <a key={i} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

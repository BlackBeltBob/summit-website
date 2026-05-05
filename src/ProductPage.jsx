import { APP } from "./config";
import { globalCss, Nav, Footer } from "./layout";

const css = `
  ${globalCss}

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
    font-family: 'Roboto', sans-serif;
    font-size: clamp(2.5rem, 4vw, 3rem);
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

  .screenshots { padding: 3rem 2rem 5rem; }
  .screenshots-inner { max-width: 1000px; margin: 0 auto; }
  .screenshots h2 { font-family: 'Roboto', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 1.5rem; }
  .screenshot-rail { display: flex; gap: 1.25rem; overflow-x: auto; padding-bottom: 1rem; scroll-snap-type: x mandatory; }
  .screenshot-rail::-webkit-scrollbar { height: 4px; }
  .screenshot-rail::-webkit-scrollbar-thumb { background: var(--border); border-radius: 999px; }
  .screenshot-card {
    flex: 0 0 auto; scroll-snap-align: start;
    width: min(80vw, 640px);
    border-radius: var(--radius); overflow: hidden;
    border: 1px solid var(--border); background: var(--card);
    box-shadow: 0 2px 20px rgba(0,0,0,0.07);
  }
  .screenshot-card img { width: 100%; height: auto; display: block; }
  .screenshot-placeholder {
    width: 100%; aspect-ratio: 16/9;
    background: linear-gradient(135deg, #e8e4dc 0%, #d8d4cc 100%);
    display: flex; align-items: center; justify-content: center;
    color: var(--muted); font-size: 0.875rem;
  }

  .features { padding: 4rem 2rem; background: var(--ink); color: #fff; }
  .features-inner { max-width: 900px; margin: 0 auto; }
  .features-header { margin-bottom: 3rem; }
  .features-header h2 {
    font-family: 'Roboto', sans-serif; font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 800; letter-spacing: -0.02em;
  }
  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
  .feature-card { padding: 1.5rem; border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius); }
  .feature-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
  .feature-title { font-family: 'Roboto', sans-serif; font-weight: 700; margin-bottom: 0.5rem; }
  .feature-body { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

  @media (max-width: 600px) {
    .hero { padding: 4rem 1.25rem 3rem; }
  }
`;

export default function ProductPage() {
  return (
    <>
      <style>{css}</style>
      <Nav />

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

      <section className="features">
        <div className="features-inner">
          <div className="features-header">
            <h2>{APP.featureDescription}</h2>
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

      <Footer />
    </>
  );
}

import { APP } from "./config";
import { globalCss, Nav, Footer } from "./layout";

const css = `
  ${globalCss}

  .privacy-hero {
    max-width: 720px; margin: 0 auto;
    padding: 5rem 2rem 3rem;
  }
  .privacy-eyebrow {
    display: inline-block;
    font-size: 0.75rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 1rem;
  }
  .privacy-hero h1 {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;
    margin-bottom: 1rem;
  }
  .privacy-intro {
    font-size: 1.05rem; color: var(--muted); line-height: 1.7;
  }

  .privacy-body {
    max-width: 720px; margin: 0 auto;
    padding: 0 2rem 5rem;
  }
  .privacy-section {
    padding: 2rem 0;
    border-top: 1px solid var(--border);
  }
  .privacy-section h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem; font-weight: 700;
    margin-bottom: 0.75rem;
  }
  .privacy-section p {
    font-size: 0.95rem; color: var(--muted); line-height: 1.75;
  }

  @media (max-width: 600px) {
    .privacy-hero { padding: 3rem 1.25rem 2rem; }
    .privacy-body { padding: 0 1.25rem 4rem; }
  }
`;

export default function PrivacyPage() {
  const { privacy } = APP;
  return (
    <>
      <style>{css}</style>
      <Nav />

      <div className="privacy-hero">
        <span className="privacy-eyebrow">Last updated: {privacy.lastUpdated}</span>
        <h1>Privacy Policy</h1>
        <p className="privacy-intro">{privacy.intro}</p>
      </div>

      <div className="privacy-body">
        {privacy.sections.map((s, i) => (
          <div className="privacy-section" key={i}>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

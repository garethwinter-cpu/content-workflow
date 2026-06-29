import { PHASES } from "@/lib/workflow";

function WingMark() {
  // Compact glyph, uses currentColor; set color on the parent.
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 13c4.5 0 8-3.2 9-8 1 4.8 4.5 8 9 8-4.5 0-8 3.2-9 8-1-4.8-4.5-8-9-8z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 3 }}
    >
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="var(--brand)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* Top bar */}
      <header className="mv-topbar">
        <div className="mv-container mv-topbar-inner">
          <a href="#top" className="mv-wordmark">
            <span style={{ color: "var(--brand)" }}>
              <WingMark />
            </span>
            Mindvalley Organic Social
          </a>
          <nav className="mv-nav">
            <a className="mv-nav-link is-active" href="#loop">
              The loop
            </a>
            <a className="mv-nav-link" href="#phases">
              Phases
            </a>
            <a className="mv-nav-link" href="#close">
              Continuous loop
            </a>
          </nav>
          <a className="mv-btn mv-btn-primary" href="#phases">
            Explore the engine
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mv-hero" id="top">
        <div className="mv-hero-grad" />
        <div
          className="mv-container"
          style={{ position: "relative", paddingTop: 96, paddingBottom: 96 }}
        >
          <p
            className="mv-overline"
            style={{ color: "var(--brand-bright)", marginBottom: 20 }}
          >
            Workflow engine
          </p>
          <h1 className="mv-title-1" style={{ maxWidth: 820, margin: 0 }}>
            End-to-end organic content operations
          </h1>
          <p
            className="mv-body-lg"
            style={{
              maxWidth: 640,
              marginTop: 24,
              color: "var(--dark-text-muted)",
            }}
          >
            Eight interconnected phases forming a continuous loop — from the data
            that shapes every decision, through production and publishing, to the
            learnings that feed it all back in.
          </p>
          <div
            style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}
          >
            <a className="mv-btn mv-btn-inverse" href="#phases">
              Walk the phases
              <ArrowRight />
            </a>
            <a
              className="mv-btn"
              href="#close"
              style={{
                background: "transparent",
                color: "var(--white)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              How the loop closes
            </a>
          </div>

          {/* Stat strip */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 64,
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "8", l: "Interconnected phases" },
              { n: "8", l: "Operating layers" },
              { n: "∞", l: "Continuous loop" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="mv-title-2"
                  style={{ color: "var(--white)" }}
                >
                  {s.n}
                </div>
                <div
                  className="mv-body-sm"
                  style={{ color: "var(--dark-text-muted)" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loop overview rail */}
      <section className="mv-section-tight" id="loop">
        <div className="mv-container">
          <p className="mv-overline" style={{ marginBottom: 12 }}>
            The loop at a glance
          </p>
          <h2 className="mv-title-3" style={{ margin: "0 0 8px" }}>
            One continuous engine, eight phases
          </h2>
          <p
            className="mv-body-md"
            style={{ color: "var(--text-muted)", maxWidth: 620, margin: 0 }}
          >
            Each phase hands off to the next. Phase 08 feeds straight back into
            Phase 01.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 16,
              marginTop: 32,
            }}
          >
            {PHASES.map((p) => (
              <a
                key={p.num}
                href={`#phase-${p.num}`}
                className="mv-card mv-card-interactive"
                style={{ display: "block", color: "inherit" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <span
                    className="mv-title-4"
                    style={{ color: "var(--brand)" }}
                  >
                    {p.num}
                  </span>
                  <span className="mv-badge">{p.layer}</span>
                </div>
                <div className="mv-title-7" style={{ marginBottom: 4 }}>
                  {p.name}
                </div>
                <div
                  className="mv-body-sm"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {p.transition} →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Phase detail */}
      <section className="mv-section" id="phases" style={{ background: "var(--bg-muted)" }}>
        <div className="mv-container">
          <p className="mv-overline" style={{ marginBottom: 12 }}>
            The phases
          </p>
          <h2 className="mv-title-3" style={{ margin: "0 0 48px" }}>
            From signal to story to learning
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PHASES.map((p, i) => (
              <div key={p.num} id={`phase-${p.num}`} style={{ scrollMarginTop: 80 }}>
                <article className="mv-card" style={{ padding: 32 }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 24,
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Number + layer */}
                    <div style={{ minWidth: 96 }}>
                      <div
                        className="mv-display-2"
                        style={{
                          color: "var(--brand)",
                          lineHeight: 1,
                          fontSize: 64,
                        }}
                      >
                        {p.num}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <span className="mv-badge">{p.layer}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ flex: 1, minWidth: 280 }}>
                      <h3 className="mv-title-4" style={{ margin: "0 0 12px" }}>
                        {p.name}
                      </h3>
                      <p
                        className="mv-body-md"
                        style={{
                          color: "var(--text-muted)",
                          margin: "0 0 24px",
                          maxWidth: 640,
                        }}
                      >
                        {p.description}
                      </p>

                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 24px",
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fill, minmax(280px, 1fr))",
                          gap: "10px 24px",
                        }}
                      >
                        {p.tasks.map((t) => (
                          <li
                            key={t}
                            className="mv-body-sm"
                            style={{
                              display: "flex",
                              gap: 10,
                              color: "var(--text)",
                            }}
                          >
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
                      >
                        {p.tools.map((tool) => (
                          <span key={tool} className="mv-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>

                {/* Transition connector */}
                {i < PHASES.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "20px 0 20px 40px",
                      color: "var(--brand-content)",
                    }}
                  >
                    <span
                      style={{
                        width: 1,
                        height: 24,
                        background: "var(--brand-border)",
                      }}
                    />
                    <span className="mv-title-8">{p.transition}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous loop close */}
      <section className="mv-section" id="close">
        <div className="mv-container">
          <div
            className="mv-card"
            style={{
              background: "var(--brand-light)",
              border: "1px solid var(--brand-border)",
              boxShadow: "none",
              padding: 48,
              textAlign: "center",
            }}
          >
            <p className="mv-overline" style={{ marginBottom: 12 }}>
              Continuous loop
            </p>
            <h2
              className="mv-title-3"
              style={{ margin: "0 auto 16px", maxWidth: 720 }}
            >
              Every publish generates data that feeds back into Phase 01
            </h2>
            <p
              className="mv-body-lg"
              style={{
                color: "var(--text-muted)",
                margin: "0 auto 28px",
                maxWidth: 640,
              }}
            >
              Learnings feed back into audience intelligence, sharpening the next
              strategy, the next idea, the next post — a continuously improving
              content engine.
            </p>
            <a className="mv-btn mv-btn-primary" href="#top">
              Back to the top
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px 0",
        }}
      >
        <div
          className="mv-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div className="mv-wordmark">
            <span style={{ color: "var(--brand)" }}>
              <WingMark />
            </span>
            Mindvalley Organic Social
          </div>
          <p className="mv-body-sm" style={{ color: "var(--text-subtle)", margin: 0 }}>
            End-to-end organic content operations
          </p>
        </div>
      </footer>
    </main>
  );
}

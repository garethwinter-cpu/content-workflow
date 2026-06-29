import Link from "next/link";
import {
  SHOW,
  OPERATOR_LAWS,
  GUEST_SCORECARD,
  SHOW_ARCHITECTURE,
  POD_PHASES,
  GUEST_PIPELINE,
  EPISODE,
  RUN_OF_SHOW,
  ANGLE_OPTIONS,
  EPISODE_EDITS,
  DISTRIBUTION,
  METRICS,
  type Stage,
  type EditStatus,
  type DeliveryStatus,
} from "@/lib/podcast";

// ---------- Glyphs ----------

function WingMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

// ---------- Status → colour mapping ----------

function stageTone(stage: Stage): string {
  switch (stage) {
    case "Published":
      return "mv-status-green";
    case "Recorded":
    case "In post":
    case "Booked":
      return "mv-status-blue";
    case "In conversation":
    case "Outreach sent":
      return "mv-status-orange";
    case "Passed":
      return "mv-status-grey";
    default:
      return "mv-status-brand";
  }
}

function editTone(status: EditStatus): string {
  switch (status) {
    case "Approved":
    case "Delivered":
      return "mv-status-green";
    case "In review":
      return "mv-status-blue";
    case "Changes":
      return "mv-status-orange";
    case "Briefed":
      return "mv-status-grey";
    default:
      return "mv-status-brand";
  }
}

function deliveryTone(status: DeliveryStatus): string {
  switch (status) {
    case "Published":
      return "mv-status-green";
    case "Scheduled":
      return "mv-status-blue";
    case "Versioning":
      return "mv-status-orange";
    default:
      return "mv-status-grey";
  }
}

export default function PodcastWorkflow() {
  return (
    <main>
      {/* Top bar */}
      <header className="mv-topbar">
        <div className="mv-container mv-topbar-inner">
          <a href="#top" className="mv-wordmark">
            <span style={{ color: "var(--brand)" }}>
              <WingMark />
            </span>
            Scaling Wisdom
          </a>
          <nav className="mv-nav">
            <a className="mv-nav-link is-active" href="#strategy">
              Strategy
            </a>
            <a className="mv-nav-link" href="#loop">
              The loop
            </a>
            <a className="mv-nav-link" href="#trackers">
              Live trackers
            </a>
            <Link className="mv-nav-link" href="/">
              Organic Social ↗
            </Link>
          </nav>
          <a className="mv-btn mv-btn-primary" href="#loop">
            Walk the loop
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
          <p className="mv-overline" style={{ color: "var(--brand-bright)", marginBottom: 20 }}>
            Podcast workflow engine · {SHOW.host}
          </p>
          <h1 className="mv-title-1" style={{ maxWidth: 880, margin: 0 }}>
            Building one of the best podcasts in the world
          </h1>
          <p
            className="mv-body-lg"
            style={{ maxWidth: 680, marginTop: 24, color: "var(--dark-text-muted)" }}
          >
            {SHOW.thesis}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <a className="mv-btn mv-btn-inverse" href="#loop">
              Walk the production loop
              <ArrowRight />
            </a>
            <a
              className="mv-btn"
              href="#trackers"
              style={{
                background: "transparent",
                color: "var(--white)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              See the live trackers
            </a>
          </div>

          {/* Meta strip */}
          <div style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
            {[
              { n: SHOW.format.split(" + ")[0], l: "Format" },
              { n: SHOW.northStar, l: "North star" },
              { n: SHOW.model, l: "Model" },
            ].map((s) => (
              <div key={s.l} style={{ maxWidth: 220 }}>
                <div className="mv-title-6" style={{ color: "var(--white)" }}>
                  {s.n}
                </div>
                <div className="mv-body-sm" style={{ color: "var(--dark-text-muted)" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy spine */}
      <section className="mv-section" id="strategy">
        <div className="mv-container">
          <p className="mv-overline" style={{ marginBottom: 12 }}>
            The strategy spine
          </p>
          <h2 className="mv-title-3" style={{ margin: "0 0 8px" }}>
            Reverse-engineered from the team that scaled Diary of a CEO 8k → 13M
          </h2>
          <p
            className="mv-body-md"
            style={{ color: "var(--text-muted)", maxWidth: 680, margin: "0 0 48px" }}
          >
            Everything in the production loop hangs on this spine: nine operator laws, a
            five-point guest scorecard, and a fixed show architecture.
          </p>

          {/* Operator laws */}
          <h3 className="mv-title-5" style={{ margin: "0 0 20px" }}>
            The operator playbook
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
              marginBottom: 56,
            }}
          >
            {OPERATOR_LAWS.map((law) => (
              <div key={law.n} className="mv-card">
                <div className="mv-title-7" style={{ color: "var(--brand)", marginBottom: 6 }}>
                  {law.n}
                </div>
                <div className="mv-title-7" style={{ marginBottom: 8 }}>
                  {law.title}
                </div>
                <p className="mv-body-sm" style={{ color: "var(--text-muted)", margin: 0 }}>
                  {law.body}
                </p>
              </div>
            ))}
          </div>

          {/* Scorecard + architecture, two columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 32,
            }}
          >
            {/* Scorecard */}
            <div>
              <h3 className="mv-title-5" style={{ margin: "0 0 8px" }}>
                Guest scorecard
              </h3>
              <p
                className="mv-body-sm"
                style={{ color: "var(--text-muted)", margin: "0 0 20px" }}
              >
                Book only if 4 of 5 are true. We test angles inside the lane, never the guest.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {GUEST_SCORECARD.map((c) => (
                  <li key={c.title} style={{ display: "flex", gap: 10 }}>
                    <Check />
                    <span>
                      <span className="mv-title-8">{c.title}</span>
                      <span
                        className="mv-body-sm"
                        style={{ color: "var(--text-muted)", display: "block" }}
                      >
                        {c.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="mv-title-5" style={{ margin: "0 0 8px" }}>
                The show architecture
              </h3>
              <p
                className="mv-body-sm"
                style={{ color: "var(--text-muted)", margin: "0 0 20px" }}
              >
                Same skeleton every episode; the guest changes the muscle.
              </p>
              <div style={{ display: "grid", gap: 12 }}>
                {SHOW_ARCHITECTURE.map((seg) => (
                  <div key={seg.title} className="mv-card" style={{ padding: 20 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                        flexWrap: "wrap",
                      }}
                    >
                      <span className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>
                        {seg.tag}
                      </span>
                      {seg.signature && <span className="mv-badge">Signature</span>}
                    </div>
                    <div className="mv-title-7" style={{ marginBottom: 4 }}>
                      {seg.title}
                    </div>
                    <p className="mv-body-sm" style={{ color: "var(--text-muted)", margin: 0 }}>
                      {seg.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loop overview rail */}
      <section className="mv-section-tight" id="loop" style={{ background: "var(--bg-muted)" }}>
        <div className="mv-container">
          <p className="mv-overline" style={{ marginBottom: 12 }}>
            The production loop at a glance
          </p>
          <h2 className="mv-title-3" style={{ margin: "0 0 8px" }}>
            One engine, eight phases, from guest to growth
          </h2>
          <p className="mv-body-md" style={{ color: "var(--text-muted)", maxWidth: 640, margin: 0 }}>
            Each phase hands off through a hard gate. Phase 08 feeds straight back into Phase 01 —
            every episode&apos;s learnings help secure a bigger guest.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 16,
              marginTop: 32,
            }}
          >
            {POD_PHASES.map((p) => (
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
                  <span className="mv-title-4" style={{ color: "var(--brand)" }}>
                    {p.num}
                  </span>
                  <span className="mv-badge">{p.layer}</span>
                </div>
                <div className="mv-title-7" style={{ marginBottom: 4 }}>
                  {p.name}
                </div>
                <div className="mv-body-sm" style={{ color: "var(--text-subtle)" }}>
                  {p.transition} →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Phase detail */}
      <section className="mv-section" id="phases">
        <div className="mv-container">
          <p className="mv-overline" style={{ marginBottom: 12 }}>
            The phases
          </p>
          <h2 className="mv-title-3" style={{ margin: "0 0 48px" }}>
            From identifying a guest to growing the channel
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {POD_PHASES.map((p, i) => (
              <div key={p.num} id={`phase-${p.num}`} style={{ scrollMarginTop: 80 }}>
                <article className="mv-card" style={{ padding: 32 }}>
                  <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
                    {/* Number + layer + owner + timeline */}
                    <div style={{ minWidth: 150 }}>
                      <div
                        className="mv-display-2"
                        style={{ color: "var(--brand)", lineHeight: 1, fontSize: 64 }}
                      >
                        {p.num}
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <span className="mv-badge">{p.layer}</span>
                      </div>
                      <div style={{ marginTop: 16 }}>
                        <div className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>
                          OWNER
                        </div>
                        <div className="mv-body-sm" style={{ color: "var(--text)" }}>
                          {p.owner}
                        </div>
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <div className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>
                          TIMELINE
                        </div>
                        <div className="mv-body-sm" style={{ color: "var(--text)" }}>
                          {p.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ flex: 1, minWidth: 280 }}>
                      <h3 className="mv-title-4" style={{ margin: "0 0 12px" }}>
                        {p.name}
                      </h3>
                      <p
                        className="mv-body-md"
                        style={{ color: "var(--text-muted)", margin: "0 0 24px", maxWidth: 680 }}
                      >
                        {p.description}
                      </p>

                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0 0 24px",
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                          gap: "10px 24px",
                        }}
                      >
                        {p.tasks.map((t) => (
                          <li
                            key={t}
                            className="mv-body-sm"
                            style={{ display: "flex", gap: 10, color: "var(--text)" }}
                          >
                            <Check />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Gate */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "10px 14px",
                          borderRadius: "var(--r-sm)",
                          background: "var(--brand-light)",
                          border: "1px solid var(--brand-border)",
                          marginBottom: 20,
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          className="mv-body-xs"
                          style={{ color: "var(--brand-content)", fontWeight: 700, letterSpacing: "0.06em" }}
                        >
                          GATE
                        </span>
                        <span className="mv-body-sm" style={{ color: "var(--brand-content)" }}>
                          {p.gate}
                        </span>
                      </div>

                      {/* Tools + skills */}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: p.skills.length ? 12 : 0 }}>
                        {p.tools.map((tool) => (
                          <span key={tool} className="mv-chip">
                            {tool}
                          </span>
                        ))}
                      </div>
                      {p.skills.length > 0 && (
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                          <span className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>
                            SKILLS
                          </span>
                          {p.skills.map((s) => (
                            <span key={s} className="mv-chip mv-chip-skill">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>

                {/* Transition connector */}
                {i < POD_PHASES.length - 1 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "20px 0 20px 40px",
                      color: "var(--brand-content)",
                    }}
                  >
                    <span style={{ width: 1, height: 24, background: "var(--brand-border)" }} />
                    <span className="mv-title-8">{p.transition}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live trackers */}
      <section className="mv-section" id="trackers" style={{ background: "var(--bg-muted)" }}>
        <div className="mv-container">
          <p className="mv-overline" style={{ marginBottom: 12 }}>
            The live document
          </p>
          <h2 className="mv-title-3" style={{ margin: "0 0 8px" }}>
            Track outreach, edits, delivery and metrics in one place
          </h2>
          <p className="mv-body-md" style={{ color: "var(--text-muted)", maxWidth: 720, margin: "0 0 12px" }}>
            These boards are the seed of the live tracker. Today they render from the workflow
            data; in the next pass they bind to Airtable as the source of truth, so the whole team
            updates status, owners, due dates and approvals in real time.
          </p>
          <p className="mv-body-sm" style={{ color: "var(--text-subtle)", margin: "0 0 40px" }}>
            Airtable integration — planned. Rows marked with a dotted border are placeholders to replace.
          </p>

          {/* Guest pipeline */}
          <h3 className="mv-title-5" style={{ margin: "0 0 16px" }}>
            Guest pipeline
          </h3>
          <div className="mv-card" style={{ padding: 0, overflow: "hidden", marginBottom: 48 }}>
            <div className="mv-trow mv-trow-head">
              <span style={{ flex: 2 }}>Guest</span>
              <span style={{ flex: 2 }}>Face of</span>
              <span style={{ flex: 1, textAlign: "center" }}>Score</span>
              <span style={{ flex: 1 }}>Stage</span>
              <span style={{ flex: 1 }}>Owner</span>
              <span style={{ flex: 3 }}>Next action</span>
            </div>
            {GUEST_PIPELINE.map((g) => (
              <div
                key={g.guest}
                className="mv-trow"
                style={g.placeholder ? { borderLeft: "2px dotted var(--border-strong)" } : undefined}
              >
                <span style={{ flex: 2 }} className="mv-title-8">
                  {g.guest}
                </span>
                <span style={{ flex: 2, color: "var(--text-muted)" }} className="mv-body-sm">
                  {g.faceOf}
                </span>
                <span style={{ flex: 1, textAlign: "center" }} className="mv-body-sm">
                  <span
                    className="mv-score"
                    style={{ color: g.score >= 4 ? "var(--green-content)" : "var(--text-subtle)" }}
                  >
                    {g.score}/5
                  </span>
                </span>
                <span style={{ flex: 1 }}>
                  <span className={`mv-status ${stageTone(g.stage)}`}>{g.stage}</span>
                </span>
                <span style={{ flex: 1, color: "var(--text-muted)" }} className="mv-body-sm">
                  {g.owner}
                </span>
                <span style={{ flex: 3, color: "var(--text-muted)" }} className="mv-body-sm">
                  {g.nextAction}
                </span>
              </div>
            ))}
          </div>

          {/* Episode 01 — brief */}
          <h3 className="mv-title-5" style={{ margin: "0 0 4px" }}>
            Episode {EPISODE.num} — {EPISODE.guest}: episode brief
          </h3>
          <p className="mv-body-sm" style={{ color: "var(--text-subtle)", margin: "0 0 16px" }}>
            {EPISODE.faceOf} · {EPISODE.recorded}
          </p>
          <div className="mv-card" style={{ marginBottom: 24 }}>
            <p className="mv-body-md" style={{ color: "var(--text-muted)", margin: "0 0 16px" }}>
              {EPISODE.bigIdea}
            </p>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                padding: "12px 16px",
                borderRadius: "var(--r-sm)",
                background: "var(--bg-subtle)",
                marginBottom: 8,
              }}
            >
              <span
                className="mv-body-xs"
                style={{ color: "var(--brand-content)", fontWeight: 700, letterSpacing: "0.06em", whiteSpace: "nowrap", marginTop: 2 }}
              >
                CENTRAL Q
              </span>
              <span className="mv-body-sm" style={{ color: "var(--text)" }}>
                {EPISODE.centralQuestion}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 32,
              marginBottom: 48,
            }}
          >
            {/* Run of show */}
            <div>
              <div className="mv-title-7" style={{ marginBottom: 12 }}>
                Run of show
              </div>
              <div className="mv-card" style={{ padding: 0, overflow: "hidden" }}>
                {RUN_OF_SHOW.map((seg) => (
                  <div key={seg.n} className="mv-trow">
                    <span className="mv-title-8" style={{ color: "var(--brand)", flex: "0 0 28px" }}>
                      {seg.n}
                    </span>
                    <span style={{ flex: 3 }}>
                      <span className="mv-title-8" style={{ display: "block" }}>{seg.title}</span>
                      <span className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>{seg.sub}</span>
                    </span>
                    <span style={{ flex: 1, textAlign: "right", color: "var(--text-muted)" }} className="mv-body-xs">
                      {seg.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Angle options */}
            <div>
              <div className="mv-title-7" style={{ marginBottom: 12 }}>
                Angle options tested <span className="mv-body-xs" style={{ color: "var(--text-subtle)", fontWeight: 400 }}>(Phase 03 → winner recorded)</span>
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                {ANGLE_OPTIONS.map((a) => (
                  <div
                    key={a.title}
                    className="mv-card"
                    style={{
                      padding: "12px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      ...(a.winner
                        ? { background: "var(--green-light)", border: "1px solid var(--green)" }
                        : {}),
                    }}
                  >
                    <span className="mv-body-sm" style={{ color: a.winner ? "var(--green-content)" : "var(--text)" }}>
                      {a.title}
                    </span>
                    {a.winner && <span className="mv-status mv-status-green">Winner</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Episode 01 — three edits */}
          <h3 className="mv-title-5" style={{ margin: "0 0 4px" }}>
            Episode {EPISODE.num} — {EPISODE.guest}: the three edits
          </h3>
          <p className="mv-body-sm" style={{ color: "var(--text-subtle)", margin: "0 0 16px" }}>
            &ldquo;{EPISODE.title}&rdquo; · {EPISODE.recorded}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {EPISODE_EDITS.map((e) => (
              <div key={e.edit} className="mv-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                    gap: 8,
                  }}
                >
                  <span className="mv-title-7">{e.edit}</span>
                  <span className={`mv-status ${editTone(e.status)}`}>{e.status}</span>
                </div>
                <p className="mv-body-sm" style={{ color: "var(--text-muted)", margin: "0 0 16px" }}>
                  {e.detail}
                </p>
                <div className="mv-progress" style={{ marginBottom: 6 }}>
                  <div className="mv-progress-bar" style={{ width: `${e.progress}%` }} />
                </div>
                <div className="mv-body-xs" style={{ color: "var(--text-subtle)", marginBottom: 16 }}>
                  {e.progress}% · due {e.due}
                </div>
                <div className="mv-meta-line">
                  <span className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>OWNER</span>
                  <span className="mv-body-sm">{e.owner}</span>
                </div>
                <div className="mv-meta-line">
                  <span className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>APPROVER</span>
                  <span className="mv-body-sm">{e.approver}</span>
                </div>
                <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  <span className="mv-chip mv-chip-skill">{e.skill}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Two-column: distribution + metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 32,
            }}
          >
            {/* Distribution */}
            <div>
              <h3 className="mv-title-5" style={{ margin: "0 0 16px" }}>
                Distribution sign-off
              </h3>
              <div className="mv-card" style={{ padding: 0, overflow: "hidden" }}>
                <div className="mv-trow mv-trow-head">
                  <span style={{ flex: 2 }}>Platform</span>
                  <span style={{ flex: 1 }}>Ratio</span>
                  <span style={{ flex: 1 }}>Status</span>
                </div>
                {DISTRIBUTION.map((d) => (
                  <div key={d.platform} className="mv-trow">
                    <span style={{ flex: 2 }}>
                      <span className="mv-title-8" style={{ display: "block" }}>{d.platform}</span>
                      <span className="mv-body-xs" style={{ color: "var(--text-subtle)" }}>{d.asset}</span>
                    </span>
                    <span style={{ flex: 1, color: "var(--text-muted)" }} className="mv-body-sm">
                      {d.ratio}
                    </span>
                    <span style={{ flex: 1 }}>
                      <span className={`mv-status ${deliveryTone(d.status)}`}>{d.status}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h3 className="mv-title-5" style={{ margin: "0 0 16px" }}>
                Metrics that matter
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                {METRICS.map((m) => (
                  <div key={m.name} className="mv-card" style={{ padding: 20 }}>
                    <div className="mv-title-8" style={{ marginBottom: 4 }}>{m.name}</div>
                    <p className="mv-body-sm" style={{ color: "var(--text-muted)", margin: 0 }}>
                      {m.why}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loop close */}
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
            <h2 className="mv-title-3" style={{ margin: "0 auto 16px", maxWidth: 760 }}>
              Every episode&apos;s learnings help secure a bigger guest
            </h2>
            <p
              className="mv-body-lg"
              style={{ color: "var(--text-muted)", margin: "0 auto 28px", maxWidth: 660 }}
            >
              Phase 08 feeds straight back into Phase 01. Post-campaign data sharpens the next
              angle, the next packaging, the next booking — and routes reach into a community that
              compounds. Build, test, broaden.
            </p>
            <a className="mv-btn mv-btn-primary" href="#top">
              Back to the top
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "32px 0" }}>
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
            Scaling Wisdom
          </div>
          <p className="mv-body-sm" style={{ color: "var(--text-subtle)", margin: 0 }}>
            Podcast workflow engine · build, test, broaden
          </p>
        </div>
      </footer>
    </main>
  );
}

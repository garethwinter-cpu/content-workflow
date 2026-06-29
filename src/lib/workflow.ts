// The eight phases of the Mindvalley organic social content engine.
// Each phase belongs to a "layer" and hands off to the next via a transition.

export interface Phase {
  /** Two-digit phase number, e.g. "01". */
  num: string;
  name: string;
  layer: string;
  /** What this phase does, one or two sentences. */
  description: string;
  tasks: string[];
  tools: string[];
  /** Short label for the handoff into the next phase. */
  transition: string;
}

export const PHASES: Phase[] = [
  {
    num: "01",
    name: "Audience & competitive intelligence",
    layer: "Intelligence Layer",
    description:
      "The foundation. Every content decision flows from data. This phase runs continuously in parallel with all others.",
    tasks: [
      "Industry & niche trend identification",
      "Competitor content audit (format, frequency, engagement rates)",
      "Competitor campaign reverse-engineering",
      "Audience persona cards",
      "Audience overlap analysis across channels",
      "Brand mention monitoring & response",
      "Audience sentiment tracking & NPS proxy signals",
      "Collaboration & co-creation opportunity identification",
    ],
    tools: ["Google Trends", "Exploding Topics", "Claude research", "Airtable"],
    transition: "Insights inform strategy",
  },
  {
    num: "02",
    name: "Content strategy framework",
    layer: "Architecture Layer",
    description:
      "Translates insights into a structured content architecture. Sets direction, cadence, and resource allocation.",
    tasks: [
      "Content strategy document",
      "Content mix matrix",
      "Content pillar definition & performance targets",
      "Channel strategy briefs",
      "Always-on vs. campaign vs. reactive content allocation",
      "Establish content velocity targets",
      "Establish content-market fit hypotheses to test",
      "Content series & franchise planning",
    ],
    tools: ["Google Docs", "Airtable", "Claude for framework development"],
    transition: "Strategy frames ideation",
  },
  {
    num: "03",
    name: "Ideation & briefing",
    layer: "Creative Layer",
    description:
      "Where strategy becomes specific content ideas. Rapid ideation, concept development, and structured briefing for production.",
    tasks: [
      "AI-assisted ideation sprints",
      "Hook & angle development per idea",
      "Format-first ideation",
      "Hook writing & A/B hook variants",
      "Community-driven ideation (comments, DMs, FAQs)",
      "Attach reference material & mood boards",
      "Concept sketches",
      "Structured production briefs",
    ],
    tools: ["Airtable idea bank", "Claude (brief generation)", "Canva (mood boards)"],
    transition: "Briefs drive production",
  },
  {
    num: "04",
    name: "Content production",
    layer: "Creation Layer",
    description:
      "The build phase. Transforms briefs into platform-ready assets across copy, design, video, and interactive formats.",
    tasks: [
      "Caption & post copy per platform (voice & length adapted)",
      "Carousel design (educational, storytelling, listicle)",
      "Image sourcing, editing & optimization",
      "Audio editing, music selection & sound design",
      "Edited video files",
      "Interactive content assets",
      "Bio & profile copy optimization",
      "Landing page & link-in-bio optimization",
    ],
    tools: ["Adobe Creative Suite", "Canva", "Google Drive (asset storage)"],
    transition: "Assets enter QA",
  },
  {
    num: "05",
    name: "Compliance & legal",
    layer: "Quality Layer",
    description:
      "Gate between creation and publishing. Ensures brand consistency, compliance, accuracy, and strategic alignment.",
    tasks: [
      "Brand voice & tone consistency check",
      "Grammar, spelling & factual accuracy review",
      "Accessibility check (alt text, contrast, captions)",
      "Compliance checklist",
      "FTC / ASA compliance",
      "Legal team review for high-stakes content",
      "Link & UTM parameter verification",
      "Final approval & publish authorization",
    ],
    tools: ["Grammarly", "Claude", "Airtable (status tracking)"],
    transition: "Approved content ships",
  },
  {
    num: "06",
    name: "Campaign & calendar planning",
    layer: "Distribution Layer",
    description:
      "Strategic distribution. Timing optimization, cross-platform coordination, and ensuring every post is set up for maximum reach.",
    tasks: [
      "Native-first publishing (IG Reels, TikTok, YouTube Studio)",
      "Platform-specific optimization at publish (hashtags, music, location tags)",
      "Hashtag strategy & set creation",
      "Cross-posting vs. repurposing decision framework",
      "Vertical vs. horizontal adaptation",
      "Story sequence publishing & highlight curation",
      "Event-driven content planning (launches, summits, book clubs)",
      "Paid boost decision framework (organic → paid escalation)",
    ],
    tools: ["Airtable calendar view", "Google Calendar", "Native schedulers"],
    transition: "First comments deployed",
  },
  {
    num: "07",
    name: "Community management",
    layer: "Conversation Layer",
    description:
      "Post-publish is where organic growth really happens. Active community management, conversation seeding, and relationship building.",
    tasks: [
      "Comment monitoring & response (within SLA windows)",
      "Conversation seeding on own posts (first 60-min engagement push)",
      "Comment & DM theme clustering (NLP-assisted)",
      "Community highlight & UGC curation",
      "Influencer & partner content seeding",
      "Chat automation flows",
      "Lead capture & CRM handoff tracking",
      "Keyword trigger management & optimization",
    ],
    tools: ["ManyChat (auto-triggers on publish)", "Airtable (relationship CRM)", "BigQuery (lead tracking)"],
    transition: "Engagement data captured",
  },
  {
    num: "08",
    name: "Reporting & insights loop",
    layer: "Learning Layer",
    description:
      "Closes the loop. Every publish generates data that feeds back into Phase 01, creating a continuously improving content engine.",
    tasks: [
      "Content performance scoring (engagement, reach, saves, shares)",
      "Format & hook effectiveness ranking",
      "Engagement cohort analysis",
      "Attribution modeling (organic → lead → conversion)",
      "Campaign post-mortems",
      "Annual organic social retrospective",
      "Executive summary for leadership",
      "Insight distillation → strategy feed-back",
    ],
    tools: ["BigQuery", "Google Analytics", "Claude (report generation)"],
    transition: "Learnings feed back in",
  },
];

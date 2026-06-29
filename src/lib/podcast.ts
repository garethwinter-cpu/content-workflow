// ============================================================
// Scaling Wisdom — the podcast workflow engine.
//
// Workflow #2 in the content-workflow repo (the first is the
// Organic Social engine in ./workflow.ts).
//
// This is the end-to-end production loop for Vishen Lakhiani's
// show "Scaling Wisdom" — from identifying a guest, through the
// shoot, into a three-edit post-production pipeline (trailer /
// main / social), out to sign-off and delivery, and round to
// post-campaign analysis that secures the next, bigger guest.
//
// Strategy is reverse-engineered from the Diary of a CEO team
// (per the Scaling Wisdom Blueprint v1, M. — CGO).
//
// The PIPELINE / EPISODE / DISTRIBUTION / METRICS arrays below
// are the seed of the "live document": they render as trackers
// today and bind to Airtable as the source of truth later.
// ============================================================

// ---------- Show meta ----------

export const SHOW = {
  name: "Scaling Wisdom",
  host: "Vishen Lakhiani",
  format: "Long-form interview + solo",
  northStar: "Build the expert audience",
  model: "Niche first, then broaden",
  thesis:
    "We build an audience of experts by teaching the world how to turn wisdom into a movement, faster with AI. The podcast is the top of the flywheel — the funnel into Blink Life, Blink Learn, Blink Work, FinerMinds and Envision.",
  frame: "How did you turn your wisdom into a movement?",
};

// ---------- The operator playbook (9 laws) ----------
// Lifted from the team that took Diary of a CEO from 8k to 13M.

export interface Law {
  n: string;
  title: string;
  body: string;
}

export const OPERATOR_LAWS: Law[] = [
  {
    n: "01",
    title: "Growth = consistency × experimentation",
    body: "Show up relentlessly and treat every release as a test. It is a multiplication — neither alone is enough.",
  },
  {
    n: "02",
    title: "Research before you create",
    body: "List 20–30 angles per episode, render them as thumbnails/titles, and test which the audience wants before you book or record.",
  },
  {
    n: "03",
    title: "One variable, one verdict",
    body: "Every experiment = a hypothesis, a single changed variable, a pre-agreed definition of win/lose. Run hundreds. Log them.",
  },
  {
    n: "04",
    title: "The first hour decides the video",
    body: "YouTube's first hour sets the trajectory. Use cheap paid ads to push each episode to the right audience early.",
  },
  {
    n: "05",
    title: "Distribution beats production",
    body: "Audience-first, not product-first. The trailer, the packaging and the clip strategy matter as much as the conversation.",
  },
  {
    n: "06",
    title: "The clip is cinema, not a montage",
    body: "A→B arc, a hook in the first 3–5s, stacked hooks that each kill an objection, an early 'lesson taught', an emotional rollercoaster, a cliffhanger. Mystery usually beats value.",
  },
  {
    n: "07",
    title: "Sweat the 1%",
    body: "Props as pattern-interrupts, a tuned studio, an 'experimenter of the week' ritual. Tiny details compound into a moat.",
  },
  {
    n: "08",
    title: "One craft, one owner",
    body: "Especially clips. A 'group effort' produces mediocre clips. Name the single best clipper, make them accountable, train them.",
  },
  {
    n: "09",
    title: "Build a community, not an audience",
    body: "An audience listens; a community participates and exists without you at the centre. Route viewers into FinerMinds. This is where the flywheel compounds.",
  },
];

// ---------- Guest scorecard (book only if 4 of 5) ----------

export interface Criterion {
  title: string;
  body: string;
}

export const GUEST_SCORECARD: Criterion[] = [
  {
    title: "Origin story",
    body: "A real 'rags-to-riches' or unlikely-rise arc that hooks emotionally.",
  },
  {
    title: "Authority engine",
    body: "They visibly built a personal brand / movement, not just a company.",
  },
  {
    title: "A teachable framework",
    body: "One named model we can extract — great for clips and product tie-in.",
  },
  {
    title: "Clip-ability",
    body: "Charismatic; says spiky, counter-intuitive things on camera.",
  },
  {
    title: "Their own distribution",
    body: "An audience they'll cross-promote to. Reach compounds when guests share.",
  },
];

// ---------- Show architecture (the segment skeleton) ----------

export interface Segment {
  tag: string;
  signature: boolean;
  title: string;
  body: string;
}

export const SHOW_ARCHITECTURE: Segment[] = [
  {
    tag: "Cold open · 60–90s",
    signature: true,
    title: "The Trailer",
    body: "Cut in post from the best moments: a cinematic A→B arc, a hook in the first 3–5s, stacked hooks, an early 'lesson taught', a cliffhanger ending. The distribution wrapper around the conversation — and the growth engine.",
  },
  {
    tag: "Act 1",
    signature: false,
    title: "The Origin Story",
    body: "How they went from unknown to authority. The emotional, story-driven open that earns trust and clips beautifully.",
  },
  {
    tag: "Act 2",
    signature: false,
    title: "The Blueprint",
    body: "The system behind the success — their one teachable, named model and how they actually built it. The most product-relevant, most evergreen-clippable segment.",
  },
  {
    tag: "Act 3",
    signature: false,
    title: "Tear Down the Paper Wall",
    body: "The belief, rule or conventional wisdom the guest broke to win. Spiky, contrarian, made for short-form.",
  },
  {
    tag: "Close · every episode",
    signature: true,
    title: "The Curveball",
    body: "One funny, unexpected, slightly off-the-wall question — the thing people actually want to know but a serious interview never asks. It disarms the guest and is usually the most shareable moment.",
  },
];

// ---------- The production loop (8 phases) ----------

export interface PodPhase {
  num: string;
  name: string;
  layer: string;
  owner: string;
  /** SLA / cadence for this phase. */
  timeline: string;
  description: string;
  tasks: string[];
  /** The hard gate that must be cleared before the next phase starts. */
  gate: string;
  tools: string[];
  /** Skills wired into this phase (empty if none). */
  skills: string[];
  transition: string;
}

export const POD_PHASES: PodPhase[] = [
  {
    num: "01",
    name: "Guest intelligence & sourcing",
    layer: "Intelligence Layer",
    owner: "Host + Booking Producer",
    timeline: "Rolling / continuous",
    description:
      "Curate the guest pool by criteria, not by whim. We don't chase 'founders' broadly or a guest's pet topic — we interview the people who became the face of a category, about how they did it. The frame for every guest: 'How did you turn your wisdom into a movement?'",
    tasks: [
      "Maintain a target guest pool framed by 'face of a category'",
      "Score every candidate against the 5-point guest scorecard (book only if 4/5)",
      "Pre-research the origin story and the one teachable framework",
      "Assess clip-ability (spiky, counter-intuitive, charismatic on camera)",
      "Map the guest's own distribution & cross-promo reach",
      "Prioritise the pool by reach × fit",
    ],
    gate: "Scorecard ≥ 4/5 to advance to outreach",
    tools: ["Claude research", "Airtable (guest CRM)", "YouTube/Spotify chart research", "Social listening"],
    skills: [],
    transition: "Qualified guests enter outreach",
  },
  {
    num: "02",
    name: "Outreach & securing",
    layer: "Relationship Layer",
    owner: "Booking Producer / PR",
    timeline: "Target ≤ 14 days, first contact → booked",
    description:
      "Run it like a PR agency. Personalised outreach on the movement frame — never a generic 'come on the pod'. Lead with what's in it for them: reach, cinematic clips they can keep, cross-promotion. Then secure the yes and the paperwork.",
    tasks: [
      "Map warm intros and the best path to each target",
      "Personalised outreach built on the 'turn your wisdom into a movement' frame",
      "Pitch the value exchange: reach, clips, cross-promo",
      "Handle objections and negotiate the booking",
      "Lock the yes; confirm the cross-promotion commitment",
      "Send contract / appearance release; brief the guest on the format",
    ],
    gate: "Signed confirmation + appearance release on file",
    tools: ["Email", "WhatsApp", "Airtable (outreach status)", "E-sign"],
    skills: ["kwame-negotiation"],
    transition: "Confirmed guests get scheduled",
  },
  {
    num: "03",
    name: "Scheduling, pre-production & angle testing",
    layer: "Architecture Layer",
    owner: "Producer + Head of Experimentation",
    timeline: "Angles Tue → test Tue–Wed → winner Wed → record Thu",
    description:
      "Lock the logistics, then test the topic before you record. Generate 20–30 title/thumbnail angles and spend ~$100 on Meta to find the winning angle. We're not testing whether to book them — we're testing what to talk about and how to package it. Record around the winning angle.",
    tasks: [
      "Lock record date, studio / location, travel and logistics",
      "Generate 20–30 title + thumbnail angles for the guest",
      "Run a cheap Meta test (~$100) to pick the winning angle BEFORE record",
      "Build the question set around the winner: origin → blueprint → paper wall",
      "Design the clip moments and the Curveball close in advance",
      "Produce the run-of-show and call sheet; pre-light & tech check",
    ],
    gate: "Winning angle locked + question set approved",
    tools: ["Google Calendar", "Meta Ads", "Airtable (angle tests)", "Figma / Canva (thumbnails)"],
    skills: ["youtube-strategist", "abcs-title-optimizer", "hook-point-format-engine"],
    transition: "Locked angle goes to production",
  },
  {
    num: "04",
    name: "Production / shoot day",
    layer: "Creation Layer",
    owner: "Director + Crew",
    timeline: "Shoot day",
    description:
      "Lights, camera, action. A tuned studio, multicam coverage, clean audio, and the small details that hold retention. Capture the signature open and the Curveball close on camera — those are the assets the whole engine runs on.",
    tasks: [
      "Studio set dressing & lighting design",
      "Multicam camera setup (host, guest, wide, detail)",
      "Audio: lavaliers + boom, backup recorder, room treatment",
      "Hair, makeup & wardrobe; guest green-room and host prep",
      "Run-of-show capture; props as pattern-interrupts",
      "B-roll, cutaways, and the Curveball close on camera",
      "On-set data wrangling — back up everything (2 copies) before wrap",
    ],
    gate: "All media backed up & verified (2 copies)",
    tools: ["Cameras", "Lighting kit", "Audio kit", "Teleprompter", "On-set storage"],
    skills: [],
    transition: "Footage handed to the edit assistant",
  },
  {
    num: "05",
    name: "Edit hygiene & transcript",
    layer: "Foundation Layer",
    owner: "Edit Assistant",
    timeline: "≤ 48h from wrap",
    description:
      "The mandatory first post step — the admin gate. Before anyone touches story, the edit assistant does the hygiene: sync the cameras, lay in the audio, strip the false takes, and produce a clean transcript. Nothing downstream starts until the transcript exists.",
    tasks: [
      "Ingest & organise all media; verify backups",
      "Sync multicam to the master audio",
      "Colour & sound baseline pass",
      "Remove false takes, restarts and dead air (the hygiene pass)",
      "Assemble the clean stringout",
      "Produce a timecoded, speaker-labelled transcript",
      "Deliver the transcript to feed the AI edit",
    ],
    gate: "Clean stringout + timecoded transcript delivered",
    tools: ["Premiere / Resolve", "Multicam sync", "Descript / Whisper (transcription)"],
    skills: [],
    transition: "Transcript feeds the AI edit",
  },
  {
    num: "06",
    name: "AI-assisted editing & the three edits",
    layer: "Creative Layer",
    owner: "Lead Editor + Clip Owner",
    timeline: "Trailer first → social → main",
    description:
      "The transcript feeds AI, which drives three parallel edits off the same source. The trailer is cut first — it's the growth engine. One named, accountable clip owner runs short-form (no group efforts). Skills do the heavy lifting at each branch.",
    tasks: [
      "AI transcript analysis → edit decision list & best-moment map",
      "THE TRAILER — cinematic, Diary of a CEO style (priority #1)",
      "THE MAIN PODCAST — long-form YouTube assembly & fine cut",
      "THE SOCIAL SNIPPETS — Shorts/Reels that funnel to the main episode",
      "Rank clip candidates; cut the strongest; cull the clichés",
      "Captions / subtitles and a thumbnail per asset",
    ],
    gate: "Rough cuts of all three edits submitted to review",
    tools: ["Claude (transcript → EDL)", "Premiere / Resolve", "CapCut", "Captions"],
    skills: [
      "mindvalley-quest-trailer",
      "viral-clip-probability-engine",
      "viral-instagram-reel-extraction",
      "hook-point-format-engine",
      "youtube-strategist",
    ],
    transition: "Three edits enter review",
  },
  {
    num: "07",
    name: "Review, sign-off & delivery",
    layer: "Quality Layer",
    owner: "Host + Exec Producer (approvers)",
    timeline: "Rough → fine → final, with named due dates",
    description:
      "Structured review rounds for all three edits, then host and exec sign-off, then platform-native delivery. Version every asset for its platform and schedule the drop — with the trailer teased 24–48h ahead. Don't show the trailer to the guest before launch.",
    tasks: [
      "Review rounds (rough → fine → final) for trailer, main & social",
      "Host + Exec Producer sign-off; legal / brand check",
      "Platform-native versions: YouTube 16:9, Shorts & Reels 9:16, IG feed",
      "Finalise captions, chapters and thumbnails per platform",
      "Schedule across YouTube, Instagram, Shorts and Reels",
      "Tease the trailer across socials 24–48h before the drop",
    ],
    gate: "Final sign-off on every asset, per platform",
    tools: ["Frame.io (review)", "Airtable (approval status)", "Native schedulers"],
    skills: [],
    transition: "Approved assets publish",
  },
  {
    num: "08",
    name: "Launch, first-hour & post-campaign analysis",
    layer: "Learning Layer",
    owner: "Head of Experimentation + Growth",
    timeline: "First 60 min critical · 7-day & 28-day reads",
    description:
      "Win the first hour with paid amplification, route reach into the FinerMinds community, and watch the metrics that matter — not vanity views. Log every experiment (one variable, one verdict), run the post-mortem, and feed learnings back into sourcing to secure bigger guests.",
    tasks: [
      "Win the first hour — paid amplification to seed the right audience",
      "Route reach → FinerMinds community + the relevant product in the suite",
      "Track CTR, retention, first-hour velocity, sub conversion, clip→long-form referral, product signups",
      "Log experiment results: hypothesis, one variable, the verdict",
      "Episode post-mortem and 'experimenter of the week' ritual",
      "Feed learnings + guest performance back into sourcing",
    ],
    gate: "Post-mortem logged → sourcing list updated",
    tools: ["YouTube Studio", "Meta Ads", "Amplitude / GA", "Airtable (metrics + experiment log)"],
    skills: [],
    transition: "Learnings feed back into sourcing → bigger guests",
  },
];

// ============================================================
// LIVE TRACKERS — seed data for the "live document".
// These render as boards/tables today and bind to Airtable
// (the source of truth) in a later pass.
// ============================================================

export type Stage =
  | "Identified"
  | "Researching"
  | "Outreach sent"
  | "In conversation"
  | "Booked"
  | "Recorded"
  | "In post"
  | "Published"
  | "Passed";

export interface GuestRow {
  guest: string;
  faceOf: string;
  /** Scorecard hits out of 5. */
  score: number;
  stage: Stage;
  owner: string;
  nextAction: string;
  /** Example/seed flag — placeholder rows the team should replace. */
  placeholder?: boolean;
}

export const GUEST_PIPELINE: GuestRow[] = [
  {
    guest: "Naveen Jain",
    faceOf: "Longevity & moonshots",
    score: 5,
    stage: "In post",
    owner: "Gareth",
    nextAction: "Three edits in production — see Episode 01 tracker",
  },
  {
    guest: "[Target — face of money & wealth]",
    faceOf: "Wealth / money psychology",
    score: 4,
    stage: "Researching",
    owner: "Booking Producer",
    nextAction: "Confirm scorecard 4/5, draft outreach on the movement frame",
    placeholder: true,
  },
  {
    guest: "[Target — face of a health category]",
    faceOf: "Health / human performance",
    score: 4,
    stage: "Identified",
    owner: "Booking Producer",
    nextAction: "Pre-research origin story + teachable framework",
    placeholder: true,
  },
  {
    guest: "[Target — face of personal brand]",
    faceOf: "Authority / personal brand",
    score: 3,
    stage: "Identified",
    owner: "Host",
    nextAction: "Below 4/5 — hold until clip-ability confirmed",
    placeholder: true,
  },
];

// ---------- Episode 01 — Naveen Jain — the three edits ----------

export type EditStatus =
  | "Briefed"
  | "Rough cut"
  | "In review"
  | "Changes"
  | "Approved"
  | "Delivered";

export interface EditRow {
  edit: string;
  detail: string;
  owner: string;
  status: EditStatus;
  /** 0–100 completion for the progress bar. */
  progress: number;
  due: string;
  approver: string;
  skill: string;
}

export const EPISODE = {
  num: "01",
  guest: "Naveen Jain",
  faceOf: "Longevity & moonshots",
  title: "Moonshots, Failure & the Future of Human Health",
  recorded: "Recorded — in post-production",
  bio: "IIT Roorkee engineer who immigrated to the US with almost nothing. Built InfoSpace into a $31B company, lost it all, and rebuilt. Founded Intelius, Moon Express (first private company licensed beyond Earth's orbit), and Viome (AI + metagenomics to make chronic disease optional).",
  bigIdea:
    "Naveen doesn't build companies — he attacks civilizational problems. His philosophy: the size of the problem IS the size of the opportunity. The episode asks what founders can learn from a man who failed spectacularly, rebuilt from zero, and is now trying to extend human healthspan by decades.",
  centralQuestion:
    "What does it actually take to think 10x bigger than everyone else — and survive long enough to make it real?",
  closingHook: "What would you attempt if you knew failure was just a data point?",
};

// Guest-specific run of show — the show architecture instantiated for Naveen.
export const RUN_OF_SHOW: { n: string; title: string; sub: string; time: string }[] = [
  { n: "01", title: "The Origin Story", sub: "From Uttar Pradesh to Silicon Valley", time: "0–8 min" },
  { n: "02", title: "InfoSpace", sub: "The rise, the crash, and what he learned", time: "8–20 min" },
  { n: "03", title: "The Moonshot Framework", sub: "How he thinks about impossible problems", time: "20–35 min" },
  { n: "04", title: "Viome", sub: "Reinventing health from the gut up", time: "35–50 min" },
  { n: "05", title: "The Founder's Playbook", sub: "Talent, teams & advice to his younger self", time: "50–60 min" },
];

// The angle options drafted for Phase 03 testing. One is flagged as the winner.
export const ANGLE_OPTIONS: { title: string; winner?: boolean }[] = [
  { title: "The Man Who Lost $31 Billion and Came Back Bigger" },
  { title: "How to Think 10x When Everyone Thinks 10%" },
  { title: "Moonshots, Failure & the Future of Human Health", winner: true },
  { title: "Why the Biggest Problems Are the Biggest Opportunities" },
  { title: "From Uttar Pradesh to the Moon: The Naveen Jain Story" },
];

export const EPISODE_EDITS: EditRow[] = [
  {
    edit: "The Trailer",
    detail: "Cinematic Diary of a CEO–style cold open. Priority #1 — cut first.",
    owner: "Clip Owner",
    status: "In review",
    progress: 70,
    due: "Launch − 5 days",
    approver: "Vishen + Exec Producer",
    skill: "mindvalley-quest-trailer",
  },
  {
    edit: "The Main Podcast",
    detail: "Long-form YouTube edit — origin → blueprint → paper wall → curveball.",
    owner: "Lead Editor",
    status: "Rough cut",
    progress: 45,
    due: "Launch − 4 days",
    approver: "Vishen + Exec Producer",
    skill: "youtube-strategist",
  },
  {
    edit: "Social Snippets",
    detail: "Shorts & Reels that funnel to the main episode. Ranked, clichés cut.",
    owner: "Clip Owner",
    status: "Rough cut",
    progress: 40,
    due: "Launch − 2 days",
    approver: "Exec Producer",
    skill: "viral-clip-probability-engine → viral-instagram-reel-extraction → hook-point-format-engine",
  },
];

// ---------- Distribution sign-off matrix ----------

export type DeliveryStatus = "Not started" | "Versioning" | "Scheduled" | "Published";

export interface DeliveryRow {
  platform: string;
  asset: string;
  ratio: string;
  status: DeliveryStatus;
  signoff: string;
}

export const DISTRIBUTION: DeliveryRow[] = [
  { platform: "YouTube", asset: "Main episode + trailer", ratio: "16:9", status: "Versioning", signoff: "Pending host" },
  { platform: "YouTube Shorts", asset: "3–5 social snippets", ratio: "9:16", status: "Not started", signoff: "Pending" },
  { platform: "Instagram Reels", asset: "3–5 social snippets", ratio: "9:16", status: "Not started", signoff: "Pending" },
  { platform: "Instagram Feed", asset: "Trailer + 1 hero clip", ratio: "9:16 / 4:5", status: "Not started", signoff: "Pending" },
];

// ---------- Metrics that matter (not vanity views) ----------

export interface Metric {
  name: string;
  why: string;
}

export const METRICS: Metric[] = [
  { name: "Click-through rate (CTR)", why: "Is the packaging — title + thumbnail — earning the click?" },
  { name: "Average view duration / retention", why: "Is the edit holding people? Read the retention graph for drop-offs." },
  { name: "First-hour velocity", why: "The first hour decides the video. Did paid seed the right audience fast?" },
  { name: "Subscriber conversion", why: "Are viewers turning into a returning audience?" },
  { name: "Clip → long-form referral", why: "Are the social snippets actually funnelling to the main episode?" },
  { name: "Downstream product signups", why: "Where reach becomes revenue — FinerMinds and the Blink suite." },
];

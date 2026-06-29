// Core domain types for the content workflow.

export type Stage = "idea" | "draft" | "review" | "scheduled" | "published";

export type Channel =
  | "blog"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "email"
  | "newsletter";

export interface ContentItem {
  id: string;
  title: string;
  channel: Channel;
  stage: Stage;
  owner: string;
  /** ISO date string for when this is due or scheduled. */
  due?: string;
  notes?: string;
}

export const STAGES: { id: Stage; label: string }[] = [
  { id: "idea", label: "Ideas" },
  { id: "draft", label: "Drafting" },
  { id: "review", label: "In Review" },
  { id: "scheduled", label: "Scheduled" },
  { id: "published", label: "Published" },
];

export const CHANNEL_LABELS: Record<Channel, string> = {
  blog: "Blog",
  youtube: "YouTube",
  instagram: "Instagram",
  tiktok: "TikTok",
  email: "Email",
  newsletter: "Newsletter",
};

// Seed data — replace with a real datastore (DB / Airtable / CMS) later.
export const SEED_ITEMS: ContentItem[] = [
  {
    id: "c1",
    title: "Why latex tubes still beat TPU on smooth tarmac",
    channel: "blog",
    stage: "draft",
    owner: "Gareth",
    due: "2026-07-04",
    notes: "Pull Crr numbers from the rolling-resistance dataset.",
  },
  {
    id: "c2",
    title: "5 marginal gains that actually move the needle",
    channel: "youtube",
    stage: "review",
    owner: "Gareth",
    due: "2026-07-02",
  },
  {
    id: "c3",
    title: "Tubeless setup in 60 seconds",
    channel: "tiktok",
    stage: "scheduled",
    owner: "Gareth",
    due: "2026-06-30",
  },
  {
    id: "c4",
    title: "The TT position myth",
    channel: "instagram",
    stage: "idea",
    owner: "Gareth",
  },
  {
    id: "c5",
    title: "June training-load recap",
    channel: "newsletter",
    stage: "published",
    owner: "Gareth",
    due: "2026-06-28",
  },
];

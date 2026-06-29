import {
  STAGES,
  CHANNEL_LABELS,
  SEED_ITEMS,
  type ContentItem,
  type Stage,
} from "@/lib/content";

function itemsForStage(stage: Stage): ContentItem[] {
  return SEED_ITEMS.filter((i) => i.stage === stage);
}

function formatDue(due?: string): string | null {
  if (!due) return null;
  return new Date(due).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function Card({ item }: { item: ContentItem }) {
  const due = formatDue(item.due);
  return (
    <div className="rounded-lg border border-black/10 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-neutral-900">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-white/10 dark:text-neutral-300">
          {CHANNEL_LABELS[item.channel]}
        </span>
        {due && <span className="text-xs text-neutral-400">{due}</span>}
      </div>
      <p className="text-sm font-medium leading-snug text-neutral-900 dark:text-neutral-100">
        {item.title}
      </p>
      {item.notes && (
        <p className="mt-2 text-xs text-neutral-500">{item.notes}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-8 dark:bg-neutral-950">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Content Workflow
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Track every piece from idea to published, across channels.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STAGES.map((stage) => {
          const stageItems = itemsForStage(stage.id);
          return (
            <section key={stage.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {stage.label}
                </h2>
                <span className="text-xs text-neutral-400">
                  {stageItems.length}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {stageItems.length === 0 ? (
                  <p className="rounded-lg border border-dashed border-black/10 p-3 text-xs text-neutral-400 dark:border-white/10">
                    Nothing here yet
                  </p>
                ) : (
                  stageItems.map((item) => <Card key={item.id} item={item} />)
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

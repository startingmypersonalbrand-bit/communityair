import { createFileRoute } from "@tanstack/react-router";
import { LivePlayer } from "@/components/live-player";
import { SectionHeading } from "@/components/section-heading";
import { shows } from "@/data/site";

export const Route = createFileRoute("/listen")({
  head: () => ({
    meta: [
      { title: "Listen Live — Community Air Literary Radio" },
      {
        name: "description",
        content:
          "Tune in to live literary radio: author conversations, readings, book news and poetry — broadcasting daily to 85+ countries.",
      },
      { property: "og:title", content: "Listen Live — Community Air Literary Radio" },
      { property: "og:url", content: "/listen" },
    ],
    links: [{ rel: "canonical", href: "/listen" }],
  }),
  component: ListenPage,
});

const recentlyPlayed = [
  { title: "Poetry Sessions with Arjun Mehta", time: "10:00 GMT" },
  { title: "Book of the Week: The Frost Ledger", time: "09:00 GMT" },
  { title: "Morning Pages — literary news roundup", time: "08:00 GMT" },
  { title: "Classic Reads: Rereading Woolf", time: "Yesterday, 21:00 GMT" },
];

function ListenPage() {
  const today = shows.slice(0, 4);
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Live Radio"
        title="Broadcasting now"
        description="One stream, every story. Live conversations, readings, and literary news around the clock."
      />

      <div className="mt-10">
        <LivePlayer />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <section aria-labelledby="schedule-heading">
          <h2 id="schedule-heading" className="font-serif text-2xl font-bold">
            Up next on air
          </h2>
          <ul className="mt-6 space-y-3">
            {today.map((s, i) => (
              <li
                key={s.name}
                className="card-lift flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card px-5 py-4"
              >
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-muted-foreground">with {s.host}</p>
                </div>
                <span className={`text-sm font-medium ${i === 0 ? "text-primary" : "text-muted-foreground"}`}>
                  {i === 0 ? "Next · " : ""}
                  {s.time}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="font-serif text-2xl font-bold">
            Recently played
          </h2>
          <ul className="mt-6 space-y-3">
            {recentlyPlayed.map((r) => (
              <li
                key={r.title}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/50 px-5 py-4"
              >
                <p className="text-sm">{r.title}</p>
                <span className="shrink-0 text-xs text-muted-foreground">{r.time}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { shows, coverGradients } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { Clock, Mic } from "lucide-react";

export const Route = createFileRoute("/shows")({
  head: () => ({
    meta: [
      { title: "Shows & Weekly Schedule | Community Air" },
      {
        name: "description",
        content:
          "From Author Spotlight to Poetry Sessions — explore the full weekly programming of Community Air literary radio.",
      },
      { property: "og:title", content: "Shows & Weekly Schedule | Community Air" },
      { property: "og:url", content: "/shows" },
    ],
    links: [{ rel: "canonical", href: "/shows" }],
  }),
  component: ShowsPage,
});

function ShowsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Weekly Programming"
        title="A show for every kind of reader"
        description="Eight signature programs, seven days a week — each one a different door into the world of books."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shows.map((s) => (
          <article key={s.name} className="card-lift overflow-hidden rounded-3xl border border-border/60 bg-card">
            <div
              className={cn("flex h-32 items-end bg-gradient-to-br p-5", coverGradients[s.cover])}
            >
              <h2 className="font-serif text-xl font-bold text-[oklch(0.98_0.005_85)]">{s.name}</h2>
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mic className="h-3.5 w-3.5 text-primary" aria-hidden /> {s.host}
              </p>
              <p className="mt-2 flex items-center gap-2 text-xs font-medium text-primary">
                <Clock className="h-3.5 w-3.5" aria-hidden /> {s.day} · {s.time}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20" aria-labelledby="schedule-grid">
        <h2 id="schedule-grid" className="font-serif text-2xl font-bold">
          This week at a glance
        </h2>
        <div className="mt-6 overflow-x-auto rounded-3xl border border-border/60">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-card">
              <tr>
                <th className="px-5 py-4 font-semibold">Day</th>
                <th className="px-5 py-4 font-semibold">Show</th>
                <th className="px-5 py-4 font-semibold">Host</th>
                <th className="px-5 py-4 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              {shows.map((s, i) => (
                <tr key={s.name} className={i % 2 ? "bg-card/50" : "bg-background"}>
                  <td className="px-5 py-3.5 text-muted-foreground">{s.day}</td>
                  <td className="px-5 py-3.5 font-medium">{s.name}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{s.host}</td>
                  <td className="px-5 py-3.5 text-primary">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

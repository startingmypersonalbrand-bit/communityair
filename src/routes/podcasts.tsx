import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { episodes } from "@/data/site";
import { EpisodeCard } from "@/components/episode-card";
import { SectionHeading } from "@/components/section-heading";
import { Search } from "lucide-react";

export const Route = createFileRoute("/podcasts")({
  head: () => ({
    meta: [
      { title: "Podcasts — Author Interviews | Community Air" },
      {
        name: "description",
        content:
          "Long-form podcast interviews with the world's most compelling authors. Stream on Spotify, Apple Podcasts, Amazon Music, and Audible.",
      },
      { property: "og:title", content: "Podcasts — Author Interviews | Community Air" },
      { property: "og:url", content: "/podcasts" },
    ],
    links: [{ rel: "canonical", href: "/podcasts" }],
  }),
  component: PodcastsPage,
});

function PodcastsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(episodes.map((e) => e.category)))];

  const filtered = useMemo(
    () =>
      episodes.filter((e) => {
        const q = query.toLowerCase();
        const matchesQuery =
          !q || e.title.toLowerCase().includes(q) || e.guest.toLowerCase().includes(q) || e.show.toLowerCase().includes(q);
        const matchesCat = category === "All" || e.category === category;
        return matchesQuery && matchesCat;
      }),
    [query, category],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Podcast Library"
        title="Every conversation, on demand"
        description="Professional interviews recorded in our studios and distributed everywhere you listen."
      />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search episodes, guests, shows…"
            aria-label="Search episodes"
            className="w-full rounded-full border border-input bg-card py-3 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {filtered.map((e) => (
          <EpisodeCard key={e.id} episode={e} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">No episodes match your search — try another term.</p>
      )}

      <div className="mt-16 rounded-3xl border border-border/60 bg-card p-8 text-center">
        <h2 className="font-serif text-2xl font-bold">Listen everywhere</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Community Air is distributed on Spotify, Apple Podcasts, Amazon Music, and Audible.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Spotify", "Apple Podcasts", "Amazon Music", "Audible"].map((p) => (
            <span key={p} className="rounded-full border border-border px-5 py-2 text-sm text-muted-foreground">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

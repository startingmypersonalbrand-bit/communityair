import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { authors } from "@/data/site";
import { AuthorCard } from "@/components/author-card";
import { SectionHeading } from "@/components/section-heading";
import { Search } from "lucide-react";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "Author Directory | Community Air" },
      {
        name: "description",
        content:
          "Discover featured writers from around the world — browse by genre and country, read biographies, and listen to their interviews.",
      },
      { property: "og:title", content: "Author Directory | Community Air" },
      { property: "og:url", content: "/authors" },
    ],
    links: [{ rel: "canonical", href: "/authors" }],
  }),
  component: AuthorsPage,
});

function AuthorsPage() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const genres = ["All", ...Array.from(new Set(authors.map((a) => a.genre)))];

  const filtered = useMemo(
    () =>
      authors
        .filter((a) => {
          const q = query.toLowerCase();
          const matchesQ = !q || a.name.toLowerCase().includes(q) || a.country.toLowerCase().includes(q);
          return matchesQ && (genre === "All" || a.genre === genre);
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
    [query, genre],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Author Directory"
        title="The writers behind the voices"
        description="Every author we feature receives a professional profile, an interview, and a global stage."
      />

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or country…"
            aria-label="Search authors"
            className="w-full rounded-full border border-input bg-card py-3 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by genre">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                genre === g
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <AuthorCard key={a.id} author={a} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">No authors match your search.</p>
      )}
    </div>
  );
}

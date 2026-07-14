import { createFileRoute } from "@tanstack/react-router";
import { books } from "@/data/site";
import { BookCover } from "@/components/book-cover";
import { SectionHeading } from "@/components/section-heading";
import { Star } from "lucide-react";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — Curated Recommendations | Community Air" },
      {
        name: "description",
        content:
          "Trending titles, new releases, editor's picks, and award winners — books championed on air by Community Air.",
      },
      { property: "og:title", content: "Books — Curated Recommendations | Community Air" },
      { property: "og:url", content: "/books" },
    ],
    links: [{ rel: "canonical", href: "/books" }],
  }),
  component: BooksPage,
});

const shelves = ["Trending", "New Releases", "Editor's Picks", "Award Winners"] as const;

function BooksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="The Bookshelf"
        title="Curated reading, championed on air"
        description="Every book here has been discussed, reviewed, or celebrated on our airwaves. No algorithms — just editors who read."
      />

      {shelves.map((shelf) => {
        const shelfBooks = books.filter((b) => b.shelf === shelf);
        if (shelfBooks.length === 0) return null;
        return (
          <section key={shelf} className="mt-16" aria-labelledby={`shelf-${shelf}`}>
            <h2 id={`shelf-${shelf}`} className="font-serif text-2xl font-bold">
              {shelf}
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {shelfBooks.map((b) => (
                <article key={b.id} className="card-lift rounded-3xl border border-border/60 bg-card p-5">
                  <BookCover title={b.title} author={b.author} variant={b.cover} imageUrl={b.imageUrl} />
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{b.category}</span>
                      <span className="flex items-center gap-1 text-xs text-primary">
                        <Star className="h-3 w-3 fill-primary" aria-hidden /> {b.rating.toFixed(1)}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg font-bold">{b.title}</h3>
                    <p className="text-xs text-muted-foreground">{b.author}</p>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{b.description}</p>
                    <div className="mt-4">
                      {b.amazonUrl ? (
                        <a
                          href={b.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="block w-full rounded-full bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
                        >
                          Buy on Amazon
                        </a>
                      ) : (
                        <button className="w-full rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </article>

              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

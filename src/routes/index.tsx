import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { authors, books, episodes } from "@/data/site";
import { LivePlayer } from "@/components/live-player";
import { SectionHeading } from "@/components/section-heading";
import { AuthorCard } from "@/components/author-card";
import { EpisodeCard } from "@/components/episode-card";
import { BookCover } from "@/components/book-cover";
import { StatCounter } from "@/components/stat-counter";
import { Star, ArrowRight, Headphones, Mic2, BookOpen } from "lucide-react";
import hero from "@/assets/hero.jpg";

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Community Air — Where Every Story Finds Its Voice" },
      {
        name: "description",
        content:
          "Live literary radio, author podcasts, book discovery and a global community. Community Air gives every story a voice and every author an audience.",
      },
      { property: "og:title", content: "Community Air — Where Every Story Finds Its Voice" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero, fetchPriority: "high" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="A vintage golden microphone standing in a grand library bathed in warm light"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center sm:px-6 sm:py-44">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            The Global Literary Media Platform
          </p>
          <h1
            className="animate-fade-up mt-6 max-w-4xl font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Community Air
          </h1>
          <p
            className="animate-fade-up mt-5 font-serif text-xl italic text-gradient-gold sm:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Where Every Story Finds Its Voice.
          </p>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Live literary radio. Professional author interviews. Book discovery, community, and conversation —
            connecting readers, authors, and storytellers across the world.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/listen"
              className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
            >
              <Headphones className="h-4 w-4" aria-hidden /> Listen Live
            </Link>
            <Link
              to="/podcasts"
              className="flex items-center gap-2 rounded-full border border-foreground/25 bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all hover:border-primary hover:text-primary"
            >
              <Mic2 className="h-4 w-4" aria-hidden /> Explore Podcasts
            </Link>
            <Link
              to="/get-featured"
              className="flex items-center gap-2 rounded-full border border-foreground/25 bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all hover:border-primary hover:text-primary"
            >
              <BookOpen className="h-4 w-4" aria-hidden /> Get Featured
            </Link>
          </div>
        </div>
      </section>

      {/* Live radio */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="On Air Now"
          title="Literary radio, broadcasting to the world"
          description="Tune in to live conversations, readings, and literary news — every day, from everywhere."
        />
        <div className="mt-10">
          <LivePlayer />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4">
          <StatCounter value={1200} suffix="+" label="Author interviews" />
          <StatCounter value={85} label="Countries reached" />
          <StatCounter value={340} suffix="K" label="Monthly listeners" />
          <StatCounter value={9800} suffix="+" label="Books spotlighted" />
        </div>
      </section>

      {/* Featured authors */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured Authors"
            title="Voices worth hearing"
            description="Writers from every continent, in conversation about the work of their lives."
          />
          <Link to="/authors" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            All authors <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {authors.slice(0, 3).map((a) => (
            <AuthorCard key={a.id} author={a} />
          ))}
        </div>
      </section>

      {/* Featured books */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Books"
              title="This season's essential reading"
              description="Curated by our editors, championed on air."
            />
            <Link to="/books" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Browse all books <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {useMemo(() => shuffle(books).slice(0, 5), []).map((b) => (
              <a
                key={b.id}
                href={b.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="card-lift group block"
              >
                <BookCover title={b.title} author={b.author} variant={b.cover} imageUrl={b.imageUrl} />
                <div className="mt-3">
                  <p className="flex items-center gap-1 text-xs text-primary">
                    <Star className="h-3 w-3 fill-primary" aria-hidden /> {b.rating.toFixed(1)}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold">{b.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{b.author}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest episodes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Latest Episodes"
            title="Conversations beyond the pages"
            description="Long-form interviews with the writers shaping contemporary literature."
          />
          <Link to="/podcasts" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            All episodes <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {episodes.slice(0, 4).map((e) => (
            <EpisodeCard key={e.id} episode={e} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-5xl">
            Your story deserves a <span className="text-gradient-gold">global audience</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Join hundreds of authors who have amplified their voices through radio features, podcast interviews, and
            worldwide book promotion.
          </p>
          <Link
            to="/get-featured"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)]"
          >
            Get Featured <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}

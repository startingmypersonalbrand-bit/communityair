import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { Calendar, MessagesSquare, BookMarked, Quote } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Readers & Book Clubs | Community Air" },
      {
        name: "description",
        content:
          "Join book discussions, reading clubs, live events and upcoming interviews — the global Community Air reader community.",
      },
      { property: "og:title", content: "Community — Readers & Book Clubs | Community Air" },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

const discussions = [
  { title: "Is the unreliable narrator overused?", replies: 148, club: "Craft Talk" },
  { title: "March read: The Cartographer's Widow — final thoughts", replies: 92, club: "Magical Realism Club" },
  { title: "Best opening line you've read this year?", replies: 316, club: "General" },
  { title: "Translated fiction recommendations from small presses", replies: 74, club: "World Lit Circle" },
];

const events = [
  { date: "Jul 14", title: "Live interview: Elena Marchetti", detail: "Author Spotlight, 18:00 GMT — with listener Q&A" },
  { date: "Jul 18", title: "Poetry open mic (virtual)", detail: "Hosted by Rosa Delgado — 12 reader slots" },
  { date: "Jul 22", title: "Book of the Month vote closes", detail: "Cast your vote for August's community read" },
  { date: "Jul 29", title: "Behind the Manuscript live taping", detail: "Watch a podcast episode being recorded" },
];

const testimonials = [
  {
    quote:
      "My debut sold out its first print run two weeks after my interview aired. This platform changed everything for me.",
    name: "Sofia Lindqvist",
    role: "Author, The Frost Ledger",
  },
  {
    quote:
      "I've discovered more meaningful books through Community Air in one year than in a decade of scrolling recommendations.",
    name: "Amara Osei",
    role: "Reader, London",
  },
  {
    quote:
      "The interview felt like a real literary conversation — thoughtful, prepared, generous. Rare in this industry.",
    name: "Diego Álvarez",
    role: "Author, Rain That Remembers",
  },
];

function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Community"
        title="Readers, gathered around the world's stories"
        description="Discussions, clubs, live events, and the shared joy of a good book. Everyone is welcome at this table."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <section aria-labelledby="discussions-heading">
          <h2 id="discussions-heading" className="flex items-center gap-2 font-serif text-2xl font-bold">
            <MessagesSquare className="h-5 w-5 text-primary" aria-hidden /> Book discussions
          </h2>
          <ul className="mt-6 space-y-3">
            {discussions.map((d) => (
              <li key={d.title} className="card-lift rounded-2xl border border-border/60 bg-card px-5 py-4">
                <p className="font-medium">{d.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {d.club} · {d.replies} replies
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="events-heading">
          <h2 id="events-heading" className="flex items-center gap-2 font-serif text-2xl font-bold">
            <Calendar className="h-5 w-5 text-primary" aria-hidden /> Upcoming events
          </h2>
          <ul className="mt-6 space-y-3">
            {events.map((e) => (
              <li key={e.title} className="card-lift flex gap-4 rounded-2xl border border-border/60 bg-card px-5 py-4">
                <span className="shrink-0 rounded-xl bg-secondary px-3 py-2 text-center text-xs font-bold text-primary">
                  {e.date}
                </span>
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{e.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-20" aria-labelledby="clubs-heading">
        <h2 id="clubs-heading" className="flex items-center gap-2 font-serif text-2xl font-bold">
          <BookMarked className="h-5 w-5 text-primary" aria-hidden /> Reading clubs
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "World Lit Circle", members: "3.1K members", focus: "Fiction in translation" },
            { name: "Magical Realism Club", members: "2.4K members", focus: "The strange and the true" },
            { name: "Craft Talk", members: "1.8K members", focus: "For writers who read" },
            { name: "Slow Readers Society", members: "4.6K members", focus: "One great book a month" },
          ].map((c) => (
            <div key={c.name} className="card-lift rounded-2xl border border-border/60 bg-card p-5">
              <p className="font-serif text-lg font-bold">{c.name}</p>
              <p className="mt-1 text-xs text-primary">{c.members}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="flex items-center gap-2 font-serif text-2xl font-bold">
          <Quote className="h-5 w-5 text-primary" aria-hidden /> From our community
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-3xl border border-border/60 bg-card p-6">
              <p className="font-serif text-lg italic leading-relaxed">"{t.quote}"</p>
              <footer className="mt-4 text-sm">
                <span className="font-semibold text-primary">{t.name}</span>
                <span className="text-muted-foreground"> — {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-border/60 bg-card p-10 text-center">
        <h2 className="font-serif text-3xl font-bold">Never miss a chapter</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Get event invitations, book club picks, and the week's best interviews — in one Sunday letter.
        </p>
        <Link
          to="/get-featured"
          className="mt-6 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
        >
          Join the community
        </Link>
      </section>
    </div>
  );
}

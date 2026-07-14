import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { Compass, Eye, HeartHandshake } from "lucide-react";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Our Mission & Hosts | Community Air" },
      {
        name: "description",
        content:
          "Community Air exists to give every story a voice and every author a global audience. Meet our mission, values, and hosts.",
      },
      { property: "og:title", content: "About Us — Our Mission & Hosts | Community Air" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const hosts = [
  { name: "Maya Okafor", shows: "Author Spotlight · Literary Lounge", bio: "Former books editor turned broadcaster, Maya has interviewed over 400 authors across five continents." },
  { name: "James Whitfield", shows: "Book of the Week · Classic Reads", bio: "A critic with a soft spot for forgotten classics, James believes every great book deserves a second first impression." },
  { name: "Rosa Delgado", shows: "Story Hour · Poetry Sessions", bio: "Poet and performer, Rosa brings live literature to air with warmth, wit, and impeccable timing." },
  { name: "Priya Nair", shows: "Behind the Manuscript", bio: "Ex-literary agent Priya knows exactly where manuscripts go to struggle — and how the great ones survive." },
  { name: "Tom Akerman", shows: "Indie Voices", bio: "Champion of the small press and the self-published, Tom finds tomorrow's essential writers today." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Our Story"
        title="Why Community Air exists"
        description="Somewhere right now, a brilliant book is going unread — not because it isn't good, but because nobody has heard of it. We built this platform to fix that."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
          <img
            src={studio}
            alt="Inside the Community Air broadcast studio, warm light over a mixing desk and shelves of books"
            width={1280}
            height={854}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            Community Air is a global literary media platform — an online radio station, a podcast network, a
            literary magazine, and a promotional stage, all in one. We connect readers, authors, publishers, and
            literary professionals through the oldest technology there is: the human voice.
          </p>
          <p className="leading-relaxed">
            We are not a publisher. We don't sell contracts, print books, or offer editing services. What we offer is
            attention — carefully crafted, professionally produced, and broadcast to a worldwide audience that loves
            books as much as you do.
          </p>
          <p className="leading-relaxed font-medium text-foreground">
            Our mission is simple: give every story a voice and every author a global audience.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          { icon: Compass, title: "Mission", text: "To give every story a voice and every author a global audience, regardless of publisher, budget, or postcode." },
          { icon: Eye, title: "Vision", text: "A literary world where discovery is driven by conversation and craft — not marketing spend." },
          { icon: HeartHandshake, title: "Values", text: "Curiosity, generosity, editorial independence, and an unshakeable belief in the power of stories." },
        ].map((v) => (
          <div key={v.title} className="card-lift rounded-3xl border border-border/60 bg-card p-8">
            <v.icon className="h-7 w-7 text-primary" aria-hidden />
            <h2 className="mt-4 font-serif text-xl font-bold">{v.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-20" aria-labelledby="hosts-heading">
        <h2 id="hosts-heading" className="font-serif text-3xl font-bold">
          Meet the hosts
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hosts.map((h) => (
            <div key={h.name} className="card-lift rounded-3xl border border-border/60 bg-card p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary font-serif text-lg font-bold text-primary" aria-hidden>
                {h.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">{h.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary">{h.shows}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-border/60 bg-card p-10 text-center">
        <h2 className="font-serif text-3xl font-bold">Come behind the scenes</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Whether you're a reader looking for your next favorite book or an author ready for the microphone — there's a
          place for you here.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/listen" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
            Listen Live
          </Link>
          <Link to="/get-featured" className="rounded-full border border-primary/40 px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            Get Featured
          </Link>
        </div>
      </section>
    </div>
  );
}

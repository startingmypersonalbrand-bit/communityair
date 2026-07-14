import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Community Air" },
      {
        name: "description",
        content:
          "Get in touch with the Community Air team — press, partnerships, author submissions, and listener questions.",
      },
      { property: "og:title", content: "Contact Us | Community Air" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "Do you publish books?",
    a: "No. Community Air is a media platform, not a publisher. We don't sell publishing contracts, print books, or offer editing services — we provide exposure through radio, podcasts, and promotion.",
  },
  {
    q: "How do I get interviewed?",
    a: "Apply through our Get Featured page. Our editorial team reviews every submission personally and replies within five working days.",
  },
  {
    q: "Is being featured free?",
    a: "Editorial features are selected on merit. Promotional campaign packages are available for authors and publishers who want extended reach — contact us for a media kit.",
  },
  {
    q: "Where can I listen to past episodes?",
    a: "Every episode is available in our podcast library and on Spotify, Apple Podcasts, Amazon Music, and Audible.",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Press, partnerships, submissions, or simply a book you think we should know about — we read everything."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {sent ? (
            <div className="rounded-3xl border border-forest/40 bg-card p-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-forest" aria-hidden />
              <h2 className="mt-6 font-serif text-2xl font-bold">Message sent</h2>
              <p className="mt-2 text-sm text-muted-foreground">We'll reply within two working days.</p>
            </div>
          ) : (
            <form
              className="rounded-3xl border border-border/60 bg-card p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="text-sm font-medium">Name</label>
                  <input id="c-name" required maxLength={100} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="c-email" className="text-sm font-medium">Email</label>
                  <input id="c-email" type="email" required maxLength={255} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="c-subject" className="text-sm font-medium">Subject</label>
                <input id="c-subject" required maxLength={150} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="mt-5">
                <label htmlFor="c-message" className="text-sm font-medium">Message</label>
                <textarea id="c-message" required rows={6} maxLength={2000} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="mt-6 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]">
                Send message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <p className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-primary" aria-hidden /> hello@beyondthepages.fm
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-primary" aria-hidden /> +44 20 7946 0958
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" aria-hidden /> Mon–Fri, 09:00–18:00 GMT
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow us</h2>
            <p className="mt-3 text-sm text-muted-foreground">Instagram · X · TikTok · YouTube · LinkedIn</p>
          </div>
        </div>
      </div>

      <section className="mt-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="font-serif text-3xl font-bold">Frequently asked questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border/60 bg-card">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left font-medium"
                aria-expanded={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {f.q}
                <span className="text-primary" aria-hidden>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="animate-fade-in px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

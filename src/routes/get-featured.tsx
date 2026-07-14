import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Globe2, Mic2, Share2, Radio, User, BookOpen, FileBadge, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/get-featured")({
  head: () => ({
    meta: [
      { title: "Get Featured — Amplify Your Book | Community Air" },
      {
        name: "description",
        content:
          "Apply for a professional interview, radio promotion, and global podcast distribution. Give your book the audience it deserves.",
      },
      { property: "og:title", content: "Get Featured — Amplify Your Book | Community Air" },
      { property: "og:url", content: "/get-featured" },
    ],
    links: [{ rel: "canonical", href: "/get-featured" }],
  }),
  component: GetFeaturedPage,
});

const benefits = [
  { icon: Globe2, title: "Global exposure", text: "Reach listeners in 85+ countries through our radio and podcast network." },
  { icon: Mic2, title: "Professional interviews", text: "A prepared, thoughtful conversation recorded in studio quality." },
  { icon: Share2, title: "Podcast distribution", text: "Your episode published to Spotify, Apple, Amazon Music and Audible." },
  { icon: Radio, title: "Radio promotion", text: "On-air mentions and features across our weekly programming." },
  { icon: User, title: "Author profile", text: "A permanent, beautifully designed profile in our directory." },
  { icon: BookOpen, title: "Book discovery", text: "Placement in our curated shelves seen by hundreds of thousands of readers." },
  { icon: FileBadge, title: "Media kit", text: "Shareable audio clips, quotes and artwork for your own channels." },
];

const genres = [
  "Literary Fiction", "Historical Fiction", "Crime & Thriller", "Poetry", "Memoir",
  "Magical Realism", "Romance", "Science Fiction & Fantasy", "Non-fiction", "Children's & YA", "Other",
];

const CONTACT_EMAIL = "communityairfm@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function GetFeaturedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {
      _subject: `New Get Featured application: ${String(data.get("bookTitle") || "")}`,
      _template: "table",
      _captcha: "false",
    };
    data.forEach((v, k) => { payload[k] = String(v); });
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please email us directly at " + CONTACT_EMAIL);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Get Featured"
        title="Give your story the voice it deserves"
        description="We don't publish books — we amplify them. Apply below and our editorial team will be in touch within five working days."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="card-lift rounded-2xl border border-border/60 bg-card p-6">
            <b.icon className="h-6 w-6 text-primary" aria-hidden />
            <h2 className="mt-4 font-serif text-lg font-bold">{b.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-3xl">
        {submitted ? (
          <div className="rounded-3xl border border-forest/40 bg-card p-12 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-forest" aria-hidden />
            <h2 className="mt-6 font-serif text-3xl font-bold">Application received</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Thank you — our editorial team reviews every submission personally. Expect a reply within five working
              days.
            </p>
          </div>
        ) : (
          <form className="rounded-3xl border border-border/60 bg-card p-8 sm:p-10" onSubmit={handleSubmit}>
            <h2 className="font-serif text-2xl font-bold">Application form</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Doe" />
              <Field label="Author / pen name" name="authorName" required placeholder="J. M. Doe" />
              <Field label="Book title" name="bookTitle" required placeholder="The Story So Far" />
              <div>
                <label htmlFor="genre" className="text-sm font-medium">
                  Genre <span className="text-primary">*</span>
                </label>
                <select
                  id="genre"
                  name="genre"
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a genre</option>
                  {genres.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
              <Field label="Website" name="website" type="url" placeholder="https://" />
              <Field label="Preferred interview date" name="date" type="date" />
            </div>
            <div className="mt-5">
              <label htmlFor="description" className="text-sm font-medium">
                About you and your book <span className="text-primary">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                maxLength={1000}
                placeholder="Tell us about your book, your journey, and what you'd love to talk about on air…"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              disabled={sending}
              className="mt-8 w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.01] hover:shadow-[var(--shadow-glow)] disabled:opacity-60"
            >
              {sending ? "Submitting…" : "Submit application"}
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              We never sell publishing contracts or services — being featured is about exposure, not fees.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

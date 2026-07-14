import { Link } from "@tanstack/react-router";
import { useState } from "react";


const NEWSLETTER_EMAIL = "communityairfm@gmail.com";
const NEWSLETTER_ENDPOINT = `https://formsubmit.co/ajax/${NEWSLETTER_EMAIL}`;

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    try {
      await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New newsletter subscriber",
          _template: "table",
          _captcha: "false",
          email,
        }),
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      setSubscribed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <footer className="border-t border-border/60 bg-[oklch(0.14_0.005_75)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Community Air" className="h-9 w-9 rounded-full object-contain" />
              <span className="font-serif text-lg font-bold">Community Air</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Where every story finds its voice. The global home for literary radio, podcasts, and author discovery.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/listen" className="text-muted-foreground hover:text-primary">Listen Live</Link></li>
              <li><Link to="/podcasts" className="text-muted-foreground hover:text-primary">Podcasts</Link></li>
              <li><Link to="/shows" className="text-muted-foreground hover:text-primary">Shows</Link></li>
              <li><Link to="/authors" className="text-muted-foreground hover:text-primary">Authors</Link></li>
              <li><Link to="/books" className="text-muted-foreground hover:text-primary">Books</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/get-featured" className="text-muted-foreground hover:text-primary">Get Featured</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
            <h3 className="mt-6 font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Listen on</h3>
            <p className="mt-3 text-sm text-muted-foreground">Spotify · Apple Podcasts · Amazon Music · Audible</p>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">One beautifully curated literary letter, every Sunday.</p>
            {subscribed ? (
              <p className="mt-4 text-sm font-medium text-forest">Welcome aboard — see you Sunday.</p>
            ) : (
              <form className="mt-4 flex gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="w-full rounded-full border border-input bg-card px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-60"
                >
                  {sending ? "…" : "Join"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Community Air. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

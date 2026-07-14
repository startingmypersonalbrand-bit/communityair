import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/listen", label: "Listen Live" },
  { to: "/podcasts", label: "Podcasts" },
  { to: "/shows", label: "Shows" },
  { to: "/authors", label: "Authors" },
  { to: "/books", label: "Books" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Community Air" className="h-9 w-9 rounded-full object-contain" />
          <span className="font-serif text-lg font-bold tracking-tight">Community Air</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm font-medium text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-featured"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            Get Featured
          </Link>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border/60 bg-background lg:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "rounded-md px-2 py-3 text-sm font-medium text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/get-featured"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Featured
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

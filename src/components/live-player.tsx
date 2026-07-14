import { useState } from "react";
import { Play, Pause, Users } from "lucide-react";

function EqBars() {
  return (
    <span className="flex h-4 items-end gap-[3px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[3px] origin-bottom animate-eq rounded-full bg-primary"
          style={{ height: "100%", animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </span>
  );
}

export function LivePlayer({ compact = false }: { compact?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        <button
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause live radio" : "Play live radio"}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-1 h-6 w-6" />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-live/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-live">
              <span className="h-2 w-2 animate-live-pulse rounded-full bg-live" />
              Live
            </span>
            {playing && <EqBars />}
          </div>
          <h3 className="mt-3 truncate font-serif text-xl font-bold sm:text-2xl">Literary Lounge</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            with Maya Okafor — "Translation and the Second Life of Novels"
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-primary" aria-hidden />
          <span className="font-medium text-foreground">2,847</span> listening now
        </div>
      </div>

      {!compact && (
        <div className="grid gap-px border-t border-border/60 bg-border/40 sm:grid-cols-3">
          {[
            { label: "Up next", value: "Behind the Manuscript · 16:00 GMT" },
            { label: "Recently played", value: "Poetry Sessions with Arjun Mehta" },
            { label: "Then", value: "Classic Reads · 21:00 GMT" },
          ].map((s) => (
            <div key={s.label} className="bg-card px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="mt-1 truncate text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { type Episode, coverGradients } from "@/data/site";
import { Play, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="card-lift flex gap-5 rounded-3xl border border-border/60 bg-card p-5">
      <div
        className={cn(
          "flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br",
          coverGradients[episode.cover],
        )}
        aria-hidden
      >
        <span className="font-serif text-2xl font-bold text-[oklch(0.98_0.005_85)]">
          {episode.guest.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium">{episode.category}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden />
            {episode.duration}
          </span>
        </div>
        <h3 className="mt-2 truncate font-serif text-lg font-bold">{episode.title}</h3>
        <p className="text-xs text-muted-foreground">
          {episode.show} · with {episode.guest}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{episode.summary}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <a
            href={episode.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${episode.title}`}
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            <Play className="h-3 w-3" aria-hidden /> Listen
          </a>
          <span className="text-[11px] text-muted-foreground">Spotify · Apple · Amazon · Audible</span>
        </div>
      </div>
    </article>
  );
}

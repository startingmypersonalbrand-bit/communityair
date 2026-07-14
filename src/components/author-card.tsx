import { type Author } from "@/data/site";
import { Mic, MapPin } from "lucide-react";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <article className="card-lift group overflow-hidden rounded-3xl border border-border/60 bg-card">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={author.image}
          alt={`Portrait of ${author.name}`}
          width={512}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-serif text-xl font-bold">{author.name}</h3>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" aria-hidden />
            {author.country}
          </span>
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{author.genre}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{author.bio}</p>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Mic className="h-3.5 w-3.5 text-primary" aria-hidden />
          {author.latestInterview}
        </p>
        <button className="mt-5 w-full rounded-full border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
          View Profile
        </button>
      </div>
    </article>
  );
}

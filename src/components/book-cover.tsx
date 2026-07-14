import { type CoverVariant, coverGradients } from "@/data/site";
import { cn } from "@/lib/utils";

export function BookCover({
  title,
  author,
  variant,
  imageUrl,
  className,
}: {
  title: string;
  author: string;
  variant: CoverVariant;
  imageUrl?: string;
  className?: string;
}) {
  if (imageUrl) {
    return (
      <div
        className={cn(
          "relative aspect-[2/3] overflow-hidden rounded-xl bg-[oklch(0.15_0.01_60)] shadow-[var(--shadow-card)]",
          className,
        )}
      >
        <img
          src={imageUrl}
          alt={`${title} by ${author}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[2/3] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br p-5 shadow-[var(--shadow-card)]",
        coverGradients[variant],
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-[oklch(0_0_0/0.3)]" />
      <div className="border-b border-[oklch(1_0_0/0.25)] pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[oklch(1_0_0/0.7)]">Community Air</p>
      </div>
      <p className="font-serif text-xl font-bold leading-snug text-[oklch(0.98_0.005_85)]">{title}</p>
      <p className="text-xs font-medium uppercase tracking-widest text-[oklch(1_0_0/0.75)]">{author}</p>
    </div>
  );
}

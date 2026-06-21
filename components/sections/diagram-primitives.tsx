import { cn } from "@/lib/utils";

export function DiagramNode({
  label,
  sub,
  tone = "neutral",
  className,
}: {
  label: string;
  sub?: string;
  tone?: "neutral" | "accent" | "bad";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[3px] border px-4 py-3 text-center",
        tone === "neutral" && "border-border-subtle bg-bg-primary",
        tone === "accent" && "border-accent/25 bg-accent/[0.06]",
        tone === "bad" && "border-red-500/20 bg-red-500/[0.04]",
        className
      )}
    >
      <div
        className={cn(
          "font-mono text-[12px]",
          tone === "accent" && "text-accent",
          tone === "bad" && "text-red-400/80",
          tone === "neutral" && "text-text-secondary"
        )}
      >
        {label}
      </div>
      {sub && (
        <div className="mt-1 font-mono text-[10px] text-text-tertiary">
          {sub}
        </div>
      )}
    </div>
  );
}

export function DiagramArrow({
  direction = "right",
  label,
  className,
}: {
  direction?: "right" | "down";
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-shrink-0 items-center justify-center font-mono text-accent/50",
        direction === "right" ? "px-1 text-base" : "py-1 text-base rotate-90",
        className
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <span>──►</span>
        {label && (
          <span className="text-[9px] tracking-[0.06em] text-text-tertiary not-italic [writing-mode:initial] rotate-0">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

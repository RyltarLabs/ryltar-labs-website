import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  showLine?: boolean;
}

export function SectionLabel({ children, className, showLine = true }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4 font-mono text-[19px] tracking-[0.12em] text-accent font-bold", className)}>
      {showLine && <span className="h-px w-8 bg-accent flex-shrink-0" />}
      {children}
    </div>
  );
}
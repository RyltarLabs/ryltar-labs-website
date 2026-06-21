import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] font-mono text-xs font-medium tracking-[0.04em] transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(27,110,255,0.25)]",
        ghost:
          "border border-border-active text-text-primary bg-transparent hover:border-accent",
        whatsapp:
          "bg-accent-green text-white hover:bg-[#15803d] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(22,163,74,0.25)]",
        link: "text-accent border-b border-accent/30 rounded-none px-0 hover:gap-2.5",
        nav: "bg-accent text-white hover:bg-accent-light px-[18px] py-2",
      },
      size: {
        default: "px-7 py-3",
        sm: "px-5 py-2 text-[11px]",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

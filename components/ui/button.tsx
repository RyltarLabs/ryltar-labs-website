import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[3px] font-mono text-[16px] font-medium tracking-[0.04em] transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-accent text-white hover:bg-accent-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,6,255,0.25)]",
        "primary-flat": "bg-accent text-white hover:bg-blue-900 border-0 shadow-none ring-0 focus-visible:ring-0 rounded-none",
        ghost: "border border-border-active text-text-primary bg-transparent hover:border-accent",
        whatsapp: "bg-accent-green text-white hover:bg-[#15803d] border-0 shadow-none ring-0 focus-visible:ring-0 rounded-none",
        link: "text-accent border-b border-accent/30 rounded-none px-0 hover:gap-2.5",
        nav: "bg-accent text-white hover:bg-blue-900 border-0 shadow-none ring-0 px-[20px] py-2 rounded-none",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-6 py-3 text-[14px]",
        icon: "h-10 w-10",
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
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-gold bg-gold text-ink hover:bg-gold-light",
  secondary:
    "border-cream/30 bg-cream/10 text-cream hover:border-gold hover:text-gold-light",
  ghost: "border-transparent bg-transparent text-cream/80 hover:text-gold-light",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded px-5 py-2.5 text-sm font-semibold transition duration-200",
    "border focus:outline-none focus:ring-2 focus:ring-gold/70 focus:ring-offset-2 focus:ring-offset-ink",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

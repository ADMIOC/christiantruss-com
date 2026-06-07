import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "min-h-11 w-full rounded border border-gold/25 bg-ink-soft px-3 text-cream outline-none transition placeholder:text-cream/45 focus:border-gold",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded border border-gold/25 bg-ink-soft px-3 py-2 text-cream outline-none transition placeholder:text-cream/45 focus:border-gold",
        className,
      )}
      {...props}
    />
  );
}

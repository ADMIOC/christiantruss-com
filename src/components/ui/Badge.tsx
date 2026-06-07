import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex rounded border border-gold/40 px-2.5 py-1 text-gold",
        className,
      )}
      {...props}
    />
  );
}

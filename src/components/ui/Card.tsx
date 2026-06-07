import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "luxury-panel rounded-lg p-5 transition duration-200 hover:border-gold/70",
        className,
      )}
      {...props}
    />
  );
}

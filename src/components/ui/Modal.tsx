import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

export function Modal({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/80 p-4">
      <Card className="w-full max-w-lg">
        <h2 className="page-title mb-4">{title}</h2>
        {children}
      </Card>
    </div>
  );
}

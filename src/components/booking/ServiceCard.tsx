import { Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { services } from "@/lib/content";
import { cn } from "@/lib/utils/cn";

type Service = (typeof services)[number];

export function ServiceCard({
  service,
  selected,
  onSelect,
}: {
  service: Service;
  selected?: boolean;
  onSelect?: (service: Service) => void;
}) {
  return (
    <button
      className="text-left"
      type="button"
      onClick={() => onSelect?.(service)}
      aria-pressed={selected}
    >
      <Card
        className={cn(
          "h-full bg-cream/5",
          selected && "border-gold bg-gold/10 shadow-glow",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl leading-tight text-cream">
              {service.name}
            </h2>
            <p className="mt-2 text-sm text-cream/58">{service.description}</p>
          </div>
          <p className="font-serif text-3xl text-gold">{service.price}</p>
        </div>
        <p className="mt-5 flex items-center gap-2 text-sm text-cream/62">
          <Clock size={16} aria-hidden />
          {service.duration}
        </p>
      </Card>
    </button>
  );
}

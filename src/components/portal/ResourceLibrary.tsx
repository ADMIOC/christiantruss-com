import { Bookmark, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { memberResources } from "@/lib/member-portal";

export function ResourceLibrary({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
}) {
  const resources = limit ? memberResources.slice(0, limit) : memberResources;

  return (
    <div>
      {showHeader ? (
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold">Gated library</p>
            <h1 className="page-title mt-3 text-cream">Resources for members.</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Cuts", "Care", "Saved"].map((filter) => (
              <span
                key={filter}
                className="rounded border border-gold/25 px-3 py-1.5 text-sm text-cream/70"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="eyebrow text-gold">{resource.vertical}</p>
                <h2 className="mt-3 font-serif text-2xl leading-tight text-cream">
                  {resource.title}
                </h2>
              </div>
              {resource.type.toLowerCase().includes("video") ? (
                <PlayCircle className="text-gold" size={24} aria-hidden />
              ) : (
                <Bookmark className="text-gold" size={24} aria-hidden />
              )}
            </div>
            <p className="mt-3 text-sm text-cream/58">{resource.description}</p>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-cream/45">
                {resource.type} / {resource.length} / {resource.status}
              </p>
              <Button href="/portal/resources" variant="secondary">
                Open
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

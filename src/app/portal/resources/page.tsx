import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Resources",
};

const resources = [
  "Fade upkeep checklist",
  "Weekly self-care audit",
  "Beard shape maintenance guide",
  "Morning routine video library",
];

export default function PortalResourcesPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Gated library</p>
      <h1 className="page-title mt-3 text-cream">Resources for members.</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <Card key={resource}>
            <BookOpen className="text-gold" size={24} aria-hidden />
            <h2 className="mt-4 font-serif text-2xl text-cream">{resource}</h2>
            <p className="mt-2 text-sm text-cream/58">
              Gated resource placeholder ready for Supabase-backed files and Bunny
              videos.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

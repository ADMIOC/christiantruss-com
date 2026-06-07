import { Leaf, Scissors } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { imageAssets } from "@/lib/content";

export function DualVertical() {
  return (
    <section className="bg-cream py-16 text-ink">
      <div className="container-shell grid gap-4 md:grid-cols-2">
        <Card className="min-h-[360px] overflow-hidden bg-ink p-0 text-cream">
          <div
            className="flex h-full min-h-[360px] flex-col justify-end bg-cover bg-center p-6"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(15,14,12,0.92), rgba(15,14,12,0.28)), url(${imageAssets.cuts})`,
            }}
          >
            <Scissors className="mb-5 text-gold" size={28} aria-hidden />
            <h2 className="page-title">Truss The Cuts</h2>
            <p className="mt-3 max-w-md text-cream/74">
              Craft, technique, precision, and appointment experiences for the barber
              community.
            </p>
            <Button className="mt-6 w-fit" href="/cuts" variant="secondary">
              Explore Cuts
            </Button>
          </div>
        </Card>
        <Card className="min-h-[360px] overflow-hidden bg-ink p-0 text-cream">
          <div
            className="flex h-full min-h-[360px] flex-col justify-end bg-cover bg-center p-6"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(15,14,12,0.92), rgba(15,14,12,0.24)), url(${imageAssets.care})`,
            }}
          >
            <Leaf className="mb-5 text-teal-light" size={28} aria-hidden />
            <h2 className="page-title">Truss The Care</h2>
            <p className="mt-3 max-w-md text-cream/74">
              Practical self-care education, routines, and community for men building
              confidence.
            </p>
            <Button className="mt-6 w-fit" href="/care" variant="secondary">
              Explore Care
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

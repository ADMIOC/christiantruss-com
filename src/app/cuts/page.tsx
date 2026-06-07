import { Check, Scissors } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { imageAssets, services } from "@/lib/content";

export const metadata = {
  title: "Truss The Cuts",
};

export default function CutsPage() {
  return (
    <>
      <section
        className="relative min-h-[62vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageAssets.cuts})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/20" />
        <div className="container-shell relative flex min-h-[62vh] flex-col justify-center py-20">
          <p className="eyebrow text-gold">Truss The Cuts</p>
          <h1 className="display-type mt-4 max-w-4xl text-cream">
            Precision work for the chair, the mirror, and the week after.
          </h1>
          <Button className="mt-8 w-fit" href="/book">
            Book Now
          </Button>
        </div>
      </section>
      <section className="bg-cream py-16 text-ink">
        <div className="container-shell">
          <p className="eyebrow text-gold">Services</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.slice(0, 3).map((service) => (
              <Card key={service.key} className="border-ink/10 bg-white text-ink">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-3xl">{service.name}</h2>
                    <p className="mt-2 text-sm text-ink-muted">{service.description}</p>
                  </div>
                  <p className="font-serif text-3xl text-gold">{service.price}</p>
                </div>
                <p className="mt-4 text-sm font-semibold">{service.duration}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-16">
        <div className="container-shell grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">Technique showcase</p>
            <h2 className="page-title mt-4 text-cream">Shape, blend, detail, finish.</h2>
          </div>
          <div className="grid gap-3">
            {["Consult the head shape", "Map the fade before cutting", "Balance profile and beard", "Teach the upkeep"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-cream/72">
                  <Check className="text-gold" size={18} aria-hidden />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="bg-ink-soft/40 py-16">
        <div className="container-shell grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <Scissors className="text-gold" size={34} aria-hidden />
          <div>
            <h2 className="page-title text-cream">The philosophy</h2>
            <p className="mt-4 text-cream/68">
              Master barbering is listening, shaping, and educating. The appointment
              should not end when the cape comes off; it should give the client a
              standard they can carry.
            </p>
            <Button className="mt-6" href="/book">
              Reserve the Chair
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

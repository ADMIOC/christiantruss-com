import { Button } from "@/components/ui/Button";
import { imageAssets } from "@/lib/content";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[82vh] overflow-hidden border-b border-gold/20 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageAssets.hero})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(184,149,74,0.22),transparent_30%)]" />
      <div className="container-shell relative flex min-h-[82vh] flex-col justify-center gap-8 py-24">
        <p className="eyebrow fade-up text-gold">Master barber / self-care expert</p>
        <div className="max-w-4xl space-y-6">
          <h1 className="display-type fade-up text-cream [animation-delay:120ms]">
            Christian Truss
          </h1>
          <p className="fade-up max-w-2xl text-xl text-cream/82 [animation-delay:220ms]">
            Truss The Cuts. Truss The Care. Truss yourself.
          </p>
        </div>
        <div className="fade-up flex flex-wrap gap-3 [animation-delay:320ms]">
          <Button href="/book">Book a Cut</Button>
          <Button href="/care" variant="secondary">
            Join The Care Community
          </Button>
        </div>
      </div>
    </section>
  );
}

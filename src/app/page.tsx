import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="min-h-[72vh] border-b border-gold/20 bg-[radial-gradient(circle_at_75%_20%,rgba(184,149,74,0.2),transparent_32%),linear-gradient(135deg,rgba(15,14,12,1),rgba(58,56,50,0.55))]">
      <div className="container-shell flex min-h-[72vh] flex-col justify-center gap-8 py-24">
        <p className="eyebrow text-gold">Phase A foundation</p>
        <div className="max-w-4xl space-y-6">
          <h1 className="display-type text-cream">Christian Truss</h1>
          <p className="max-w-2xl text-lg text-cream/78">
            Truss The Cuts. Truss The Care. Truss yourself.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/book">Book a Cut</Button>
          <Button href="/care" variant="secondary">
            Join The Care Community
          </Button>
        </div>
      </div>
    </section>
  );
}

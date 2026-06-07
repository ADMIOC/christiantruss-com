import { Leaf, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { imageAssets } from "@/lib/content";

export const metadata = {
  title: "Truss The Care",
};

export default function CarePage() {
  return (
    <>
      <section
        className="relative min-h-[62vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageAssets.care})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/76 to-ink/24" />
        <div className="container-shell relative flex min-h-[62vh] flex-col justify-center py-20">
          <p className="eyebrow text-teal-light">Truss The Care</p>
          <h1 className="display-type mt-4 max-w-4xl text-cream">
            Self-care that feels practical, masculine, and repeatable.
          </h1>
          <Button className="mt-8 w-fit" href="/portal/resources">
            Preview Resources
          </Button>
        </div>
      </section>
      <section className="bg-cream py-16 text-ink">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            ["Routine", "Skin, hair, sleep, hydration, and grooming standards that compound."],
            ["Education", "Clear guides that explain why each habit matters and how to keep it."],
            ["Community", "A care-forward culture that helps men talk about the real work."],
          ].map(([title, body]) => (
            <Card key={title} className="border-ink/10 bg-white text-ink">
              <Leaf className="text-teal" size={24} aria-hidden />
              <h2 className="mt-4 font-serif text-3xl">{title}</h2>
              <p className="mt-3 text-sm text-ink-muted">{body}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-ink py-16">
        <div className="container-shell grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow text-gold">Membership</p>
            <h2 className="page-title mt-4 text-cream">Care Monthly</h2>
            <p className="mt-4 max-w-2xl text-cream/68">
              Gated guides, care breakdowns, routine audits, and education built for
              men who want self-care to feel less confusing and more owned.
            </p>
            <Button className="mt-6" href="/api/stripe/checkout?product=careMonthly">
              Join for $39/mo
            </Button>
          </div>
          <Card>
            <Mail className="text-gold" size={26} aria-hidden />
            <h2 className="mt-4 font-serif text-2xl text-cream">Newsletter</h2>
            <p className="mt-2 text-sm text-cream/58">
              Brevo-powered updates for care rituals, grooming notes, and new resources.
            </p>
            <form className="mt-5 grid gap-3">
              <Input type="email" placeholder="Email address" />
              <Button type="submit">Sign Up</Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}

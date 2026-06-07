import Link from "next/link";
import { Scissors, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const nav = [
  { href: "/cuts", label: "Cuts" },
  { href: "/care", label: "Care" },
  { href: "/blog", label: "Blog" },
  { href: "/vlog", label: "Vlog" },
  { href: "/portal", label: "Portal" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-ink/92 backdrop-blur">
      <div className="container-shell flex min-h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/" aria-label="Home">
          <span className="grid size-9 place-items-center rounded border border-gold/40 text-gold">
            <Scissors size={18} aria-hidden />
          </span>
          <span>
            <span className="block font-serif text-xl leading-none text-cream">
              Christian Truss
            </span>
            <span className="eyebrow text-cream/45">Cuts / Care</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-cream/68 md:flex">
          {nav.map((item) => (
            <Link key={item.href} className="transition hover:text-gold" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            className="hidden rounded border border-gold/20 p-2 text-cream/70 transition hover:text-gold sm:inline-flex"
            href="/admin/social"
            aria-label="Social content generator"
          >
            <Sparkles size={18} aria-hidden />
          </Link>
          <Button className="hidden sm:inline-flex" href="/book">
            <ShieldCheck className="mr-2" size={16} aria-hidden />
            Book
          </Button>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

const links = [
  { href: "/cuts", label: "Truss The Cuts" },
  { href: "/care", label: "Truss The Care" },
  { href: "/book", label: "Book" },
  { href: "/auth/login", label: "Login" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink-soft/35">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-3xl text-cream">Christian Truss</p>
          <p className="mt-3 max-w-xl text-sm text-cream/58">
            A premium destination for master barbering, practical self-care, and
            community-led confidence.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-cream/68 md:justify-end">
          {links.map((link) => (
            <Link key={link.href} className="hover:text-gold" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { marketStats } from "@/lib/content";

export function MarketStats() {
  return (
    <section className="border-y border-gold/20 bg-ink-soft/45 py-8">
      <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {marketStats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-4xl text-gold">{stat.value}</p>
            <p className="mt-1 text-sm text-cream/58">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

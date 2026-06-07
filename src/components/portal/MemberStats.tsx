import { memberStats } from "@/lib/member-portal";

export function MemberStats() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {memberStats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-gold/20 bg-cream/5 p-4">
          <p className="eyebrow text-cream/42">{stat.label}</p>
          <p className="mt-2 font-serif text-4xl leading-none text-gold">{stat.value}</p>
          <p className="mt-2 text-xs text-cream/54">{stat.helper}</p>
        </div>
      ))}
    </div>
  );
}

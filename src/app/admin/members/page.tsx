import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Admin Members",
};

const members = [
  ["Marcus Reed", "cuts_monthly", "active"],
  ["Andre Lewis", "vip_annual", "active"],
  ["James Carter", "care_monthly", "past_due"],
];

export default function AdminMembersPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Members</p>
      <h1 className="page-title mt-3 text-cream">Subscriptions and manual overrides.</h1>
      <div className="mt-6 grid gap-3">
        {members.map(([name, plan, status]) => (
          <Card key={name} className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div>
              <p className="font-serif text-2xl text-cream">{name}</p>
              <p className="text-sm text-cream/55">{plan}</p>
            </div>
            <span className="eyebrow w-fit rounded border border-gold/30 px-3 py-1 text-gold">
              {status}
            </span>
            <p className="text-sm text-cream/55">Stripe synced</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

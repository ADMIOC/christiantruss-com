import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Admin",
};

const stats = [
  ["Today's bookings", "4"],
  ["Pending comments", "7"],
  ["Active members", "128"],
  ["Draft posts", "5"],
];

export default function AdminPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Operations</p>
      <h1 className="page-title mt-3 text-cream">Admin dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => (
          <Card key={label}>
            <p className="eyebrow text-cream/45">{label}</p>
            <p className="mt-3 font-serif text-5xl text-gold">{value}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <h2 className="font-serif text-2xl text-cream">Today&apos;s operating focus</h2>
        <p className="mt-3 text-cream/60">
          Confirm pending bookings, approve useful comments, and draft one Cuts angle
          plus one Care angle before the next publishing window.
        </p>
      </Card>
    </div>
  );
}

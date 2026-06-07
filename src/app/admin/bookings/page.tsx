import { Card } from "@/components/ui/Card";
import { services } from "@/lib/content";

export const metadata = {
  title: "Admin Bookings",
};

export default function AdminBookingsPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Booking management</p>
      <h1 className="page-title mt-3 text-cream">Appointments and status.</h1>
      <div className="mt-6 grid gap-3">
        {services.map((service, index) => (
          <Card key={service.key} className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div>
              <p className="font-serif text-2xl text-cream">{service.name}</p>
              <p className="text-sm text-cream/55">
                Client #{index + 1} / {service.duration}
              </p>
            </div>
            <span className="eyebrow w-fit rounded border border-gold/30 px-3 py-1 text-gold">
              pending
            </span>
            <p className="text-sm text-cream/55">Notes ready for Supabase sync</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/content";
import type { ServiceKey } from "@/types/booking";

export function BookingConfirmation({
  serviceKey,
  bookingId,
}: {
  serviceKey?: string | null;
  bookingId?: string | null;
}) {
  const service = services.find((item) => item.key === serviceKey) || services[0];

  return (
    <Card className="mx-auto max-w-2xl text-center">
      <CheckCircle className="mx-auto text-gold" size={44} aria-hidden />
      <p className="eyebrow mt-5 text-gold">Booking request received</p>
      <h1 className="page-title mt-3 text-cream">{service.name}</h1>
      <p className="mt-4 text-cream/65">
        Christian&apos;s booking system has your request. A confirmation email is sent
        automatically once Brevo credentials are configured.
      </p>
      <p className="mt-4 text-sm text-cream/45">Reference: {bookingId || "demo"}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button href="/portal/appointments">View Appointments</Button>
        <Button href="/blog" variant="secondary">
          Read Field Notes
        </Button>
      </div>
    </Card>
  );
}

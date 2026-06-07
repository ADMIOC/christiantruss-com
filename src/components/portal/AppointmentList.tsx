import { CalendarClock, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { memberAppointments } from "@/lib/member-portal";

export function AppointmentList({ compact = false }: { compact?: boolean }) {
  const appointments = compact ? memberAppointments.slice(0, 2) : memberAppointments;

  return (
    <div className="grid gap-3">
      {appointments.map((appointment) => (
        <Card key={appointment.id}>
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-gold">{appointment.status}</p>
              <h2 className="mt-2 font-serif text-2xl text-cream">{appointment.service}</h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-cream/55">
                <CalendarClock size={16} aria-hidden />
                {appointment.date} / {appointment.time} / {appointment.price}
              </p>
              <p className="mt-3 text-sm text-cream/58">{appointment.notes}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href="/book" variant="secondary">
                <RotateCcw className="mr-2" size={15} aria-hidden />
                Reschedule
              </Button>
              <Button href="/portal/appointments" variant="ghost">
                <XCircle className="mr-2" size={15} aria-hidden />
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

import { Card } from "@/components/ui/Card";

const appointments = [
  { service: "Signature Truss Experience", date: "June 18, 2026", status: "pending" },
  { service: "Classic Cut", date: "May 30, 2026", status: "completed" },
];

export function AppointmentList() {
  return (
    <div className="grid gap-3">
      {appointments.map((appointment) => (
        <Card key={`${appointment.service}-${appointment.date}`} className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-2xl text-cream">{appointment.service}</h2>
            <p className="text-sm text-cream/55">{appointment.date}</p>
          </div>
          <span className="eyebrow w-fit rounded border border-gold/30 px-3 py-1 text-gold">
            {appointment.status}
          </span>
        </Card>
      ))}
    </div>
  );
}

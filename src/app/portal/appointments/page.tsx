import { AppointmentList } from "@/components/portal/AppointmentList";

export const metadata = {
  title: "Appointments",
};

export default function PortalAppointmentsPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Appointments</p>
      <h1 className="page-title mt-3 text-cream">History and upcoming visits.</h1>
      <p className="mt-3 max-w-2xl text-sm text-cream/58">
        Review upcoming sessions, reference Christian&apos;s notes, and start a
        reschedule or cancellation request.
      </p>
      <div className="mt-6">
        <AppointmentList />
      </div>
    </div>
  );
}

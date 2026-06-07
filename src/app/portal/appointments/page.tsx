import { AppointmentList } from "@/components/portal/AppointmentList";

export const metadata = {
  title: "Appointments",
};

export default function PortalAppointmentsPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Appointments</p>
      <h1 className="page-title mt-3 text-cream">History and upcoming visits.</h1>
      <div className="mt-6">
        <AppointmentList />
      </div>
    </div>
  );
}

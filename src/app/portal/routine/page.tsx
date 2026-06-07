import { RoutineTracker } from "@/components/portal/RoutineTracker";
import { Card } from "@/components/ui/Card";
import { memberProfile } from "@/lib/member-portal";

export const metadata = {
  title: "Care Plan",
};

export default function PortalRoutinePage() {
  return (
    <div className="grid gap-6">
      <div>
        <p className="eyebrow text-gold">Care plan</p>
        <h1 className="page-title mt-3 text-cream">Daily standards and weekly audits.</h1>
        <p className="mt-3 max-w-2xl text-sm text-cream/58">
          A subscriber routine that connects the chair to everyday maintenance.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <RoutineTracker />
        <Card>
          <p className="eyebrow text-gold">Current focus</p>
          <h2 className="mt-3 font-serif text-2xl text-cream">{memberProfile.careGoal}</h2>
          <p className="mt-3 text-sm text-cream/58">{memberProfile.barberNotes}</p>
          <div className="mt-6 rounded border border-gold/20 bg-ink/40 p-4">
            <p className="eyebrow text-cream/42">Next review</p>
            <p className="mt-2 text-sm text-cream/68">
              Review progress at the next Signature Truss Experience and adjust the
              weekly routine.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

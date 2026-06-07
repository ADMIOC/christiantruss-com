import { AppointmentList } from "@/components/portal/AppointmentList";
import { MemberHeader } from "@/components/portal/MemberHeader";
import { MemberStats } from "@/components/portal/MemberStats";
import { MembershipStatus } from "@/components/portal/MembershipStatus";
import { ResourceLibrary } from "@/components/portal/ResourceLibrary";
import { RoutineTracker } from "@/components/portal/RoutineTracker";
import { Card } from "@/components/ui/Card";
import { memberProfile, recommendedNextActions } from "@/lib/member-portal";

export function MemberDashboard() {
  return (
    <div className="grid gap-6">
      <MemberHeader />
      <MemberStats />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="mb-3 font-serif text-2xl text-cream">Next appointments</h2>
          <AppointmentList compact />
        </div>
        <RoutineTracker compact />
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <MembershipStatus />
        <Card>
          <p className="eyebrow text-gold">Christian&apos;s notes</p>
          <h2 className="mt-3 font-serif text-2xl text-cream">Member context</h2>
          <p className="mt-3 text-sm text-cream/62">{memberProfile.barberNotes}</p>
          <div className="mt-5 grid gap-2">
            {recommendedNextActions.map((action) => (
              <div key={action} className="rounded border border-gold/15 bg-ink/35 px-3 py-2 text-sm text-cream/68">
                {action}
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="eyebrow text-gold">Continue learning</p>
            <h2 className="mt-2 font-serif text-2xl text-cream">Recommended resources</h2>
          </div>
        </div>
        <ResourceLibrary limit={4} showHeader={false} />
      </div>
    </div>
  );
}

import { BadgeCheck, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { memberProfile } from "@/lib/member-portal";

export function MemberHeader() {
  return (
    <div className="rounded-lg border border-gold/20 bg-[linear-gradient(135deg,rgba(184,149,74,0.18),rgba(247,244,239,0.04))] p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow text-gold">Subscriber portal</p>
          <h1 className="page-title mt-3 text-cream">Welcome back, {memberProfile.name}.</h1>
          <p className="mt-3 max-w-3xl text-sm text-cream/62">
            {memberProfile.careGoal}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded border border-gold/30 px-3 py-1.5 text-gold">
              <BadgeCheck size={16} aria-hidden />
              {memberProfile.plan}
            </span>
            <span className="inline-flex items-center gap-2 rounded border border-cream/15 px-3 py-1.5 text-cream/65">
              <CalendarDays size={16} aria-hidden />
              Member since {memberProfile.memberSince}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/book">Book Again</Button>
          <Button href="/portal/routine" variant="secondary">
            Care Plan
          </Button>
        </div>
      </div>
    </div>
  );
}

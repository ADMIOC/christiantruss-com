import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { memberProfile, membershipBenefits } from "@/lib/member-portal";

export function MembershipStatus({ detailed = false }: { detailed?: boolean }) {
  return (
    <Card>
      <p className="eyebrow text-gold">Membership</p>
      <h2 className="mt-3 font-serif text-3xl text-cream">{memberProfile.plan}</h2>
      <p className="mt-3 text-sm text-cream/58">
        Active subscriber access with billing scheduled for {memberProfile.nextBillingDate}.
      </p>
      {detailed ? (
        <div className="mt-5 grid gap-2">
          {membershipBenefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-cream/68">
              <CheckCircle2 className="text-teal-light" size={17} aria-hidden />
              {benefit}
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href="/api/stripe/portal" variant="secondary">
          Manage Billing
        </Button>
        <Button href="/portal/resources">Open Resources</Button>
      </div>
    </Card>
  );
}

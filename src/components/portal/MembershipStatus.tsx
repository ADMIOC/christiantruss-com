import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function MembershipStatus() {
  return (
    <Card>
      <p className="eyebrow text-gold">Membership</p>
      <h2 className="mt-3 font-serif text-3xl text-cream">VIP All-Access</h2>
      <p className="mt-3 text-sm text-cream/58">
        Billing status and customer portal links sync from Stripe once the customer
        profile is connected.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href="/api/stripe/portal" variant="secondary">
          Manage Billing
        </Button>
        <Button href="/portal/resources">Open Resources</Button>
      </div>
    </Card>
  );
}

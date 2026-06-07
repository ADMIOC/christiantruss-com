import { MembershipStatus } from "@/components/portal/MembershipStatus";

export const metadata = {
  title: "Membership",
};

export default function PortalMembershipPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Membership</p>
      <h1 className="page-title mt-3 text-cream">Plan, status, and billing.</h1>
      <p className="mt-3 max-w-2xl text-sm text-cream/58">
        Manage subscriber access, billing, and the benefits attached to the current
        plan.
      </p>
      <div className="mt-6 max-w-3xl">
        <MembershipStatus detailed />
      </div>
    </div>
  );
}

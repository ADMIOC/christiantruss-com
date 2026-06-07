import { MembershipStatus } from "@/components/portal/MembershipStatus";

export const metadata = {
  title: "Membership",
};

export default function PortalMembershipPage() {
  return (
    <div>
      <p className="eyebrow text-gold">Membership</p>
      <h1 className="page-title mt-3 text-cream">Plan, status, and billing.</h1>
      <div className="mt-6">
        <MembershipStatus />
      </div>
    </div>
  );
}

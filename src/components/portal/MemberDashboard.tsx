import { AppointmentList } from "@/components/portal/AppointmentList";
import { MembershipStatus } from "@/components/portal/MembershipStatus";
import { Card } from "@/components/ui/Card";
import { posts } from "@/lib/content";

export function MemberDashboard() {
  return (
    <div className="grid gap-5">
      <div>
        <p className="eyebrow text-gold">Dashboard</p>
        <h1 className="page-title mt-3 text-cream">Your cuts, care, and content.</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="mb-3 font-serif text-2xl text-cream">Appointments</h2>
          <AppointmentList />
        </div>
        <MembershipStatus />
      </div>
      <Card>
        <h2 className="font-serif text-2xl text-cream">Recent content</h2>
        <div className="mt-4 grid gap-3">
          {posts.slice(0, 2).map((post) => (
            <div key={post.id} className="border-t border-gold/15 pt-3">
              <p className="text-cream">{post.title}</p>
              <p className="text-sm text-cream/55">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

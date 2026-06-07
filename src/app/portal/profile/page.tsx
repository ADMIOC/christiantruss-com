import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { memberProfile } from "@/lib/member-portal";

export const metadata = {
  title: "Profile",
};

export default function PortalProfilePage() {
  return (
    <div>
      <p className="eyebrow text-gold">Profile</p>
      <h1 className="page-title mt-3 text-cream">Preferences and care context.</h1>
      <p className="mt-3 max-w-2xl text-sm text-cream/58">
        Keep contact details, grooming preferences, and care goals ready for the next
        appointment.
      </p>
      <Card className="mt-6 max-w-3xl">
        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input defaultValue={memberProfile.name} name="full_name" placeholder="Full name" />
            <Input name="phone" placeholder="Phone" />
          </div>
          <Input name="email" placeholder="Email address" type="email" />
          <Textarea
            defaultValue={memberProfile.careGoal}
            name="care_goal"
            placeholder="Care goal"
          />
          <Textarea
            defaultValue={memberProfile.barberNotes}
            name="barber_notes"
            placeholder="Grooming notes"
          />
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Save Profile</Button>
            <Button href="/portal" variant="secondary">
              Back to Dashboard
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

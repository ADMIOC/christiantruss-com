export type ProfileRole = "client" | "admin";

export type Profile = {
  id: string;
  full_name?: string | null;
  role: ProfileRole;
  avatar_url?: string | null;
  phone?: string | null;
  stripe_customer_id?: string | null;
  created_at: string;
};

export type Membership = {
  id: string;
  profile_id: string;
  stripe_subscription_id?: string | null;
  plan: "cuts_monthly" | "care_monthly" | "vip_annual";
  status: "active" | "cancelled" | "past_due";
  current_period_end?: string | null;
  created_at: string;
};

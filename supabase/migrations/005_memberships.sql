create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  stripe_subscription_id text unique,
  plan text check (plan in ('cuts_monthly', 'care_monthly', 'vip_annual')),
  status text check (status in ('active', 'cancelled', 'past_due')),
  current_period_end timestamptz,
  created_at timestamptz default now()
);

alter table public.memberships enable row level security;

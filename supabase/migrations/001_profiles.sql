create table if not exists public.profiles (
  id uuid references auth.users primary key,
  full_name text,
  role text default 'client' check (role in ('client', 'admin')),
  avatar_url text,
  phone text,
  stripe_customer_id text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

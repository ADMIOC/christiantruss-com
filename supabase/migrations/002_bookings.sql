create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.profiles(id),
  service text not null,
  date date not null,
  time_slot time not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  notes text,
  price_cents integer,
  created_at timestamptz default now()
);

alter table public.bookings enable row level security;

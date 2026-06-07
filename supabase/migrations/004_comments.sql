create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.posts(id) on delete cascade,
  author_name text not null,
  author_role text default 'visitor',
  body text not null,
  approved boolean default false,
  created_at timestamptz default now()
);

alter table public.comments enable row level security;

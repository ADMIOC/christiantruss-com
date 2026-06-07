create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body text,
  type text default 'blog' check (type in ('blog', 'vlog')),
  video_url text,
  thumbnail_url text,
  published boolean default false,
  published_at timestamptz,
  tags text[],
  created_at timestamptz default now()
);

alter table public.posts enable row level security;

create table if not exists public.social_drafts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  topic text not null,
  vertical text not null check (vertical in ('cuts', 'care', 'both')),
  tone text not null check (tone in ('educational', 'hype', 'personal', 'provocative')),
  content jsonb not null,
  created_at timestamptz default now()
);

alter table public.social_drafts enable row level security;

create policy "admins manage social drafts" on public.social_drafts
  for all using (public.is_admin()) with check (public.is_admin());

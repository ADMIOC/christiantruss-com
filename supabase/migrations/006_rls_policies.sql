create policy "profiles can read own row" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles can update own row" on public.profiles
  for update using (auth.uid() = id);

create policy "bookings clients read own rows" on public.bookings
  for select using (auth.uid() = client_id);

create policy "bookings clients insert own rows" on public.bookings
  for insert with check (auth.uid() = client_id or client_id is null);

create policy "published posts are public" on public.posts
  for select using (published = true);

create policy "comments public insert" on public.comments
  for insert with check (true);

create policy "approved comments are public" on public.comments
  for select using (approved = true);

create policy "memberships clients read own rows" on public.memberships
  for select using (auth.uid() = profile_id);

create function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create policy "admins manage profiles" on public.profiles
  for all using (public.is_admin()) with check (public.is_admin());

create policy "admins manage bookings" on public.bookings
  for all using (public.is_admin()) with check (public.is_admin());

create policy "admins manage posts" on public.posts
  for all using (public.is_admin()) with check (public.is_admin());

create policy "admins manage comments" on public.comments
  for all using (public.is_admin()) with check (public.is_admin());

create policy "admins manage memberships" on public.memberships
  for all using (public.is_admin()) with check (public.is_admin());

insert into public.posts (slug, title, excerpt, body, type, published, tags)
values
  ('why-your-fade-fades', 'Why Your Fade Fades: The Science Behind the Perfect Cut', 'A practical breakdown of shape, growth pattern, and upkeep.', 'Placeholder MDX body for Christian to edit.', 'blog', false, array['cuts','education']),
  ('self-care-rituals-every-man-should-own', '5 Self-Care Rituals Every Man Should Own', 'Simple routines that compound into confidence.', 'Placeholder MDX body for Christian to edit.', 'blog', false, array['care','routine']),
  ('what-master-barbering-actually-means', 'Truss The Cuts: What Master Barbering Actually Means', 'Craft is more than a clean line.', 'Placeholder MDX body for Christian to edit.', 'blog', false, array['cuts','craft']),
  ('client-transformation-60-minutes', 'Watch Me Transform a Client in 60 Minutes', 'A full service walk-through from consultation to finish.', 'Placeholder vlog description.', 'vlog', false, array['cuts','vlog']),
  ('morning-self-care-routine', 'My Morning Self-Care Routine (Full Breakdown)', 'Christian breaks down the daily care routine.', 'Placeholder vlog description.', 'vlog', false, array['care','vlog'])
on conflict (slug) do nothing;

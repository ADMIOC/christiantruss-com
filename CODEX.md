# ChristianTruss.com Build Notes

This repository implements the Phase 2 build spec from `ChristianTruss - CODEX_KICKOFF.md`.

Primary constraints:
- Next.js App Router with TypeScript and Tailwind.
- Dark editorial luxury barber and wellness brand direction.
- Supabase-backed auth, content, bookings, comments, memberships, and social drafts.
- Stripe checkout and webhook integrations.
- Brevo transactional email helpers.
- Bunny.net media helper placeholders.
- Anthropic social content generator.

External service credentials are intentionally env-gated. Local development renders without live credentials, while API routes return clear setup errors when required secrets are missing.

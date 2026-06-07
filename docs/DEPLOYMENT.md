# Deployment

1. Create Supabase project and run migrations in `supabase/migrations`.
2. Create Stripe products and webhook endpoint.
3. Add all `.env.example` variables to Vercel.
4. Connect GitHub repo `ADMIOC/christiantruss-com` to Vercel.
5. Deploy the main branch.
6. Add `christiantruss.com` as the custom domain in Vercel.
7. Update DNS records at the domain provider using Vercel's provided values.
8. Confirm `/sitemap.xml`, `/robots.txt`, `/api/stripe/webhook`, and `/og-image` respond in production.
9. Run Lighthouse on mobile and desktop after the custom domain resolves.

External deploy and DNS steps require account access and live credentials.

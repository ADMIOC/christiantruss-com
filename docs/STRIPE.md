# Stripe Setup

Create these products and place the Price IDs in `.env.local` and Vercel:

- Truss The Cuts Monthly: `$29/mo` -> `STRIPE_CUTS_MONTHLY_PRICE_ID`
- Truss The Care Monthly: `$39/mo` -> `STRIPE_CARE_MONTHLY_PRICE_ID`
- VIP All-Access Annual: `$497/yr` -> `STRIPE_VIP_ANNUAL_PRICE_ID`
- 1:1 Care Consultation: `$149` -> `STRIPE_CONSULT_PRICE_ID`
- Master Cuts Course: `$197` -> `STRIPE_CUTS_COURSE_PRICE_ID`

Webhook endpoint:

`/api/stripe/webhook`

Events:
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_failed`

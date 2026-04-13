# FoxSocial — Claude Code Build Context
## Last Updated: April 12, 2026

---

## Project Overview

| Field | Value |
|---|---|
| Project name | FoxSocial |
| Purpose | Marketing site + Stripe checkout for Content OS subscriptions |
| Live URL | https://foxsocial.ca (custom domain live) |
| GitHub | Foxmortgage2020/foxsocial |
| Vercel project | michaels-projects-7685fd8d/foxsocial |
| Deploy | Auto-deploy on push to `main` branch |

FoxSocial is the public-facing marketing and payment site. No authentication, no user portal, no database. Stripe handles payments, then a webhook provisions the subscriber's account in the Content OS product at `app.foxmortgage.ca`.

---

## Stack

| Technology | Version / Detail |
|---|---|
| Next.js | 14.2.5 |
| TypeScript | 5.x |
| Tailwind CSS | 3.x |
| Stripe | `stripe` npm package (server-side only) |
| Fonts | Syne (display/headlines) + DM Sans (body) via `next/font/google` |
| Auth | None — public marketing site only |
| Hosting | Vercel — auto-deploy on push to main |

---

## Brand

| Token | Value |
|---|---|
| Primary orange | `#FF6B2B` |
| Orange hover | `#e85a1e` |
| Orange dim | `rgba(255, 107, 43, 0.12)` |
| Orange glow | `rgba(255, 107, 43, 0.35)` |
| Black / dark bg | `#080A0F` |
| Dark sections | `#0E1117` |
| Card background | `#13171F` |
| Border | `rgba(255, 255, 255, 0.08)` |
| White | `#F5F4F0` |
| Muted text | `rgba(245, 244, 240, 0.55)` |
| Display font | Syne (Google Fonts) — all headlines, plan names, section titles |
| Body font | DM Sans (Google Fonts) — all body copy, descriptions, form labels |

**Never use Fox Mortgage green (`#95D600`) or navy (`#032133`) on this site.** FoxSocial uses orange (`#FF6B2B`) as its sole accent color.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Main landing page (all sections) |
| `/support` | FAQ accordion + contact form (required for Stripe business review) |
| `/privacy` | PIPEDA-compliant privacy policy (2802551 Ontario Inc.) |
| `/terms` | Terms of service (Ontario governing law) |
| `/welcome` | Post-Stripe-checkout success page with next steps |

---

## File Structure

```
src/
  app/
    layout.tsx              — Root layout with Syne + DM Sans fonts, metadata
    page.tsx                — Main page composing all section components
    globals.css             — Tailwind directives, animations
    welcome/page.tsx        — Post-checkout success page
    support/page.tsx        — FAQ + contact form
    privacy/page.tsx        — Privacy policy
    terms/page.tsx          — Terms of service
    api/
      checkout/route.ts     — POST: creates Stripe Checkout session
      checkout/session/route.ts — GET: retrieves session for welcome page
      webhook/stripe/route.ts   — POST: Stripe webhook handler
      beta-signup/route.ts      — POST: beta form submissions
      support-contact/route.ts  — POST: support form submissions
  components/
    FadeUp.tsx, FoxLogo.tsx, Navbar.tsx, Hero.tsx, Ticker.tsx,
    HowItWorks.tsx, Credibility.tsx, Industries.tsx,
    Pricing.tsx, BetaForm.tsx, Footer.tsx
```

---

## Pricing — 4 Plans

| Plan | Beta Monthly | Beta Annual | Full Monthly | Full Annual | Platforms |
|---|---|---|---|---|---|
| Essential | $37/mo | $31/mo ($372/yr) | $97/mo | $81/mo ($972/yr) | LinkedIn only |
| Growth | $97/mo | $81/mo ($972/yr) | $197/mo | $164/mo ($1,968/yr) | LinkedIn + IG + TikTok |
| Signature | $147/mo | $122/mo ($1,464/yr) | $297/mo | $247/mo ($2,964/yr) | All platforms |
| Enterprise | $77/seat/mo | $64/seat/mo ($768/seat/yr) | $147/seat/mo | $122/seat/mo ($1,464/seat/yr) | Per seat, 3 min |

- Annual = 20% discount (toggle on pricing page)
- Beta/Regular toggle (beta = founding member rates, locked for life)
- Enterprise has seat selector (3–10 seats, dynamic pricing)
- All plans: $147 one-time onboarding fee on first invoice
- Growth plan marked "Most popular" with orange badge

---

## Stripe Integration

### Checkout Flow
1. User clicks plan button → `POST /api/checkout` with `{ planKey, tier, period, planName, quantity }`
2. Server resolves price ID from `STRIPE_PRICE_*` env vars via `resolvePriceId()`
3. Stripe Checkout opens with plan subscription + onboarding fee line items
4. Success → `/welcome?session_id={CHECKOUT_SESSION_ID}`
5. Stripe webhook fires → `POST /api/webhook/stripe`
6. Webhook forwards to `https://app.foxmortgage.ca/api/internal/provision-subscriber`

### Price ID Resolution (server-side only)
No price IDs are hardcoded in client-side code. The checkout API maps `planKey_tier_period` → env var:

```
essential_beta_monthly    → STRIPE_PRICE_ESSENTIAL_BETA_MONTHLY
essential_regular_monthly → STRIPE_PRICE_ESSENTIAL_MONTHLY
growth_beta_annual        → STRIPE_PRICE_GROWTH_BETA_ANNUAL
... (16 combinations total)
```

To switch between test/live Stripe accounts, change env vars only — zero code changes.

### Environment Variables (Vercel)

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

STRIPE_PRICE_ONBOARDING_FEE=price_1TLAE5JDc6IlYEtZhhCeqqKc

STRIPE_PRICE_ESSENTIAL_BETA_MONTHLY=price_1TLA9jJDc6IlYEtZgZtkMCBK
STRIPE_PRICE_ESSENTIAL_MONTHLY=price_1TLSETJDc6IlYEtZFulWIB6M
STRIPE_PRICE_ESSENTIAL_BETA_ANNUAL=price_1TLTfFJDc6IlYEtZRDku3io8
STRIPE_PRICE_ESSENTIAL_ANNUAL=price_1TLTSCJDc6IlYEtZZ4SFdWzm

STRIPE_PRICE_GROWTH_BETA_MONTHLY=price_1TLABkJDc6IlYEtZnctFbNCZ
STRIPE_PRICE_GROWTH_MONTHLY=price_1TLTVJJDc6IlYEtZz2vlE2Rm
STRIPE_PRICE_GROWTH_BETA_ANNUAL=price_1TLTUxJDc6IlYEtZ954H4LFR
STRIPE_PRICE_GROWTH_ANNUAL=price_1TLTVpJDc6IlYEtZhOmKdCg9

STRIPE_PRICE_SIGNATURE_BETA_MONTHLY=price_1TLTblJDc6IlYEtZzdn6Yoj3
STRIPE_PRICE_SIGNATURE_MONTHLY=price_1TLTcaJDc6IlYEtZpj1cvRT5
STRIPE_PRICE_SIGNATURE_BETA_ANNUAL=price_1TLTcGJDc6IlYEtZgCArQsf1
STRIPE_PRICE_SIGNATURE_ANNUAL=price_1TLTcxJDc6IlYEtZpFCV1REF

STRIPE_PRICE_ENTERPRISE_BETA_MONTHLY=price_1TLTeWJDc6IlYEtZvdtXFaiZ
STRIPE_PRICE_ENTERPRISE_MONTHLY=price_1TLTeqJDc6IlYEtZfxxRbFJm
STRIPE_PRICE_ENTERPRISE_BETA_ANNUAL=price_1TLTfFJDc6IlYEtZRDku3io8
STRIPE_PRICE_ENTERPRISE_ANNUAL=price_1TLTfeJDc6IlYEtZCaMjvFsO

INTERNAL_PROVISION_SECRET=<shared with app repo>
```

**NOTE:** Stripe account is currently in review (2–3 days). Test mode keys are active. Live keys ready to swap once review completes.

### Webhook Configuration

| Field | Value |
|---|---|
| URL | `https://www.foxsocial.ca/api/webhook/stripe` |
| Event | `checkout.session.completed` |
| Signing secret | Set as `STRIPE_WEBHOOK_SECRET` in Vercel |

**IMPORTANT:** Must use `www.foxsocial.ca` not `foxsocial.ca` — the bare domain returns a 308 redirect to `www` which Stripe will not follow.

---

## Email

| Field | Value |
|---|---|
| Sending domain | `foxsocial.ca` (verified in Resend, April 12, 2026) |
| From address | `hello@foxsocial.ca` |
| Admin notifications | `mfox@foxmortgage.ca` |
| Provider | Resend (via app.foxmortgage.ca provision endpoint) |

---

## DNS (GoDaddy)

- `A` record `@` → `76.76.21.21` (Vercel)
- `CNAME` `www` → `cname.vercel-dns.com` (Vercel)
- SPF, DKIM, MX records added for Resend email sending

---

## Key Links

| Link | Destination |
|---|---|
| "Sign in" nav link | `https://app.foxmortgage.ca/sign-in` |
| "Get early access" buttons | `#beta` (same page scroll) |
| "Learn more at FoxSocial" | Shown on Content OS sign-in page |
| Privacy / Terms / Contact | `/privacy`, `/terms`, `/support` |

---

## Relationship to Other Repos

| Repo | Domain | Purpose |
|---|---|---|
| **Foxmortgage2020/foxsocial** (this repo) | foxsocial.ca | Marketing site + Stripe checkout. No auth. |
| **Foxmortgage2020/app** | app.foxmortgage.ca | Content OS product. Clerk auth, Supabase, subscriber provisioning. |
| **Foxmortgage2020/foxmortgage-ca** | foxmortgage.ca | Fox Mortgage business portal. Completely separate. |

---

## Pending

- [ ] Stripe business review completion → swap test keys to live keys
- [ ] `app.foxmortgage.ca` → `app.foxsocial.ca` migration (Clerk domains, Vercel, all URL references)
- [ ] Wire beta form submissions to Resend + Zoho CRM via n8n webhook
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Update beta spot count dynamically (currently hardcoded "15 spots")
- [ ] Fix Vercel domain redirect (`foxsocial.ca` → `www.foxsocial.ca` issue)
- [ ] Add Open Graph image for social sharing
- [ ] Update this CLAUDE.md after each session

---

## What NOT To Do

- **Never hardcode Stripe price IDs** in client-side code — all IDs resolve from env vars server-side
- **Never use `foxsocial.ca` (without www)** for webhook URLs — it redirects and Stripe won't follow
- **Never add Clerk or any auth** to this repo — it is a public marketing site only
- **Never use Fox Mortgage green (`#95D600`) or navy (`#032133`)**
- **Never add a database** — signups and payments go through API routes to external services

---

## Session Update — April 12, 2026 (Evening)

### Pricing Page Rebuilt
4 plans: Essential, Growth, Signature, Enterprise. Monthly/Annual toggle (20% annual discount). Beta/Regular pricing toggle (default: Beta). Enterprise seat selector (3–10 seats, dynamic pricing). All price IDs moved server-side — zero hardcoded price IDs in client code. `Pricing.tsx` sends `{ planKey, tier, period }` to `/api/checkout` which resolves price ID from env vars via `PRICE_MAP`.

### Stripe Checkout Architecture
- Client sends: `{ planKey, tier, period, planName, quantity }`
- Server resolves price ID from `PRICE_MAP` env var lookup (16 combinations)
- Checkout creates: subscription line item + $147 onboarding fee
- On success: redirects to `/welcome?session_id=...`
- Webhook: `https://www.foxsocial.ca/api/webhook/stripe`
- **IMPORTANT:** Must use `www.foxsocial.ca` not `foxsocial.ca` — bare domain 308 redirects to `www` and Stripe won't follow.

### Stripe Status
- Account under review (2–3 days from April 12)
- Currently using test mode keys
- Test prices created for Essential Beta ($37) and Onboarding Fee ($147)
- Live price IDs all created and in Vercel env vars
- When review completes: swap `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to live values

### End-to-End Test — PASSED (April 12, 10:06 PM)
Test subscriber "Wayne Gretzky" (`hello@foxsocial.ca`):
- Stripe Checkout completed ✅
- Welcome page rendered with name + plan ✅
- Welcome email from `hello@foxsocial.ca` ✅
- Admin notification to `mfox@foxmortgage.ca` ✅
- Clerk user created automatically ✅
- Supabase `agent_profiles` row created ✅

### Resend — foxsocial.ca Verified
- Verified April 12, 2026 at 9:58 PM
- SPF TXT, DKIM TXT, SPF MX all validated
- From address: `hello@foxsocial.ca`
- All system emails now send from `hello@foxsocial.ca`

### Legal Pages Live
- `/support` — FAQ accordion + contact form
- `/privacy` — PIPEDA-compliant, 2802551 Ontario Inc.
- `/terms` — Ontario governing law
- All three submitted to Stripe for business review

### DNS Confirmed
- `foxsocial.ca`: A `@` → `76.76.21.21` ✅
- `www.foxsocial.ca`: CNAME → `cname.vercel-dns.com` ✅
- Resend: SPF, DKIM, MX records added ✅

### Pending
- [ ] Stripe business review → swap to live keys
- [ ] `app.foxmortgage.ca` → `app.foxsocial.ca` migration
- [ ] `hello@foxsocial.ca` email forwarding in GoDaddy
- [ ] Wire beta form to Resend + Zoho CRM

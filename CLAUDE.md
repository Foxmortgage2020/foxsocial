# FoxSocial — Claude Code Build Context
## Last Updated: April 11, 2026 (Content OS product context added)

---

## Project Overview

| Field | Value |
|---|---|
| Project name | FoxSocial |
| Purpose | Marketing and beta signup landing page for the Content OS product |
| Live URL | https://foxsocial-five.vercel.app |
| Target domain | foxsocial.ca (not yet connected) |
| GitHub | Foxmortgage2020/foxsocial |
| Vercel project | michaels-projects-7685fd8d/foxsocial |
| Deploy | Auto-deploy on push to `main` branch |

FoxSocial is a public-facing marketing site. It has no authentication, no user portal, and no database. Its only interactive feature is a beta signup form that POSTs to a local API route.

---

## Stack

| Technology | Version / Detail |
|---|---|
| Next.js | 14.2.5 |
| TypeScript | 5.x |
| Tailwind CSS | 3.x |
| Fonts | Syne (display/headlines) + DM Sans (body) via `next/font/google` |
| Auth | None — public marketing site only |
| Hosting | Vercel — auto-deploy on push to main |
| Node | 18+ (Vercel default) |

**No external services:** No database, no CRM integration, no analytics (yet). The beta signup API route saves to a local JSON file and logs to console.

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

**Never use Fox Mortgage green (`#95D600`) or navy (`#032133`) on this site.** Those belong to the Content OS product at `app.foxmortgage.ca` only. FoxSocial uses orange (`#FF6B2B`) as its sole accent color.

Logo: Geometric fox head SVG in `#FF6B2B` + "FoxSocial" wordmark in Syne bold. Defined in `src/components/FoxLogo.tsx`.

---

## File Structure

```
src/
  app/
    layout.tsx          — Root layout with Syne + DM Sans fonts, metadata
    page.tsx            — Main page composing all section components
    globals.css         — Tailwind directives, dot grid, fade-up animations, ticker, pulse-dot
    api/
      beta-signup/
        route.ts        — POST handler for beta signups
  components/
    FadeUp.tsx          — Intersection Observer scroll animation wrapper
    FoxLogo.tsx         — SVG fox head logo component
    Navbar.tsx          — Sticky nav with mobile hamburger (client component)
    Hero.tsx            — Hero section with dot grid, glow, badge, CTAs
    Ticker.tsx          — Infinite scroll marquee
    HowItWorks.tsx      — 3 step cards + 7-step pipeline bar
    Credibility.tsx     — Founder quote + 3 stat boxes
    Industries.tsx      — 3x2 industry card grid
    Pricing.tsx         — 4-tier pricing grid
    BetaForm.tsx        — Beta signup form (client component)
    Footer.tsx          — Footer with logo, links, copyright
data/
  signups.json          — Local signup storage (gitignored on Vercel — read-only filesystem)
tailwind.config.ts      — Brand colors, fonts, ticker animation keyframes
```

---

## Page Sections

All sections live in `src/app/page.tsx` as composed components. Anchor IDs: `#how`, `#industries`, `#pricing`, `#beta`.

### 1. Navigation (`Navbar.tsx`)
- Sticky top, white background, backdrop blur on scroll
- Logo left: fox icon + "FoxSocial" wordmark
- Center links: How it works (`#how`) · Pricing (`#pricing`) · Industries (`#industries`)
- Right: "Sign in" ghost link → `https://app.foxmortgage.ca/sign-in` (same tab)
- Right: "Get early access" filled orange button → `#beta`
- Mobile: hamburger menu collapses all links

### 2. Hero (`Hero.tsx`)
- Full viewport height, white background, centered
- Dot grid SVG pattern at low opacity
- Soft orange radial glow behind headline
- Pill badge: pulsing orange dot + "Beta registration open"
- H1 (Syne): "Your content. On autopilot."
- Subheadline (DM Sans): describes the product
- Two CTAs: "Get early access" (orange filled → `#beta`) + "See how it works" (outline → `#how`)
- Trust bar: 4 items dot-separated

### 3. Ticker (`Ticker.tsx`)
- Dark `#0E1117` background, white text, orange separator dots
- Infinite CSS marquee animation (`animate-scroll-left`, 30s loop)
- Items: Content research · AI scoring · Script generation · Carousel creation · Voice cloning · Video drafts · Auto-scheduling · Multi-platform publishing · Analytics tracking
- Pauses on hover

### 4. How It Works (`HowItWorks.tsx`, `id="how"`)
- Section label (orange small caps): "How it works"
- H2: "We handle 95% of it. You do the other 5%."
- 3-column step cards with icons, descriptions, and tags ("Automated" or "~10 min")
- 7-step pipeline bar (dark card bg): Content Research → Script + Caption → Metricool Draft → Email to You → ElevenLabs Voice → HeyGen Video → Published
  - Steps 1-4 and 7: orange "Auto" pill
  - Steps 5-6: gray "You" pill
- Italic callout about voice clone and avatar

### 5. Credibility (`Credibility.tsx`)
- Light gray `#F7F7F5` background
- Bold statement + founder pull quote (italic)
- 3 stat boxes: "43 active workflows" · "10+ industries" · "~$0.05 per video post"

### 6. Industries (`Industries.tsx`, `id="industries"`)
- Section label: "Who it's for"
- H2: "Built for professionals who can't afford to disappear."
- 3x2 grid of cards: Mortgage & Finance · Real Estate · Legal & Professional · Healthcare & Wellness · Insurance · Coaches & Consultants
- Each card: Heroicon SVG + name + 1-line description

### 7. Pricing (`Pricing.tsx`, `id="pricing"`)
- Dark `#0E1117` background
- Section label (orange): "Beta pricing"
- H2 (white): "Locked-in rates. For life."
- 4 plan cards side by side (see Pricing section below)
- Growth plan: orange border + "Most popular" badge
- All CTA buttons scroll to `#beta`
- Footer note: "$147 onboarding fee. Beta pricing locked for life."

### 8. Beta Signup Form (`BetaForm.tsx`, `id="beta"`)
- Dark `#080A0F` background, centered max 600px
- Scarcity line: "Only 15 beta spots available."
- H2: "Join the beta. Lock in your rate."
- Form fields: First Name + Last Name (side by side), Work Email, Industry dropdown
- Submit: "Get early access →" orange filled button
- POST to `/api/beta-signup`
- Success state: green check + "You're on the list" confirmation
- Error state: red text retry message

### 9. Footer (`Footer.tsx`)
- Dark `#0E1117` background
- Left: FoxSocial logo + tagline
- Right: Privacy · Terms · Contact (placeholder `href="#"`)
- Bottom: "© 2026 FoxSocial. All rights reserved." + "Built in Canada"

---

## Pricing (Beta — Locked for Life)

| Plan | Beta Price | Full Price | Platforms | Featured |
|---|---|---|---|---|
| Solo | $40/mo | $97/mo | LinkedIn only | No |
| Starter | $75/mo | $175/mo | 2 platforms | No |
| Growth | $120/mo | $297/mo | 3 platforms | Yes (orange border + badge) |
| Scale | $150/mo | $397/mo | All platforms + YouTube | No |

All plans include a one-time **$147 onboarding fee**. Beta pricing is locked for the lifetime of the account.

---

## API Routes

### POST `/api/beta-signup`

**File:** `src/app/api/beta-signup/route.ts`

**Request body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "industry": "Mortgage | Real Estate | Legal | Healthcare | Insurance | Coaching | Other"
}
```

**Behavior:**
1. Validates all fields present
2. Logs signup to console
3. Appends to `data/signups.json` (fails silently on Vercel read-only filesystem)
4. Returns `{ success: true, message: "Signup recorded" }`

**TODO:** Wire to Resend for email notification to `michael@app.foxmortgage.ca`
**TODO:** Wire to Zoho CRM via n8n webhook for lead tracking

---

## Key Links

| Link | Destination | Context |
|---|---|---|
| "Sign in" nav link | `https://app.foxmortgage.ca/sign-in` | Content OS product login (separate repo: Foxmortgage2020/app) |
| "Get early access" buttons | `#beta` (same page scroll) | Beta signup form |
| "See how it works" button | `#how` (same page scroll) | How it works section |
| "Learn more at FoxSocial" | `https://foxsocial.ca` | Shown on Content OS sign-in page left panel |
| Privacy / Terms / Contact | `#` (placeholder) | Footer links — not yet built |

---

## Relationship to Other Repos

| Repo | Domain | Purpose |
|---|---|---|
| **Foxmortgage2020/foxsocial** (this repo) | foxsocial.ca / foxsocial-five.vercel.app | Marketing site + beta signup. No auth. |
| **Foxmortgage2020/app** | app.foxmortgage.ca | Content OS product. Clerk auth, Supabase, Zoho Creator, n8n integrations. FoxSocial "Sign in" links here. |
| **Foxmortgage2020/foxmortgage-ca** | foxmortgage.ca | Fox Mortgage business portal (realtor, investor, FP portals). Completely separate from FoxSocial. |

---

## Animations

- **Fade-up:** All sections use `FadeUp.tsx` wrapper — Intersection Observer triggers CSS transition (`opacity 0→1`, `translateY 32px→0`) when element enters viewport. Supports `delay` prop for staggered entry.
- **Ticker:** Infinite CSS marquee via `animate-scroll-left` keyframe (30s linear loop). Pauses on hover.
- **Pulsing dot:** Beta badge uses `pulse-dot` keyframe animation (2s ease-in-out infinite).

---

## Next Steps / Known TODOs

- [ ] Connect `foxsocial.ca` custom domain in Vercel dashboard
- [ ] Wire `/api/beta-signup` to Resend email notifications (notify `michael@app.foxmortgage.ca`)
- [ ] Wire `/api/beta-signup` to Zoho CRM via n8n webhook for lead tracking
- [ ] Add Privacy page at `/privacy`
- [ ] Add Terms page at `/terms`
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Update beta spot count as signups come in (currently hardcoded "15 spots" in `BetaForm.tsx`)
- [ ] Add Open Graph image for social sharing
- [ ] Add favicon (currently using Next.js default)
- [ ] Update this CLAUDE.md after each session

---

## What NOT To Do

- **Never add Clerk or any auth** to this repo — it is a public marketing site only
- **Never use Fox Mortgage green (`#95D600`) or navy (`#032133`)** — those are Content OS product colors
- **Never hardcode pricing** without updating this CLAUDE.md file
- **Never add realtor/investor/FP portal routes** — those live in the foxmortgage-ca repo only
- **Never add a database** — signups go through the API route to external services (Resend, Zoho)
- **Never reference `$env` variables** — there are none; this is a static marketing site with one API route

---

## Content OS — The Product FoxSocial Sells

FoxSocial is the marketing site. **Content OS** is the product. When a beta client signs up via FoxSocial, they are onboarded into the Content OS platform at `app.foxmortgage.ca`.

### Product Repo

| Field | Value |
|---|---|
| Repo | Foxmortgage2020/app |
| Stack | Next.js 16.1.4, TypeScript, Tailwind CSS 4 |
| Auth | Clerk v7 (separate instance from foxmortgage.ca) |
| Database | Supabase (`agent_profiles` table) |
| Live URL | https://app.foxmortgage.ca |

### Sign-In Flow

- URL: `https://app.foxmortgage.ca/sign-in`
- File: `app/sign-in/[[...sign-in]]/page.tsx`
- After sign-in redirects to: `/dashboard`
- Left panel styled with FoxSocial brand (orange `#FF6B2B`, fox logo, "Your content. On autopilot.")
- All FoxSocial "Sign in" nav links point here
- Non-admin users without completed onboarding are redirected to `/onboarding`

---

## n8n Automation Stack

| Field | Value |
|---|---|
| Instance | https://foxmortgage.app.n8n.cloud |
| Active workflows | 43 |
| Plan | n8n Cloud Starter (2,500 executions/mo) |

### What the 43 workflows do

- **Content research:** Apify web scraping, YouTube Data API, OpenRouter (Claude) for scoring and summarization
- **Script + caption generation:** OpenRouter → Claude generates LinkedIn posts, Instagram captions, video scripts, carousel copy, hashtags
- **Carousel image generation:** fal.ai FLUX Pro v1.1 model → Creatomate template rendering → Metricool draft
- **Video pipeline:** Script → ElevenLabs voice clone → HeyGen avatar render → Creatomate caption overlay → Metricool draft
- **Social scheduling:** Metricool API for LinkedIn, Instagram, TikTok, Facebook, YouTube
- **Ingestion:** 4 nightly scheduled workflows (YouTube, News, Podcasts, Google Search) pulling content sources per agent
- **Mortgage-specific:** Finmo application → Zoho CRM Deals, Lender Notes via Anthropic API
- **Daily briefings:** Podcast briefing (ElevenLabs + Resend), Daily alerts (Resend)

---

## Video Workflow — Client Onboarding Context

The video pipeline is **hybrid** — not fully automated. This is critical for setting client expectations during onboarding.

| Step | Who | Time | What happens |
|---|---|---|---|
| 1. Script generation | Automated | — | n8n generates script + caption + hashtags via OpenRouter |
| 2. Metricool draft | Automated | — | Caption pre-filled in Metricool scheduled post |
| 3. Script email | Automated | — | Script emailed to client via Resend |
| 4. Voice generation | **Client** | ~2 min | Client pastes script into their ElevenLabs account → voice clone generates audio |
| 5. Video render | **Client** | ~5 min | Client uploads audio to their HeyGen account → avatar renders video |
| 6. Upload to draft | **Client** | ~3 min | Client opens Metricool draft link from email → uploads rendered video |
| 7. Publish | Automated | — | Metricool schedules and publishes |

**Cost to you per video post:** ~$0.05 (OpenRouter script generation only)
**HeyGen and ElevenLabs accounts are owned by the client** — not by FoxSocial.

---

## Image Generation

| Field | Value |
|---|---|
| Tool | fal.ai |
| Model | `fal-ai/flux-pro/v1.1` (upgraded from `flux/schnell` on April 11, 2026) |
| Endpoint | `https://fal.run/fal-ai/flux-pro/v1.1` |
| Cost | ~$0.03 per image |
| Credential | `Fal.ai` Header Auth in n8n (ID: `j7EoF2aZL2WjfU5E`) |

**Why FLUX Pro:** FLUX Schnell silently ignores the `negative_prompt` parameter, causing text to appear in generated background images. FLUX Pro has significantly better prompt adherence and does not support `negative_prompt` either — but follows positive prompt instructions like "no text, no words, no letters" much more reliably.

---

## Core Tools and Costs (Monthly — Your Cost)

| Service | Cost | Notes |
|---|---|---|
| Vercel Pro | $20/mo | Hosts foxmortgage.ca + app.foxmortgage.ca + foxsocial.ca |
| n8n Cloud Starter | $24/mo | 2,500 executions/mo — watch this cap |
| Creatomate Essential | $54/mo | 2,000 credits — carousels + video caption overlay |
| Metricool Advanced | $53/mo | 15 brands included (= 15 beta clients max) |
| Resend | $0 | Free tier — transactional emails |
| Clerk | $0 | Free tier — under 50K MRUs |
| OpenRouter | ~$30-80/mo | Pay-as-you-go, varies with volume |
| fal.ai | ~$0.03/image | Pay-as-you-go |
| Anthropic API | Pay-as-you-go | Lender Notes workflow + Paperclip agents |
| HeyGen | $0 (client-owned) | Each client has their own account |
| ElevenLabs | $0 (client-owned) | Each client has their own account |

### Infrastructure Upgrade Thresholds

| Clients | What needs upgrading | Cost impact |
|---|---|---|
| 15 clients | Metricool brand limit reached | Upgrade to custom plan |
| 15 clients | n8n execution cap likely hit | Upgrade to Pro ($60/mo) |
| 40 clients | Creatomate credit cap | Upgrade to Growth ($99/mo) |
| 50 clients | n8n Pro cap | Upgrade to Business ($800/mo — plan ahead) |

---

## Zoho Ecosystem (Content OS Data Layer)

| Service | Purpose | Used in |
|---|---|---|
| Zoho Creator | Primary content database — forms, reports, workflows | 37 of 43 n8n workflows |
| Zoho CRM | Mortgage deal/client management (Deals module) | 4 workflows |
| Zoho WorkDrive | File storage for audio, PDFs, renders | 7 workflows |
| Org ID | `906105026` | — |
| Account owner | `2802551ontarioinc` | — |
| OAuth credential (n8n) | `260126-1257-AEST-Zoho` (ID: `a053GmNoQPrMyYAS`) | All Zoho API calls |

---

## Paperclip — AI Agent Platform

| Field | Value |
|---|---|
| Runs at | `http://localhost:3100` (local only) |
| LLM | Claude via Anthropic API |
| Email routing | Agents → n8n webhook → Resend → `michael@app.foxmortgage.ca` |

4 scheduled agents:
- **CEO** — 6:00 AM daily
- **CMO** — 7:00 AM daily
- **CSM** — 9:00 AM daily
- **Investor Relations** — 10:00 AM daily

---

## Client Onboarding Requirements

Before activating a client's Content OS account:

1. Client must have their own **ElevenLabs account** with voice clone trained
2. Client must have their own **HeyGen account** with avatar created
3. Add client as a **brand in Metricool** (Advanced plan — 15 brands max)
4. Configure their **content profile in Zoho Creator** (sources, prompts, Agent_ID)
5. Charge **$147 one-time onboarding fee** before activating
6. Client completes 5-step onboarding wizard at `app.foxmortgage.ca/onboarding`

---

## FoxSocial Beta Pricing (What Clients Pay)

| Plan | Beta | Full | Platforms | Posts/mo | Carousels/mo | Video drafts/mo |
|---|---|---|---|---|---|---|
| Solo | $40/mo | $97/mo | LinkedIn only | 8-10 | 2 | — |
| Starter | $75/mo | $175/mo | 2 platforms | 16-20 | 4 | 2 |
| Growth | $120/mo | $297/mo | 3 platforms | 24-32 | 6 | 4 |
| Scale | $150/mo | $397/mo | All + YouTube | 32-40 | 8 | 6 |

**All plans:** $147 one-time onboarding fee. Beta pricing locked for life.
**Beta cap:** 15 clients (limited by Metricool brand slots on Advanced plan).

### Platform Add-On Pricing (After Base Plan)

| Platform | Beta Add-On | Setup Fee |
|---|---|---|
| + Instagram | +$35/mo | +$50 |
| + TikTok | +$45/mo | +$50 |
| + YouTube | +$30/mo | +$50 (ingestion/research only) |

---

## What Happens After a Beta Signup

When someone submits the beta form at foxsocial.ca:

1. **Now:** Signup logged to console + saved to `data/signups.json` (local only)
2. **TODO:** Resend notification email to `michael@app.foxmortgage.ca`
3. **TODO:** Lead captured in Zoho CRM via n8n webhook
4. **Manual:** Follow-up to book onboarding call
5. **Manual:** Collect $147 setup fee
6. **Manual:** Begin client onboarding checklist (ElevenLabs, HeyGen, Metricool, Zoho, Content OS wizard)

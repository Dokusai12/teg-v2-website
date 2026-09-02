# Tego Group website

Vite + React + TypeScript + Tailwind.

## Commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
npm run lint
npm run test
```

## Deploy (Vercel)

Root `vercel.json` configures the SPA and API routes.

### Contact & careers email (Resend)

Serverless routes live under **`/api`** ([Resend API](https://resend.com/docs/api-reference/introduction)):

- `POST /api/contact` — JSON body: `name`, `email`, `company`, `message`
- `POST /api/careers/apply` — `multipart/form-data` with fields above plus file field **`cv`**

In the Vercel project (or `.env.local` for `vercel dev`), set:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Secret API key from Resend |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `Tego Group <noreply@mail.tego-group.com>` |
| `RESEND_TO_EMAIL` | Inbox for submissions (default `hello@tego-group.com`) |
| `VITE_TURNSTILE_SITE_KEY` | Public Turnstile site key (careers apply form bot protection) |
| `TURNSTILE_SECRET_KEY` | Turnstile secret key — verify tokens in `/api/careers/apply` only |

Copy `.env.example` to `.env.local` and fill values. **Never commit API keys.**

### Careers spam protection (Turnstile)

Job applications use **Cloudflare Turnstile** in invisible mode. Create a widget at [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) and add both keys above in Vercel.

`npm run dev` (Vite only) does not run `/api` routes. To test email locally, run **`npm run dev:vercel`**.

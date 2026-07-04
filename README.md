# Charoen Thai Mart

Next.js app for เจริญไทยมาร์ท ซูวอน — customer-facing shop, cart/checkout, and the admin back office
(products, stock, sales, expenses, shipping, VAT/income tax, partner profit-share, orders).

This is a scoped export of the `charoenthaimart` app from a larger internal monorepo. It contains:

- `src/app/charoenthaimart/` — pages (storefront, shop, admin)
- `src/app/api/ctm/` — API routes
- `src/app/api/uploads/ctm-products/`, `src/app/api/uploads/ctm-orders/` — uploaded file serving
- `src/lib/prisma.js`, `src/lib/charoenthaimart-login.mjs`, `src/lib/portal-login.js`
- `prisma/schema.prisma` — only the `Ctm*` models used by this app
- `public/charoenthaimart/` — logo and shop photos

**Not included:** the shared NextAuth configuration (`src/lib/auth.js`, `auth.config.ts`) and its
backend routes, since those are wired into unrelated internal portals in the source monorepo. To run
this standalone you'll need to add your own NextAuth (or other) setup that provides an authenticated
session with `session.user.role` set to `ADMIN` or `SUPER_ADMIN` for the `/charoenthaimart/admin/*`
pages, and a `/api/portal-login` (or equivalent) endpoint for `src/lib/portal-login.js`.

## Setup

```
npm install
npx prisma generate
```

Set `DATABASE_URL` (MySQL) in `.env.local`, then `npx prisma db push` to create the tables, or run the
app once — most tables auto-create themselves on first request via `CREATE TABLE IF NOT EXISTS`.

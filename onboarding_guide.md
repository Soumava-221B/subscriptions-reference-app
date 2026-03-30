# ToroSachi Subscriptions: Developer Onboarding Guide

Welcome to the **ToroSachi Subscriptions** project! This is a world-class subscription commerce platform designed specifically for high-volume Shopify merchants.

## 1. High-Level Overview
This isn't just a "billing app." It is a **Growth & Automation Engine** for Shopify subscriptions.
*   **Mission**: Automate the entire subscription lifecycle so merchants can focus on growing MRR instead of manual management.
*   **Scale**: It manages 40+ feature modules (billing, dunning, analytics, portals) and 17 different Shopify extensions (Upsells, BOGO, Post-Purchase, etc.).
*   **Core Philosophy**: Shopify is the final source of truth for financial data, but ToroSachi is the "brain" that decides when and how to bill, retain, and upsell.

---

## 2. End-to-End Flow
How does a subscription actually work?

1.  **Merchant Setup**: The merchant creates a **Selling Plan** (e.g., "Monthly - 10% off") in our app. This syncs to Shopify.
2.  **Buyer Purchase**: A customer buys a subscription on the Shopify storefront. Shopify handles the initial checkout.
3.  **App Notification**: Shopify sends an `orders/create` or `subscription_contracts/create` **Webhook** to our app.
4.  **Local Sync**: Our `DataSyncService` creates a mirror of that contract in our PostgreSQL database for fast querying and analytics.
5.  **Nightly Billing**: At ~12:01 AM, our **GCP Cron** triggers the `NightlyBillingOrchestrator`. It asks Shopify to "Bulk Charge" all contracts due today.
6.  **Recovery (Dunning)**: If a payment fails, our **Dunning OS** steps in, retrying the card and sending Klaviyo emails based on a custom schedule.
7.  **Customer Management**: The customer logs into the **Customer Portal** (built by us) to swap products, skip a month, or add a one-time gift.

---

## 3. Architecture
The app follows a modern, distributed architecture:

*   **Runtime**: **Remix + Vite** running on **Vercel Serverless**.
*   **Database**: **Neon PostgreSQL** via Prisma. We use a **multi-file schema** approach to keep things organized.
*   **Background Jobs**: We use **GCP Cloud Scheduler** for triggers and **Google Cloud Tasks** for massive "fan-out" operations (like billing 10k shops at once).
*   **UI System**: **Shopify Polaris** for the layout and our custom **Clarity Design System** for the premium aesthetic.

---

## 4. Folder Structure Breakdown
```text
/app
 ├── features/      <-- [CORE] 40+ modular features (Billing, Campaigns, etc.)
 │    └── <feature>/
 │         ├── routes/      <-- Remix routes specific to this feature
 │         ├── services/    <-- Business logic (The "how-to")
 │         └── components/  <-- UI components for this feature
 ├── routes/        <-- Standard Remix routes (Main dashboard, Auth, Webhooks)
 ├── services/      <-- Cross-cutting services (Database, Shopify API, Resilience)
 ├── components/    <-- Shared UI (Clarity System, Layouts)
 ├── lib/           <-- Third-party wrappers (Resilience/Retries, Logger)
/extensions         <-- [SHOPIFY] 17 UI/Function extensions for the storefront
/prisma/schema      <-- [DATABASE] Modular .prisma files for the multi-schema DB
/scripts            <-- [MAINTENANCE] Emergency fixes, bulk syncs, and dev tools
```

---

## 5. Key Modules
*   **`shopify-recurring-subscription-billing`**: The heart of the app. Handles the "Bulk Charge" logic and idempotency (making sure we never double-bill).
*   **`data-sync`**: Keeps our local DB in parity with Shopify. Critical for dashboard speed.
*   **`conversion-campaigns`**: Drives growth via "Buy with Subscription" links and one-time offers.
*   **`customer-portal`**: The self-service area for subscribers.

---

## 6. Important APIs
*   **Internal Remix Loaders**: Fetch data for the UI using `authenticate.admin(request)`.
*   **External API (`/api/external/*`)**: Protected by **JWT**. Used for syncs, analytics feeds, and external integrations.
*   **`investigate_contract`**: A critical diagnostic API that gives a "full medical record" of a contract to debug billing skips or failures.

---

## 7. Database Structure
We use a **PostgreSQL** database with modular schemas defined in `prisma/schema/`:
*   **`base.prisma`**: Basic sessions and auth.
*   **`billing.prisma`**: `SubscriptionContract`, `BillingAttemptHistory`, and `DunningTracker`.
*   **`analytics.prisma`**: Aggregated metrics for MRR, Churn, and LTV.
*   **`marketing.prisma`**: Campaigns, links, and conversion tracking.

**Key Relationship**: Every `SubscriptionContract` belongs to a `shop` and has many `BillingAttemptHistory` records.

---

## 8. External Integrations
*   **Shopify Admin API**: For creating billing cycles and syncing data.
*   **Shopify Webhooks**: 40+ topics handled in `app/routes/webhooks.*`.
*   **Klaviyo**: For transactional subscription emails.
*   **Aspire / Impact**: For influencer and affiliate tracking.

---

## 9. Running Locally
1.  **Prerequisites**: Node 18, **Bun**, and a local **PostgreSQL** instance.
2.  **Install**: `bun install`
3.  **Environment**: `cp .env.example .env` (fill in your Shopify API keys and Postgres URL).
4.  **Schema**: `bun prisma generate` then `bun prisma migrate deploy`.
5.  **Start**: `bun run dev`
6.  **Tunnel**: Use `shopify app dev` to create an HTTPS tunnel for webhooks.

---

## 10. Testing Guide
*   **Unit Tests**: `bun run test:ai` (Runs logic/component tests).
*   **Billing Safety**: `bun run test:billing-safety` (**MANDATORY** before any billing change).
*   **Live E2E**: `bun run e2e:validate --url <your-dev-url>` (Runs 80+ checks against a real Shopify dev store).

---

## 11. Common Edge Cases & Failures
*   **Idempotency Keys**: We generate a unique key for every billing attempt. If the app crashes midway, the next run sees the `PENDING` key and waits until it's safe to resume.
*   **Volume Safeguard**: If the app tries to bill >5% more than the 7-day average, it **auto-kills** the billing run. This prevents "billing bugs" from charging thousands of customers by mistake.
*   **Vercel Timeouts**: Serverless functions die after 4 min. Our loop logic checks `timeLeft()` and gracefully exits for the "Catchup" cron to finish.

---

## 12. Debugging Tips
*   **Stale Data?** Run `bun scripts/fix-stale-billing-dates.ts <shop> --execute`.
*   **Billing Mystery?** Use the `diagnose-from-shopify.ts` script. It bypasses our DB and checks Shopify's actual records.
*   **Webhooks Delayed?** Check the **GCP Cloud Tasks** logs for the `ProcessWebhookJob`.

---

## 13. Important Design Decisions
*   **Why Bun?** Faster script execution and a consistent test runner for CI/CD.
*   **Why GCP Scheduler?** Higher reliability/logging than standard Vercel crons for mission-critical billing tasks.
*   **Why "Shopify is Truth"?** Local DBs can get out of sync. Financial operations always query Shopify live before making a charge.

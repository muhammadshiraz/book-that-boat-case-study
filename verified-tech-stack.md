# Verified Tech Stack

Only technologies verified from `package.json`, config files, or source imports are listed here.

## Frontend

- Next.js 16 dependency present; App Router source structure verified.
- React 18 and React DOM 18.
- TypeScript.
- Next dynamic imports via `next/dynamic`.
- Next metadata APIs verified in layout and detail page source.
- Next image optimization via `next/image`.

## CMS / Backend

- Payload CMS 3 dependencies verified: `payload`, `@payloadcms/next`, `@payloadcms/payload-cloud`, `@payloadcms/richtext-lexical`.
- Payload/Next integration verified through `withPayload`.
- MongoDB adapter dependency verified through `@payloadcms/db-mongodb`.
- Express and CORS dependencies present.
- SendGrid and Nodemailer dependencies present. Specific email flows: Not confirmed from codebase.

## Styling and UI

- Tailwind CSS configuration verified.
- Radix Slider dependency verified.
- Headless UI dependency verified.
- Framer Motion usage verified.
- Lucide React and React Icons dependencies verified.
- `clsx`, `class-variance-authority`, and `tailwind-merge` dependencies verified.

## Data Fetching and State

- TanStack React Query usage verified in hooks and providers.
- Axios usage verified for CMS API requests.
- Native `fetch` usage verified for server and client requests.
- SWR dependency present. Usage: Not confirmed from codebase.

## Media

- Next image remote pattern configuration verified.
- Vercel Blob dependency verified.
- Sharp dependency verified.
- CMS media endpoint usage verified.

## Analytics

- Google Analytics page-view integration verified.
- Google Tag Manager noscript iframe verified.
- Real analytics IDs are intentionally omitted from this export.

## Tooling

- ESLint and Next ESLint config dependencies verified.
- Prettier dependency verified.
- PostCSS and Autoprefixer dependencies verified.
- Webpack dependency and Next webpack alias configuration verified.
- Dockerfile and Docker Compose files are present.

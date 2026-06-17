# Performance and SEO

## Rendering and Data Loading

- Next.js App Router is used for the frontend.
- Boat detail pages use server-side data loading.
- Detail page fetches use `next: { revalidate: ... }` for cache/revalidation behavior.
- React `cache` is used on detail data loading so page rendering and metadata generation do not repeat the same work.
- Listing data uses React Query with stale times and disabled unnecessary refetches.

## Progressive and Lazy Loading

- The fleet hook progressively loads an initial batch before fetching the full list in the background.
- Extras are lazy-loaded with an `IntersectionObserver` on detail pages.
- Booking modal extras are loaded only after a boat is selected and the user reaches the relevant step.
- Route and booking modal sections use dynamic imports where appropriate.

## Images and Media

- `next/image` is used across hero, cards, detail pages, gallery, menus, and modal thumbnails.
- Image formats are configured for AVIF and WebP.
- Remote image patterns are configured in Next.js. Real domains are intentionally omitted from this export.
- Image fallback handling is present for missing or failed media.

## SEO

- Global metadata is configured in the root layout.
- Boat detail pages generate dynamic metadata from fetched boat data.
- Open Graph and Twitter card metadata are configured.
- Robots directives are configured in metadata.
- A public sitemap file is present.
- Canonical and manifest links are configured in the layout.

## Analytics

- Google Analytics page-view tracking is implemented.
- Google Tag Manager noscript support is present.
- Real tracking IDs must be removed or replaced before publishing any public sample.

## Notes

- A dedicated `robots.txt` file: Not confirmed from codebase.
- Automated Core Web Vitals measurements: Not confirmed from codebase.

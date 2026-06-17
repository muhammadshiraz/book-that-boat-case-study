# Frontend Features

## Homepage

- CMS-driven hero content with background media, title/subtitle, and CTA behavior.
- Fleet preview section backed by CMS boat data.
- Shared header, footer, global booking modal provider, and page loader behavior.

## Listing and Filters

- Fleet listing with responsive grid layout.
- Price, capacity, boat type, event type, and harbour filtering.
- Sorting by popularity, price, newest, and oldest.
- Mobile filter sheet with scroll lock and escape-key close behavior.
- Pagination over filtered/sorted results.

## URL Filter Routing

- Filter landing pages and URL-aware filtering are supported through path/query parsing.
- Human-readable path segments can map to event, type, or harbour filters.

## Yacht Detail Pages

- Dynamic service/detail pages by slug.
- Server-side data loading with request-level cache usage.
- Dynamic metadata per boat.
- Gallery, specifications, route section, pricing, amenities, highlights, reviews, and booking CTA.
- Not-found behavior for missing boats.

## Booking Modal

- Shared context for opening/closing the modal and passing selected boat state.
- Multi-step booking flow for boat, schedule, extras, and customer details.
- Provisional pricing, minimum-hour logic, coupon support, and pending reservation creation.
- Mobile-specific behavior for CTA and modal navigation.

## Extras and Routes

- Routes are loaded/populated for boat detail pages.
- Extras are lazy-loaded or loaded during booking only when needed.
- Extras can include dependent items and guest/capacity constraints.

## Loading and Error States

- Skeleton loading states for listings and extras.
- Error states for boat and extras fetch failures.
- Empty states for no matching boats or no extras.
- Image fallback behavior for unavailable media.

## Responsive UI

- Tailwind CSS responsive layout patterns.
- Mobile filter sheet and sticky mobile controls.
- Optimized images through `next/image`.
- Dynamic imports for heavier UI components.


# Book That Boat — Premium Yacht Booking Platform Case Study

A production-focused case study for a premium yacht and boat discovery and booking platform built with **Next.js, React, TypeScript, Payload CMS, Tailwind CSS, and API-driven frontend architecture**.

This case study demonstrates how a modern frontend experience can connect rich yacht catalogue content, dynamic booking rules, route options, extras, coupons, reservation workflows, responsive UI, and CMS-managed business content.

> Note: This repository is a public proof-of-work case study. It does not expose private source code, secrets, customer data, payment credentials, production analytics, or confidential business information.

---

## Project Overview

**Book That Boat** is a premium yacht and boat booking platform focused on UAE charter experiences.

The platform combines:

* A customer-facing **Next.js frontend** for browsing yachts, viewing details, filtering options, and submitting booking enquiries.
* A separate **Payload CMS backend** for managing boats, locations, routes, extras, event categories, media, menus, reviews, coupons, reservations, owners, and subscribers.
* A multi-step booking enquiry flow that connects yacht selection, availability details, dynamic pricing rules, optional extras, coupons, guest details, and reservation creation.

The customer flow is enquiry-first: users submit a booking request, the operations team confirms availability, and payment details are handled after confirmation.

---

## Business Problem

Yacht booking is more complex than a simple product checkout.

A premium charter platform needs to support:

* Searchable yacht and boat listings
* Rich yacht detail pages with galleries, specifications, routes, amenities, and pricing
* Dynamic pricing based on duration, sale prices, special-event packages, minimum-hour rules, and coupons
* Optional extras such as catering, watersports, entertainment, and decor
* Route and itinerary options with duration-based stops
* Mobile-friendly booking actions
* CMS-managed fleet and marketing content
* Reservation workflows for operational follow-up
* SEO-ready pages for discoverability
* Scalable content structure as the yacht catalogue grows

The goal was to create a polished customer journey while giving business users control over yacht content and booking operations through a CMS.

---

## My Role

**Role:** Senior Frontend Engineer

My responsibilities included:

* Frontend architecture for a responsive Next.js App Router application
* Customer-facing yacht listing and detail page implementation
* Reusable UI components for cards, filters, booking widgets, galleries, route sections, extras, loaders, and error states
* Integration with Payload CMS REST data
* Booking enquiry modal implementation
* TypeScript interfaces and typed data handling
* Dynamic pricing, route, extras, coupon, and reservation flow integration
* Responsive mobile-first UI implementation
* SEO and performance-focused frontend structure
* Collaboration with a CMS/backend model supporting reservations, payment workflows, and operational booking data

---

## Tech Stack

| Area                | Technology                              |
| ------------------- | --------------------------------------- |
| Frontend Framework  | Next.js App Router                      |
| UI Library          | React                                   |
| Language            | TypeScript                              |
| CMS                 | Payload CMS 3                           |
| Database Layer      | MongoDB / Mongoose adapter              |
| Styling             | Tailwind CSS                            |
| Data Fetching       | React Query, SWR, Axios, Native Fetch   |
| Images              | next/image                              |
| UI Animation        | Framer Motion                           |
| Forms / Feedback    | React Hook Form, React Hot Toast        |
| Icons               | Lucide React, React Icons, Font Awesome |
| Media Storage       | Vercel Blob                             |
| Rich Text           | Lexical editor                          |
| Email / Booking Ops | Nodemailer, Microsoft Graph integration |
| Payments            | Mamo Pay integration                    |
| Analytics           | Google Analytics, Google Tag Manager    |
| Code Quality        | ESLint, Prettier                        |

---

## System Architecture

The project is split into two applications:

```text
BTG/
├── book-that-boat-frontend/
│   ├── public/
│   ├── src/
│   │   ├── app/(frontend)/
│   │   │   ├── [filter]/
│   │   │   ├── service/[slug]/
│   │   │   ├── components/
│   │   │   │   ├── boats/
│   │   │   │   ├── common/
│   │   │   │   ├── home/
│   │   │   │   ├── ui/
│   │   │   │   └── forms/
│   │   │   ├── contexts/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   └── styles/
│   │   ├── config/
│   │   ├── providers/
│   │   └── utils/
│   ├── next.config.mjs
│   └── package.json
│
└── book-that-boat-payload/
    ├── src/
    │   ├── app/(payload)/
    │   ├── app/api/newsletter/
    │   ├── collections/
    │   ├── components/
    │   ├── config/
    │   ├── lib/
    │   ├── types/
    │   ├── payload.config.ts
    │   └── payload-types.ts
    ├── next.config.mjs
    └── package.json
```

---

## Architecture Highlights

* Separate frontend and CMS applications for better scalability and maintainability
* Payload CMS used as a structured content and operations backend
* Server-rendered yacht detail pages for SEO and performance
* Client-side interactive experiences for filtering, booking, extras, and modals
* Global booking modal context for shared booking actions across the app
* Typed domain models for boats, routes, extras, coupons, and reservations
* Centralized API helpers for consistent endpoint handling
* Progressive loading and deferred content loading for better user experience
* Reusable component structure for faster future feature development

---

## Payload CMS Implementation

Payload CMS is used as the backbone for content, booking operations, and structured business data.

### Key CMS Collections

| Collection   | Purpose                                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| Boats        | Yacht data, pricing, specifications, features, amenities, media, routes, discounts, events, and review aggregates |
| Locations    | Country, city, harbour, and display names                                                                         |
| Routes       | Route names, location relationships, duration variants, and ordered route points                                  |
| Extras       | Catering, watersports, entertainment, decor, pricing, dependencies, passenger limits, and boat relationships      |
| Event Types  | Event categories and display priority                                                                             |
| Boat Types   | Reusable vessel taxonomy                                                                                          |
| Reservations | Booking request data, guest details, status, payment records, operational fields, extras, and coupons             |
| Media        | Image/file storage, alt text, metadata, and blob handling                                                         |
| Hero         | Homepage hero content                                                                                             |
| Menu         | Header navigation, logos, booking CTA, social links, and filter submenus                                          |
| Reviews      | Boat reviews, rating, moderation, and rating recalculation hooks                                                  |
| Coupons      | Coupon code, active state, expiry, amount, type, and scope                                                        |
| Owners       | Owner and operational business data                                                                               |
| Subscribers  | Newsletter subscription records                                                                                   |
| Users        | Payload authentication and admin/user roles                                                                       |

---

## CMS Value

The CMS allows business users to manage:

* Yacht listings
* Route definitions
* Extra services
* Event categories
* Pricing-related content
* Media galleries
* Homepage content
* Navigation menus
* Reviews
* Coupons
* Reservations
* Operational booking details

This avoids hardcoding catalogue and booking data into the frontend.

---

## Frontend Features

### Homepage

* CMS-driven hero section
* Optimized hero background image
* CTA-driven customer journey
* Fleet listing integration
* Progressive boat loading
* Loading skeletons and error states

### Yacht Listing

* Reusable yacht cards
* Filters for price, capacity, vessel type, event type, and harbour
* Sorting by popularity, rating, price, and creation date
* Mobile filter sheet
* Empty states and API error handling
* Dynamic filter landing pages

### Yacht Detail Pages

* Dynamic route: `/service/[slug]`
* Server-side boat retrieval
* Dynamic SEO metadata
* Hero image and pricing presentation
* Responsive gallery
* Specifications and feature sections
* Amenities and services
* Event suitability
* Route options
* Extras section
* Desktop booking widget
* Mobile fixed booking CTA
* Recoverable error states

### Booking Enquiry Flow

The booking experience is handled through a shared multi-step modal.

Steps include:

1. Select boat
2. Select date, time, and guest count
3. Choose optional extras
4. Enter customer details and submit enquiry

The flow supports:

* Preselected boat from listing/detail pages
* Guest capacity validation
* Minimum-hour rules
* Special-event package logic
* Sale pricing
* Extras pricing
* Dependent extras
* Coupon validation
* Live price summary
* Reservation creation
* Success confirmation state

---

## Booking Flow

```text
User opens booking CTA
        ↓
Boat is selected or preselected
        ↓
User selects date, time, and guests
        ↓
Minimum duration and pricing rules are evaluated
        ↓
Optional extras are loaded for the selected boat
        ↓
Extras and dependencies are added to the booking payload
        ↓
Coupon is validated if provided
        ↓
Customer details are submitted
        ↓
Pending reservation is created
        ↓
Operations team confirms availability
        ↓
Payment link / follow-up can be handled after confirmation
```

---

## Dynamic Pricing, Routes, and Extras

### Pricing

The pricing system supports:

* Base hourly pricing
* Daily pricing
* Sale pricing
* Date-bound discounts
* Percentage or fixed discounts
* Minimum-hour rules
* Special-event package rules
* Coupon validation
* Extras subtotal
* Final enquiry total

Pricing logic is separated from presentation so that UI components can display customer-friendly summaries without duplicating business rules.

### Routes

Routes are reusable CMS documents connected to boats and locations.

Each route can include:

* Route name
* Location relationship
* Multiple duration options
* Ordered route points/stops

The frontend renders route duration cards and visual stop timelines.

### Extras

Extras support:

* Categories such as watersports, catering, entertainment, and decor
* Media and rich descriptions
* Unit pricing
* Passenger limits
* Boat relationships
* Dependent extras
* Lead-time and timing rules

Extras are loaded only when needed to improve performance.

---

## API & Data Fetching

The frontend uses multiple data-fetching strategies depending on the use case:

| Strategy     | Usage                                                                      |
| ------------ | -------------------------------------------------------------------------- |
| Server Fetch | Yacht detail pages and route data                                          |
| React Query  | Boats, hero, menus, lazy extras, subscribers, and reservations             |
| SWR          | Event taxonomy                                                             |
| Axios        | Client-side list, modal, coupon, reservation, review, and content requests |
| Native Fetch | Revalidation-aware server requests and selected integrations               |

### Error Handling

The UI includes:

* Skeleton loaders
* Empty states
* Retryable error boundaries
* API error messages
* Image fallback handling
* Toast notifications
* Booking validation feedback
* Deferred extras loading states
* Route-fetch fallback handling

---

## UI / UX Implementation

The interface is designed for a premium service experience.

Key UX decisions:

* Mobile-first responsive layouts
* One-column mobile cards and multi-column desktop grids
* Mobile filter sheet with body-scroll lock and Escape handling
* Animated responsive navigation
* Fixed mobile booking CTA on yacht detail pages
* Reusable cards, pills, badges, buttons, sliders, loaders, and modal components
* Clear booking actions across homepage, cards, detail pages, and header
* Customer-friendly validation and success states
* Visual consistency through Tailwind utility patterns

Accessibility-related implementation includes:

* Alt text on key images
* Semantic headings and sections
* Dialog roles and modal attributes
* ARIA labels on interactive controls
* Keyboard Escape handling for selected panels
* Focus utility classes on controls

---

## Performance & SEO

### Performance Work

The project includes:

* Server-rendered yacht detail pages
* Request caching for shared yacht loading
* Revalidation for CMS data
* React Query caching and stale-time control
* Progressive boat loading
* Deferred extras loading with viewport detection
* Dynamic imports for selected heavy UI
* Optimized images through `next/image`
* AVIF/WebP image configuration
* Remote image host allowlisting
* Image fallback and retry behavior
* Resource preconnect hints

### SEO Work

The project includes:

* Global metadata configuration
* Dynamic yacht metadata
* Page-level metadata for content pages
* Open Graph and Twitter metadata
* Robots configuration
* Canonical handling
* Public XML sitemap
* Web manifest and favicon configuration
* Semantic page structure
* Descriptive image alt text
* Google Analytics and Tag Manager integration

---

## Key Engineering Decisions

### Why Next.js

Next.js supports SEO-friendly pages, server rendering, optimized images, file-based routing, and a strong structure for both content pages and interactive product flows.

### Why Payload CMS

Payload CMS provides structured content modeling, admin management, REST/GraphQL APIs, authentication, hooks, relationships, and TypeScript-friendly configuration.

### Why TypeScript

TypeScript improves maintainability across complex CMS relationships, API responses, booking payloads, route models, extras, coupons, and reservation data.

### Why Reusable Components

Reusable components reduce duplicated UI work across listing pages, detail pages, booking widgets, filters, galleries, and modal flows.

### Why CMS-Driven Content

CMS-driven content allows business users to manage yacht catalogue data, media, routes, extras, and operational booking information without frontend deployments.

### Why Mobile-First UI

Yacht booking journeys are highly visual and action-driven, so mobile navigation, filters, detail pages, and booking calls to action need to be simple and accessible.

---

## Challenges & Solutions

### Challenge 1: Complex charter catalogue without hardcoded content

**Solution:**
Modeled boats, locations, routes, extras, media, reviews, coupons, and events as structured Payload CMS collections with relationships. The frontend consumes these records through reusable components and typed models.

---

### Challenge 2: Dynamic pricing needed to stay understandable

**Solution:**
Separated pricing and discount logic from UI presentation. The booking interface evaluates sale pricing, discounts, minimum-duration rules, special-event rules, coupons, extras, and guest selections before showing a live summary.

---

### Challenge 3: One booking journey from multiple entry points

**Solution:**
Implemented a global booking context and shared booking modal. Users can start the booking flow from the header, homepage, yacht cards, detail widgets, and mobile CTA.

---

### Challenge 4: Extras required dependencies and passenger rules

**Solution:**
Loaded extras by selected boat, filtered them by passenger constraints and timing rules, resolved dependent extras recursively, and included selected items in the reservation payload.

---

### Challenge 5: Rich yacht pages needed good performance

**Solution:**
Used server rendering for detail pages, request caching, revalidation, dynamic imports, optimized images, deferred extras loading, skeleton states, error boundaries, and fallback handling.

---

## Business Value

This platform creates value by enabling:

* A scalable customer-facing yacht catalogue
* CMS-managed boat, route, extra, menu, hero, media, review, coupon, and reservation content
* A structured enquiry flow instead of unorganized manual booking requests
* Reusable frontend components for faster future development
* Mobile-friendly browsing and booking actions
* SEO-ready yacht detail pages
* Maintainable separation between frontend and CMS backend
* Extensible reservation workflows for operational follow-up, status changes, payment links, and communications

No revenue, conversion, traffic, or production analytics are claimed in this case study.

---

## Screenshots

Add sanitized screenshots here.

### Homepage

![Homepage](./screenshots/01-home-desktop.webp)

### Fleet Listing

![Fleet Listing](./screenshots/02-fleet-desktop.webp)

### Mobile Filters

![Mobile Filters](./screenshots/03-filters-mobile.webp)

### Yacht Detail Page

![Yacht Detail](./screenshots/04-yacht-detail.webp)

### Routes Section

![Routes](./screenshots/05-routes.webp)

### Extras Section

![Extras](./screenshots/06-extras.webp)

### Booking Date & Time

![Booking Date Time](./screenshots/07-booking-date-time.webp)

### Booking Extras

![Booking Extras](./screenshots/08-booking-extras.webp)

### Booking Summary

![Booking Summary](./screenshots/09-booking-summary.webp)

### Payload CMS Models

![Payload Models](./screenshots/10-payload-models.webp)

---

## Recommended Screenshot Checklist

Before publishing, capture these screenshots with private data removed:

* Desktop homepage hero
* Desktop fleet listing
* Mobile fleet listing
* Mobile filter sheet
* Dynamic filter landing page
* Yacht detail hero
* Yacht gallery and specifications
* Routes section
* Extras section
* Booking step 1: boat selection
* Booking step 2: date/time and guests
* Booking step 3: extras selection
* Booking step 4: customer details using dummy data
* Booking success state with identifiers hidden
* Payload boats collection with private fields hidden
* Payload routes editor
* Payload extras editor
* Demo reservation screen with all customer/payment/private data hidden

---

## Public Repository Structure

```text
book-that-boat-case-study/
├── README.md
├── screenshots/
│   ├── 01-home-desktop.webp
│   ├── 02-fleet-desktop.webp
│   ├── 03-filters-mobile.webp
│   ├── 04-yacht-detail.webp
│   ├── 05-routes.webp
│   ├── 06-extras.webp
│   ├── 07-booking-date-time.webp
│   ├── 08-booking-extras.webp
│   ├── 09-booking-summary.webp
│   └── 10-payload-models.webp
├── architecture/
│   ├── system-overview.md
│   ├── data-model.md
│   ├── booking-flow.md
│   └── diagrams/
│       ├── frontend-cms-flow.svg
│       └── booking-sequence.svg
├── docs/
│   ├── verified-tech-stack.md
│   ├── frontend-features.md
│   ├── cms-models.md
│   ├── performance-seo.md
│   └── privacy-redaction-checklist.md
└── code-samples/
    ├── progressive-boat-loading.ts
    ├── url-filter-routing.ts
    ├── lazy-extras-loading.tsx
    ├── route-collection.ts
    └── booking-context.tsx
```

---

## Safe Public Code Samples

This public case study can include sanitized examples such as:

* Progressive boat loading hook
* URL filter routing helper
* Lazy extras loading component
* Booking modal context
* Route collection model
* Extras collection model
* Pricing rule structure
* Typed boat interface
* API helper structure

Do not publish:

* `.env` files
* API keys
* Database URLs
* Payment credentials
* Real customer data
* Real reservation records
* Owner banking/contact details
* Real payment links
* Real coupon codes
* Private production URLs
* Admin credentials
* Sensitive email/payment integration code without redaction

---

## Suggested Repository Topics

```text
nextjs
react
typescript
payload-cms
tailwindcss
booking-platform
cms
frontend-architecture
saas
responsive-design
seo
react-query
case-study
proof-of-work
```

---

## Suggested Repository Description

```text
Premium yacht booking platform case study built with Next.js, TypeScript, Payload CMS, Tailwind CSS, dynamic booking flows, routes, extras, pricing logic, SEO, and responsive frontend architecture.
```

---

## Contact

**Muhammad Shiraz**
Senior Frontend Engineer
React.js | Next.js | TypeScript | React Native | Product UI | Frontend Architecture

* Email: [muhammadshiraz996@gmail.com](mailto:muhammadshiraz996@gmail.com)
* LinkedIn: https://www.linkedin.com/in/muhammadshiraz
* GitHub: https://github.com/muhammadshiraz
* Portfolio: https://muhammadshiraz.com

---

<div align="center">

### Built to demonstrate serious frontend engineering, CMS-driven architecture, and business-focused product UI.

</div>

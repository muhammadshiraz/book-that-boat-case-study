# System Overview

This export is a public-safe case-study summary for the Book That Boat production project. It is intended for recruiters and engineering managers to understand the system design and engineering approach without exposing private infrastructure, CMS records, credentials, reservations, customer data, owner details, or production URLs.

## High-Level Architecture

Book That Boat is implemented as a Next.js frontend integrated with a Payload CMS backend.

- Frontend: Next.js App Router application with React 18 components, dynamic routes, server-rendered detail pages, client-side filtering, and booking UI.
- CMS/backend: Payload CMS integration is verified through `@payloadcms/next`, `payload`, and `withPayload` usage. The frontend reads CMS content through `/api/...` endpoints.
- Database: MongoDB support is verified through `@payloadcms/db-mongodb`.
- Media: Images are served through CMS media endpoints and object storage-style public media URLs. Public export examples use placeholder domains only.
- Data fetching: React Query, `fetch`, and `axios` are used for client and server data access.
- Styling: Tailwind CSS is used for responsive UI styling.

## Separation of Concerns

The frontend and CMS are separated by an API boundary:

- The frontend renders public marketing pages, fleet listings, yacht detail pages, booking modals, filters, route sections, extras, and enquiry UX.
- The CMS owns structured content such as boats, locations, routes, extras, event types, hero content, menus, reviews, coupons, subscribers, reservations, owners, users, and media.
- The frontend requests only the fields needed for each page or interaction, using query params such as pagination, depth, sorting, filters, and population.

Actual production API URLs, hostnames, storage URLs, and environment variables are intentionally omitted from this export.

## User-Facing Flow

Users can browse the homepage, filter the fleet, open yacht detail pages, review gallery/specification/route/extras content, and open a booking modal from CTAs. The booking modal collects date, time, guest count, contact details, optional extras, coupon information, and special requests before creating a pending reservation for operations follow-up.

## Screenshots

Screenshots are not included in this export to avoid accidentally exposing private CMS content, real listings, customer data, admin views, private routes, or production infrastructure. Public-safe screenshots can be added later after manual review and redaction.

## Public Case-Study Purpose

This folder is designed to demonstrate:

- Practical Next.js production architecture.
- CMS-driven content modeling.
- Progressive/lazy loading for marketplace inventory.
- SEO and metadata handling.
- Booking enquiry UX and operational handoff.
- Privacy-aware engineering practices.


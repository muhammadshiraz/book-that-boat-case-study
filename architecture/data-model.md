# Data Model

This document summarizes the public-safe data model. No real CMS records are included. Backend collection source files were not present in the inspected frontend workspace, so model details are based on verified frontend types, API endpoint usage, package configuration, and route/component behavior. Where a detail is not verified, it is marked as: Not confirmed from codebase.

## Boats

Primary marketplace inventory model. Verified frontend fields include name, slug, type, description, hourly pricing, sale pricing, capacity, location relation, media, gallery, specifications, highlights, amenities, routes, extras, special event tags, discounts, rating data, and created/updated timestamps.

Business purpose: public yacht/boat listing and booking eligibility source.

## Locations

Represents city, country, harbour, and display name data used for filtering and listing context.

Business purpose: lets users browse by marina/harbour and gives each boat a clear operating location.

## Routes

Represents preconfigured itineraries related to boats and locations. Verified frontend fields include route name, location relation, duration groups, and route points.

Business purpose: shows possible cruising routes on detail pages.

## Extras

Represents optional add-ons such as services, food, decor, entertainment, or other bookable items. Verified frontend fields include category, name, description, media, unit price, guest-count limits, dependent extras, boat relation, and dependent-only behavior.

Business purpose: increases booking customization and total quote value.

## Event Types

Event taxonomy used in filters and boat tags. Verified through event-type hooks, special event tag handling, and boat/event filtering.

Business purpose: helps users find boats suited for birthdays, proposals, corporate events, and other occasions.

## Boat Types

Boat type labels are verified in frontend filter constants. A dedicated Payload CMS collection for boat types: Not confirmed from codebase.

Business purpose: supports category filtering such as yachts, catamarans, speedboats, and related fleet groupings.

## Reservations

Represents booking enquiries or reservations. Verified frontend fields include boat, user/customer details, start and end time, guest count, status, payment method metadata, extras, coupon fields, total price, and timestamps.

Business purpose: captures pending customer requests for operations follow-up.

## Media

Represents uploaded images and related metadata used by boats, galleries, hero content, menus, and extras. Media API usage is verified through image configuration and frontend media helpers.

Business purpose: centralizes CMS-managed visual assets.

## Hero

Homepage hero content is verified through frontend hooks and component usage. Fields include title, subtitle, CTA text/link, and background image.

Business purpose: lets non-engineering teams manage the homepage lead content.

## Menu

Navigation/menu content is verified through frontend hooks and header/footer usage. Fields include logo assets, menu items, social media links, and booking button content.

Business purpose: controls shared navigation and footer content from CMS.

## Reviews

Review submission endpoint usage and rating fields on boats are verified from frontend source.

Business purpose: captures guest feedback and supports trust signals on listings.

## Coupons

Coupon validation endpoint usage is verified from booking modal source. Coupon fields are intentionally described generically and no real coupon codes are included.

Business purpose: applies promotional discounts to eligible booking enquiries.

## Owners

Boat owner relation usage is verified through boat population in frontend requests. Owner collection fields, banking data, and contact details are not included and are not safe for public export.

Business purpose: connects listed boats to operating partners or fleet owners.

## Subscribers

Subscriber endpoint usage is verified through frontend hooks.

Business purpose: stores newsletter or lead subscribers. Exact schema: Not confirmed from codebase.

## Users

User relation usage is verified in reservation types and auth provider usage. Actual admin roles, credentials, and permission rules are not included.

Business purpose: supports authentication, admin access, and reservation/user relationships.

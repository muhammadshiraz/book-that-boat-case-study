# CMS Models

This document summarizes the business purpose of the CMS models referenced by the frontend. Backend collection definitions were not present in the inspected workspace, so schema details are public-safe summaries based on verified frontend types and API usage.

## Boats

Fleet inventory shown to customers. Stores public listing data, pricing, capacity, descriptions, specifications, media, galleries, event tags, discounts, related routes, related extras, and owner relation.

## Locations

Structured marina/harbour/location data used for boat display and filters.

## Routes

Cruising itinerary content. Stores route name, location, durations, and route points for detail-page itinerary sections.

## Extras

Optional booking add-ons. Stores category, name, description, media, unit price, guest limits, boat relation, and dependent item relationships.

## Event Types

Taxonomy for matching boats to customer occasions and listing filters.

## Boat Types

The frontend has verified boat type filter constants. A dedicated CMS collection for boat types: Not confirmed from codebase.

## Reservations

Private operational records created from booking enquiries. Stores boat/date/time/customer/extras/status/payment-summary metadata. Real records must never be exported publicly.

## Media

Central media library used by hero content, menus, boat listings, galleries, and extras.

## Hero

Homepage hero content model for title, subtitle, CTA, and background image.

## Menu

Header/footer navigation model for menu items, logos, social links, and booking CTA content.

## Reviews

Customer review content and rating data used as trust signals on boat listings/detail pages.

## Coupons

Promotion model used during checkout/enquiry to calculate eligible discounts. Real codes must be redacted.

## Owners

Partner/operator relation for boats. Owner banking details, private contact data, contracts, and internal notes are excluded from this export.

## Subscribers

Lead/newsletter subscriber model. Exact schema: Not confirmed from codebase.

## Users

Authentication and admin/user relation model. Roles and permissions: Not confirmed from codebase. Admin credentials must not be exported.

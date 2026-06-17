# Booking Flow

The booking flow is designed as an enquiry-first workflow. The public frontend collects booking intent, calculates a provisional total, creates a pending reservation, and leaves final confirmation/payment/operations handling to the internal team.

## Flow Summary

1. User clicks a CTA from the homepage, header, boat card, yacht detail page, or mobile booking UI.
2. Booking modal opens through a shared booking context or dynamically imported modal.
3. User selects or confirms a boat.
4. User selects date, start time, end time, and guest count.
5. Frontend applies minimum-hour, duration, capacity, and pricing logic.
6. Extras are loaded only when needed and filtered by selected boat/capacity/guest count.
7. User enters contact details and optional special requests.
8. Optional coupon fields are validated against the CMS API.
9. Frontend posts a sanitized reservation payload to the reservations endpoint.
10. CMS stores the reservation as pending.
11. Operations team follows up to confirm availability, payment, and final itinerary.

No real reservation payloads, customer records, payment credentials, coupon codes, owner records, or private URLs are included in this export.

## Text Sequence Diagram

```text
User
  -> Frontend CTA: click "Book Now"
Frontend
  -> Booking Context: open modal with optional selected boat
Booking Modal
  -> CMS API: fetch boats if boat was not preselected
User
  -> Booking Modal: choose date, time, guest count
Booking Modal
  -> Pricing Logic: calculate duration, minimum hours, provisional total
Booking Modal
  -> CMS API: lazy-load extras for selected boat
User
  -> Booking Modal: select extras and enter contact details
Booking Modal
  -> CMS API: validate coupon if provided
Booking Modal
  -> CMS API: create pending reservation
CMS
  -> Operations Team: reservation available for follow-up
Operations Team
  -> Customer: confirm availability, payment instructions, and final details
```

## Operational Notes

- The frontend should treat totals as provisional until operations confirms availability and payment.
- Payment provider links, transaction IDs, and private payment configuration must not be included in public exports.
- Pending reservation records are private operational data and must never be committed to a public repository.


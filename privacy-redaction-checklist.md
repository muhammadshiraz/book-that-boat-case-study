# Privacy Redaction Checklist

Use this checklist before publishing any case-study repository, screenshots, video walkthrough, or code sample.

## Secrets and Configuration

- [ ] Remove `.env`, `.env.local`, `.env.production`, and any environment-specific config files.
- [ ] Remove API keys, tokens, bearer credentials, service credentials, and webhook secrets.
- [ ] Remove database URLs, MongoDB connection strings, usernames, and passwords.
- [ ] Remove private CMS URLs, admin URLs, staging URLs, and internal hostnames.
- [ ] Replace production object-storage URLs with placeholders.
- [ ] Replace analytics IDs, GTM IDs, verification tokens, and tracking configuration.

## Customer and Reservation Data

- [ ] Remove all real reservations and booking records.
- [ ] Remove customer names, emails, phone numbers, WhatsApp numbers, messages, and special requests.
- [ ] Remove payment transaction IDs, payment links, invoices, refund records, and payment statuses tied to real customers.
- [ ] Remove coupon codes used in production.

## Owner and Partner Data

- [ ] Remove owner names, emails, phone numbers, addresses, contracts, commission data, and private notes.
- [ ] Remove bank account details, IBANs, routing details, payout records, and settlement records.
- [ ] Remove private boat/operator documents and non-public media.

## Admin and CMS Data

- [ ] Remove admin users, roles, passwords, reset links, access tokens, and invitation links.
- [ ] Remove private CMS records, unpublished drafts, internal-only collections, and audit logs.
- [ ] Remove private media library assets and original upload URLs.

## Public Code Samples

- [ ] Do not copy full production files.
- [ ] Use simplified examples that show approach, not complete implementation.
- [ ] Replace real domains with `https://cms.example.com` or relative paths.
- [ ] Replace real IDs with placeholders such as `boat_123`.
- [ ] Replace real business rules that are confidential with generic examples.
- [ ] Review screenshots manually for hidden customer data, browser history, console output, and network tabs.


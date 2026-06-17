import type { CollectionConfig } from 'payload'

export const Routes: CollectionConfig = {
  slug: 'routes',
  admin: {
    useAsTitle: 'routeName',
    defaultColumns: ['routeName', 'location', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'routeName',
      type: 'text',
      required: true,
      admin: {
        description: 'Public route label, for example "Marina Skyline Cruise".',
      },
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      maxLength: 240,
    },
    {
      name: 'hourRoutes',
      type: 'array',
      label: 'Duration-based itinerary options',
      fields: [
        {
          name: 'duration',
          type: 'text',
          required: true,
          admin: {
            placeholder: '2 hours',
          },
        },
        {
          name: 'points',
          type: 'array',
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'mapImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

// Simplified for public demonstration:
// - Access control is intentionally generic.
// - No private fields, internal notes, IDs, URLs, or real route records are included.


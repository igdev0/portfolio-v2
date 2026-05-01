import { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: {
    group: 'navigation',
  },
  fields: [
    {
      name: 'nav',
      type: 'array',
      fields: [
        {
          type: 'group',
          label: "Link",
          fields: [
            {
              name: 'text',
              minLength: 3,
              maxLength: 10,
              required: true,
              type: 'text',
            },
            {
              name: 'href',
              minLength: 5,
              required: true,
              type: 'text',
            },
            {
              name: 'external',
              type: 'checkbox',
            },
          ],
        },
      ],
    },
  ],
}
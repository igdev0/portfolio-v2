import { GlobalConfig } from 'payload'

export const Page: GlobalConfig = {
  slug: 'page',
  label: "Page",
  fields: [
    {
      name: 'navbar',
      label: "Navigation Bar",
      type: 'blocks',
      blockReferences: ['navbar'],
      localized: true,
      blocks: []
    },
    {
      name: 'bio',
      type: 'richText',
      label: 'Bio',
      localized: true,
    },
    {
      name: 'skills',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
      ],
    },
  ],
}

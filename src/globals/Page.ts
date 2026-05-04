import { GlobalConfig } from 'payload'

export const Page: GlobalConfig = {
  slug: 'page',
  label: 'Page',
  fields: [
    {
      name: 'block',
      admin: {
        description: "Choose from 60+ atomic components.",
      },
      label: 'Add block',
      type: 'blocks',
      blockReferences: ['navbar', 'hero', 'link'],
      localized: true,
      blocks: [],
    },
  ],
}

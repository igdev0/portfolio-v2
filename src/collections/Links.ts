import type { CollectionConfig } from 'payload'
import { LinkField } from '@/blocks/link'

export const Links: CollectionConfig = {
  slug: 'links',
  admin: {
    useAsTitle: "text",
    defaultColumns: ['text', 'href'],
  },
  fields: [
    LinkField,
  ],
}

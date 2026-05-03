import type { CollectionConfig, Field } from 'payload'
import { dynamicIconImports, IconName } from 'lucide-react/dynamic'

export const IconOptions = Object.keys(dynamicIconImports) as IconName[]

export const LinkField: Field = {
  name: 'link',
  type: 'group',
  localized: true,
  fields: [
    {
      type: 'row',
      admin: {
        style: {
          alignItems: 'center',
        },
      },
      fields: [
        {
          name: 'href',
          type: 'text',
        },
        {
          name: 'text',
          type: 'text',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: IconOptions,
        },
        {
          name: 'icon-position',
          label: 'Icon Position',
          type: 'select',
          defaultValue: 'left',
          options: ['left', 'right'],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'external',
          label: 'External',
          type: 'checkbox',
          admin: {
            style: {
              display: 'flex',
              alignItems: 'flex-end',
            },
          },
        },
      ],
    },
  ],
}

export const Links: CollectionConfig = {
  slug: 'links',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.link?.text) {
          data.title = data.link.text
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    LinkField,
  ],
}
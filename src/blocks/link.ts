import { Block } from 'payload'

export const LinkBlock: Block = {
  slug: 'link',
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
          type: 'text',
          admin: {
            components: {
              Field: "@/components/admin/icon-picker"
            }
          }
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

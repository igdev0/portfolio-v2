import { Block, Field } from 'payload'

export const HeroField: Field = {
  type: 'group',
  name: 'hero',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'group',
          fields: [
            {
              type: 'text',
              name: 'title',
              maxLength: 100,
            },
            {
              type: 'textarea',
              name: 'statement',
            },
          ],
        },
        {
          type: 'upload',
          name: 'avatar',
          relationTo: 'media',
          admin: {
            className: 'flex-0',
          },
        },
      ],
    },
  ],
}

export const Hero: Block = {
  slug: 'hero',
  fields: [HeroField],
}

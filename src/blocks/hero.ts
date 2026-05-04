import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'group',
          name: 'content',
          fields: [
            {
              type: 'text',
              name: 'title',
              maxLength: 100,
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

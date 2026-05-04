import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

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
            {
              type: 'richText',
              editor: lexicalEditor(),
              name: 'statement',
            },
          ],
        },
        {
          type: 'upload',
          name: 'avatar',
          relationTo: 'media',
        },
      ],
    },
  ],
}

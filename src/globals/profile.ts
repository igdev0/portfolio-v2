import { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
  fields: [
    {
      name: "bio",
      type: 'richText',
      label: 'Bio',
    },
    {
      name: 'skills',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: "text",
          label: 'Name',
        },
      ],
    }
  ],
}

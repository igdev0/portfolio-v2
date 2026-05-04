import { GlobalConfig } from 'payload'
import { NavbarField } from '@/blocks/navbar'
import { HeroField } from '@/blocks/hero'

export const Page: GlobalConfig = {
  slug: 'page',
  label: 'Page',
  fields: [
    NavbarField,
    HeroField,
    {
      name: "blocks",
      type: "richText",
    }
    // {
    //   name: 'block',
    //   admin: {
    //     description: "Choose from 60+ atomic components.",
    //   },
    //   label: 'Add block',
    //   type: 'blocks',
    //   blockReferences: ['navbar', 'hero', 'link'],
    //   localized: true,
    //   blocks: [],
    // },
  ],
}

import { Block } from 'payload'

export const LinkBlock: Block = {
  slug: "link",
  fields: [
    {
      name: "text",
      type: "text"
    },
    {
      name: "href",
      type: "text",
    }
  ]
}
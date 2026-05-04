import { Block, Field } from 'payload'


export const NavbarField: Field = {
  name: "navbar",
  type: "group",
  fields: [
    {
      name: "brand",
      type: "upload",
      relationTo: 'media'
    },
    {
      name: "links",
      type: "relationship",
      relationTo: 'links',
      hasMany: true
    }
  ]
}

const NavbarBlock: Block = {
  slug: 'navbar',
  fields: [NavbarField],
}

export default NavbarBlock;
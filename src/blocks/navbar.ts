import { Block } from 'payload'

export const NavbarLink = [];

const NavbarBlock: Block = {
  slug: "navbar",
  fields: [
    {
      name: "links",
      type: "relationship",
      relationTo: "links",
      hasMany: true,
    }
  ]
}

export default NavbarBlock;
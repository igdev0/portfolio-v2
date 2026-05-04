import { Block } from 'payload'


const NavbarBlock: Block = {
  slug: 'navbar',
  fields: [
    {
      name: 'brand',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'links',
      type: 'relationship',
      relationTo: 'links',
      hasMany: true
    },
  ],
}

export default NavbarBlock;
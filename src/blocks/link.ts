import { Block } from 'payload'
import { dynamicIconImports } from 'lucide-react/dynamic'

const LinkBlock: Block = {
  slug: 'link',
  fields: [
    {
      name: 'icon',
      type: 'select',
      options: Object.keys(dynamicIconImports),
    },
    {
      name: 'href',
      type: 'text',
    },
  ],
}

export default LinkBlock

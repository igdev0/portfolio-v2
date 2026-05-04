import { postgresAdapter } from '@payloadcms/db-postgres'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Page } from '@/globals/Page'
import NavbarBlock from '@/blocks/navbar'
import { Links } from '@/collections/Links'
import { Hero } from '@/blocks/hero'
import { LinkBlock } from '@/blocks/link'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  localization: {
    locales: ['en', 'ro'],
    defaultLocale: 'en',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  blocks: [NavbarBlock, Hero, LinkBlock],
  globals: [Page],
  collections: [Users, Media, Links],
  editor: lexicalEditor({
    features({ defaultFeatures, rootFeatures }) {
      return [...defaultFeatures, BlocksFeature({ blocks: [NavbarBlock, Hero, LinkBlock] })]
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})

import React from 'react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { Converted } from '@/app/(frontend)/converter'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const page = await payload.findGlobal({ locale: 'en', slug: 'page' })

  return <Converted lexicalData={page.blocks as SerializedEditorState} />
}

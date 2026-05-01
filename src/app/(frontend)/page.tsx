import React from 'react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers });
  const profile = await payload.findGlobal({ slug: 'profile' })
  const html = convertLexicalToHTML({ data: profile.bio })
  return (
    <div className="p-2">
      <h1>Bio:</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <h1 className="mt-4">Skills:</h1>
      {profile.skills?.map((skill) => (
        <div key={skill.id}>{skill.name}</div>
      ))}
    </div>
  )
}

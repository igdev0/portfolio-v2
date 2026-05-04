import React from 'react'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Navbar from '@/app/(frontend)/components/navbar/navbar'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const page = await payload.findGlobal({ locale: 'en', slug: 'page' });
  console.log(page)
  return (
    <main>
      {/*<Navbar/>*/}
    </main>
  )
}

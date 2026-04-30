import React from 'react'
import "@/styles/global.css"

import { Inter } from 'next/font/google'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}
const inter = Inter({weight: ["600", "400"]})
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}

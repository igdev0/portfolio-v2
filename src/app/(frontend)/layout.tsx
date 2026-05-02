import React from 'react'
import "@/styles/global.css"
import { Inter } from 'next/font/google'

export const metadata = {
  description: ``,
  title: "IGDev's portfolio",
}

const inter = Inter({weight: ["600", "400"]})
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}

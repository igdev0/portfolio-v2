import React from 'react'
import '@/styles/global.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  description: ``,
  title: "IGDev's portfolio",
}

const inter = Inter({ weight: ['600', '400'] })
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider defaultTheme="system" enableSystem={true} enableColorScheme={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import React from 'react'
import AppProviders from '@/app/(frontend)/providers'
import { Server } from 'styletron-engine-monolithic'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const styletronServer = new Server();
  const sheets = styletronServer.getStylesheets()
  return (
    <html lang="en">
      <head>
        {sheets.map((sheet, i) => {
          return (
            <style
              key={i}
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
            />
          )
        })}
      </head>
      <body>
        <AppProviders>
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  )
}

'use client'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, LightTheme } from 'baseui'
import React, { PropsWithChildren } from 'react'
import { Client } from 'styletron-engine-monolithic'

interface AppProps extends PropsWithChildren {}
export default function AppProviders(props: AppProps) {
  const [engine, setEngine] = React.useState<Client | null>(null)
  React.useEffect(() => {
    const client = new Client()
    setEngine(client)
  }, [])

  if (!engine) return null

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{props.children}</BaseProvider>
    </StyletronProvider>
  )
}

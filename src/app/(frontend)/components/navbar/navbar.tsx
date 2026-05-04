'use client'
import Container from '@/app/(frontend)/components/container/container'
import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/dist/client/link'
import { Button } from '@/components/ui/button'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Page } from '@/payload-types'

export default function Navbar(props: Page['navbar']) {
  const theme = useTheme()
  return (
    <nav className="border-b border-border">
      <Container className="flex items-center justify-between h-10">
        <Link
          className="brand"
          href="/"
          dangerouslySetInnerHTML={{
            __html: `<span><</span>IGDev<span>/></span>`,
          }}
        />
        <div className="h-fit flex items-center gap-3">
          {props?.links
            ?.filter((item) => typeof item !== 'number')
            ?.map((item) => (
              <Link className="nav-link" href={item.href} key={item.id}>
                {item['icon-position'] === 'left' && (
                  <DynamicIcon name={item.icon as keyof object} />
                )}
                {item.text}
                {item['icon-position'] === 'right' && (
                  <DynamicIcon name={item.icon as keyof object} />
                )}
              </Link>
            ))}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')
            }}
          >
            <Sun />
          </Button>
        </div>
      </Container>
    </nav>
  )
}

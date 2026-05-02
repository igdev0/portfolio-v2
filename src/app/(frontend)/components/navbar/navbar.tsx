'use client'
import { Navigation } from '@/payload-types'
import Container from '@/app/(frontend)/components/container/container'
import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/dist/client/link'
import { Button } from '@/components/ui/button'

export default function Navbar(props: Navigation) {
  const theme = useTheme()

  return (
    <nav className="border-b border-border">
      <Container>
        {props.nav?.map((item) => (
          <Link href={item.href} key={item.id}>
            {item.text}
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
      </Container>
    </nav>
  )
}

"use client";
import { Navigation } from '@/payload-types'
import Container from '@/app/(frontend)/components/container/container'
import { Toggle } from '@/components/ui/toggle'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Link from 'next/dist/client/link'

export default function Navbar(props: Navigation) {
  const theme = useTheme();

  return (
    <nav className="border-b border-border">
      <Container>
        {props.nav?.map((item) => (
          <Link href={item.href} key={item.id}>
            {item.text}
          </Link>
        ))}
        <Toggle
          onClick={() => {
            theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')
          }}
          render={(props, state) => (
            <button className={cn(props.className)} {...props}>
              <Sun />
            </button>
          )}
        />
      </Container>
    </nav>
  )
}

"use client";
import { Navigation } from '@/payload-types'
import { Link, useTheme } from '@payloadcms/ui'
import Container from '@/app/(frontend)/components/container/container'
import { Toggle } from '@/components/ui/toggle'
import { Moon, Sun } from 'lucide-react'

export default function Navbar(props: Navigation) {
  const theme = useTheme();

  console.log(theme)
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
            theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark');
          }}
          render={(props) => (
            <button {...props}>
              <Sun className="visible dark:hidden" />
              <Moon className="hidden dark:visible" />
            </button>
          )}
        />
      </Container>
    </nav>
  )
}

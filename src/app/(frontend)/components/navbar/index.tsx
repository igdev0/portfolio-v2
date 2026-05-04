'use client'
import Container from '@/app/(frontend)/components/container/container'
import { CircleX, Menu, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/dist/client/link'
import { Button } from '@/components/ui/button'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Page } from '@/payload-types'
import { Url } from 'next/dist/shared/lib/router/router'
import {
  Drawer,
  DrawerClose,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTrigger,
} from '@/components/ui/drawer'
import "./styles.css"

export default function Navbar(props: Page['navbar']) {
  const theme = useTheme()
  return (
    <nav className="border-b border-border sticky-top">
      <Container className="flex items-center justify-between h-10">
        <Link
          className="brand"
          href="/"
          dangerouslySetInnerHTML={{
            __html: `<span><</span>IGDev<span>/></span>`,
          }}
        />
        <div className="h-fit flex items-center gap-1">
          <div className="hidden lg:flex gap-6">
            {props?.links
              ?.filter((item) => typeof item !== 'number')
              ?.map((item) => (
                <Link className="nav-link" href={item.href as Url} key={item.id}>
                  {item['icon-position'] === 'left' && (
                    <DynamicIcon name={item.icon as keyof object} />
                  )}
                  {item.text}
                  {item['icon-position'] === 'right' && (
                    <DynamicIcon name={item.icon as keyof object} />
                  )}
                </Link>
              ))}
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')
            }}
          >
            <Sun />
          </Button>
          <Drawer position="right">
            <DrawerTrigger>
              <Menu className="visible lg:hidden" />
            </DrawerTrigger>
            <DrawerPopup>
              <DrawerHeader>
                <DrawerClose className="flex justify-end">
                  <CircleX />{' '}
                </DrawerClose>
              </DrawerHeader>
              <DrawerPanel className="flex flex-col gap-4">
                {props?.links
                  ?.filter((item) => typeof item !== 'number')
                  ?.map((item) => (
                    <DrawerClose key={item.id}>
                      <Link className="nav-link" href={item.href as Url} key={item.id}>
                        {item['icon-position'] === 'left' && (
                          <DynamicIcon name={item.icon as keyof object} />
                        )}
                        {item.text}
                        {item['icon-position'] === 'right' && (
                          <DynamicIcon name={item.icon as keyof object} />
                        )}
                      </Link>
                    </DrawerClose>
                  ))}
              </DrawerPanel>
            </DrawerPopup>
          </Drawer>
        </div>
      </Container>
    </nav>
  )
}

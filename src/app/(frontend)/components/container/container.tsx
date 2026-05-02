import { ForwardedRef, PropsWithChildren } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const containerVariants = cva('container', {
  variants: {
    variant: {
      bordered: 'border-x border-(--border) mx-auto px-4 md:px-8',
    },
  },
  defaultVariants: {
    variant: 'bordered',
  },
})

export interface ContainerProps extends PropsWithChildren, VariantProps<typeof containerVariants> {
  name?: string
  className?: string
  ref?: ForwardedRef<HTMLDivElement>
}

export default function Container(props: ContainerProps) {
  const { children, className, name = 'default', ...variants } = props
  return (
    <div className="px-4 md:px-8">
      <div
        className={`@container/${name} ${containerVariants(variants)}` + ` ${className}`}
        ref={props?.ref ?? null}
      >
        {children}
      </div>
    </div>
  )
}

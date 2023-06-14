import classNames from 'classnames'
import { ReactNode } from 'react'

type GoodProps = {
  children?: ReactNode
  className?: string
}

export function Good({ children, className }: GoodProps) {
  return (
    <button className={classNames('m-6 rounded border p-4', className)}>
      {children}
    </button>
  )
}

type GoodWithLinkProps = GoodProps & { href: string; classNameLink?: string }

export function GoodWithLink({
  children,
  className,
  href,
  classNameLink,
}: GoodWithLinkProps) {
  return (
    <button className={classNames('m-6 rounded border p-4', className)}>
      <a href={href} className={classNameLink}>
        {children}
      </a>
    </button>
  )
}

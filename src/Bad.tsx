import classNames from 'classnames'
import { ReactNode } from 'react'

type BadProps = {
  children?: ReactNode
  className?: string
}

const styles = {
  button: {
    default: 'm-6 rounded border p-4',
  },
}

export function Bad({ children, className }: BadProps) {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  )
}

type BadWithLinkProps = BadProps & { href: string; classNameLink?: string }

export function BadWithLink({
  children,
  className,
  href,
  classNameLink,
}: BadWithLinkProps) {
  return (
    <button className={classNames('m-6 rounded border p-4', className)}>
      <a href={href} className={classNameLink}>
        {children}
      </a>
    </button>
  )
}

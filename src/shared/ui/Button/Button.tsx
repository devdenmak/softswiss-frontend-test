import clsx from 'clsx'

import './Button.scss'

export type IButtonProps = {
  href?: string
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'primary-outlined' | 'primary-ghost'
  disabled?: boolean
  loading?: boolean
  tag?: 'button' | 'div'
}

const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  tag = 'button',
  href,
}: IButtonProps) => {
  const Tag = tag

  const classes = clsx('button', `button--variant-${variant}`, {
    'button--disabled': disabled,
    'button--loading': loading,
  })

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <Tag className={classes}>
      <span>{children}</span>
    </Tag>
  )
}

export default Button

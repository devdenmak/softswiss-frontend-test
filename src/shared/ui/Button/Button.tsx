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
  size?: 'm' | 'l'
}

const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  tag = 'button',
  href,
  className,
  size = 'm',
}: IButtonProps) => {
  const Tag = tag

  const classes = clsx(
    'button',
    `button--variant-${variant}`,
    `button--size-${size}`,
    {
      'button--disabled': disabled,
      'button--loading': loading,
    },
    className,
  )

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

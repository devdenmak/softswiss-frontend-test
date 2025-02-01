import { HTMLProps } from 'react'
import cn from 'clsx'

import './Title.scss'

export type ITitleProps = HTMLProps<HTMLHeadingElement> & {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: 'inherit'
  textSize?: 's' | 'm' | 'l'
}

const Title: React.FC<ITitleProps> = ({
  children,
  tag = 'h2',
  color = 'main',
  textSize = 'm',
  ...rest
}) => {
  const Tag = tag

  return (
    <Tag className={`${cn('title', `title--color-${color}`, `title--size-${textSize}`)}`} {...rest}>
      {children}
    </Tag>
  )
}

export default Title

import cn from 'clsx'
import { HTMLProps } from 'react'

import './Container.scss'

export type IContainerProps = HTMLProps<HTMLElement> & {
  size?: 'm' | 'infinity'
}

const Container: React.FC<IContainerProps> = ({ children, size = 'm', ...props }) => {
  return (
    <section className={cn('container', `container--size-${size}`)} {...props}>
      {children}
    </section>
  )
}

export default Container

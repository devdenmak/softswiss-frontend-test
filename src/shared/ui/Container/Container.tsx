import cn from 'clsx'
import { HTMLProps } from 'react'

import './Container.scss'

export type IContainerProps = HTMLProps<HTMLDivElement> & {
  size?: 'm' | 'infinity'
}

const Container: React.FC<IContainerProps> = ({ children, size = 'm', className, ...props }) => {
  return (
    <div className={cn('container', `container--size-${size}`, className)} {...props}>
      {children}
    </div>
  )
}

export default Container

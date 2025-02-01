import clsx from 'clsx'
import { HTMLProps } from 'react'

import { Container } from '../../../shared/ui/Container'

const Intro: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  return (
    <section className={clsx('intro', className)} {...rest}>
      <Container>Intro</Container>
    </section>
  )
}

export default Intro

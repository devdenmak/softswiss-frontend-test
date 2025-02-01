import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { Container } from '../../../shared/ui/Container'

const SpaceJourney: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  return (
    <section className={clsx('space-journey', className)} {...rest}>
      <Container>SpaceJourney</Container>
    </section>
  )
}

export default SpaceJourney

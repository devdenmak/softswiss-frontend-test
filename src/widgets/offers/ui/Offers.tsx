import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { Container } from '../../../shared/ui/Container'
import { useOffers } from '../hooks'
import { IOffer } from '../config'
import { Title } from '../../../shared/ui/Title'
import { getCardSize } from '../lib'

const Offers: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  const offersData = useOffers()

  return (
    <section className={clsx('offers', className)} {...rest}>
      <Container>
        <Title tag="h2">Offers</Title>

        <div className="offers__grid">
          {offersData.map((offer, idx) => (
            <OfferCard offer={offer} size={getCardSize(idx + 1)} />
          ))}
        </div>
      </Container>
    </section>
  )
}

type IOfferProps = {
  offer: IOffer
  size: 'md' | 'lg'
}

const OfferCard = ({ offer: { title, description }, size }: IOfferProps) => {
  return (
    <article className={clsx('offer', `offer--size-${size}`)}>
      <Title>{title}</Title>
      <p>{description}</p>
    </article>
  )
}

export default Offers

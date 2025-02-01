import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { Container } from '../../../shared/ui/Container'
import { useOffers } from '../hooks'
import { IOffer } from '../config'
import { Title } from '../../../shared/ui/Title'
import { getCardSize } from '../lib'
import { Button } from '../../../shared/ui/Button'
import { getBackgroundImage } from '../../../shared/lib/getBackgroundImage'
import variables from '../../../shared/scss/abstracts/variables.export.scss'

import './Offers.scss'

const Offers: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  const offersData = useOffers()

  return (
    <section className={clsx('offers', className)} {...rest}>
      <Container>
        <Title className="offers__title" textSize="s" tag="h2">
          Offers
        </Title>

        <div className="offers__grid">
          {offersData.map((offer, idx) => {
            const size = getCardSize(idx + 1)

            return (
              <OfferCard
                key={idx}
                className={`offers__grid-cell offers__grid-cell--size-${size}`}
                offer={offer}
                size={size}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}

type IOfferProps = {
  offer: IOffer
  size: 'm' | 'l'
  className?: string
}

const OfferCard = ({ offer: { title, description, images }, size, className }: IOfferProps) => {
  const { gradientWhiteToBlackHorizontal } = variables

  const backgroundImage = getBackgroundImage(`${images.src} 1x, ${images.src2x} 2x`)

  return (
    <article
      style={{ backgroundImage: `${gradientWhiteToBlackHorizontal}, ${backgroundImage}` }}
      className={clsx('offer', `offer--size-${size}`, className)}
    >
      <Title className="offer__title" textSize={size === 'l' ? 'xl' : 'm'} tag="h3">
        {title}
      </Title>

      <p className="offer__description">{description}</p>

      <Button variant="primary-outlined" className="offer__button">
        Learn more
      </Button>
    </article>
  )
}

export default Offers

import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { Container } from '../../../shared/ui/Container'
import { Title } from '../../../shared/ui/Title'

import './SpaceJourney.scss'

const SpaceJourney: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  return (
    <section className={clsx('space-journey', className)} {...rest}>
      <Container>
        <Title className="space-journey__title" textSize="s" tag="h2">
          Embark on a space journey
        </Title>

        <div className="space-journey__body">
          <input
            defaultChecked
            className="space-journey__input"
            aria-label="Show Read More Button"
            id="read-more"
            type="checkbox"
          />

          <label className="space-journey__button" htmlFor="read-more">
            Read more
          </label>

          <p className="space-journey__text">
            Traveling into space is one of the most exciting and unforgettable adventures that can
            change your life forever. And if you have ever dreamed of exploring stars, planets and
            galaxies, then our company is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all the secrets of the
            universe. We guarantee that every moment in space will be filled with incredible
            impressions, excitement and new discoveries. Our team of professionals takes care of
            your safety and comfort so that you can fully enjoy your adventure in space. We offer
            various options for space excursions.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default SpaceJourney

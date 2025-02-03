import clsx from 'clsx'
import { HTMLProps } from 'react'

import { getBackgroundImage } from '../../../shared/lib/getBackgroundImage'
import { Container } from '../../../shared/ui/Container'
import { Title } from '../../../shared/ui/Title'
import { Button } from '../../../shared/ui/Button'
import BgImage from '../images/intro.jpg'
import BgImage2x from '../images/intro@2x.jpg'
import ImageEarth from '../images/earth.png'
import ImageEarth2x from '../images/earth@2x.png'
import ImageRocket from '../../../shared/images/rocket.png'
import ImageRocket2x from '../../../shared/images/rocket@2x.png'
import variables from '../../../shared/scss/abstracts/variables.export.scss'
import { Image } from '../../../shared/ui/Image'

import './Intro.scss'

const Intro: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  const { gradientTransparentToBlackHorizontal } = variables

  const backgroundImage = getBackgroundImage(`${BgImage} 1x, ${BgImage2x} 2x`)
  const backgroundImageEarth = getBackgroundImage(`${ImageEarth} 1x, ${ImageEarth2x} 2x`)

  return (
    <section
      style={{ backgroundImage: `${gradientTransparentToBlackHorizontal}, ${backgroundImage}` }}
      className={clsx('intro', className)}
      {...rest}
    >
      <Container className="intro__container">
        <div className="intro__inner">
          <div className="intro__box">
            <Title className="intro__title" textSize="l" tag="h1">
              Discover the vast expanses of <span>space</span>
            </Title>

            <p className="intro__description">
              Where the possibilities are <span>endless!</span>
            </p>

            <Button size="l" className="intro__button">
              Learn more
            </Button>
          </div>
        </div>

        <div style={{ backgroundImage: backgroundImageEarth }} className="intro__earth">
          <div className="intro__rocket">
            <Image
              className="intro__rocket-image"
              width={130}
              height={99}
              src={ImageRocket}
              src2x={ImageRocket2x}
              alt="Image Rocket"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Intro

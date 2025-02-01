import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { Container } from '../../../shared/ui/Container'
import Rocket from '../../../shared/images/rocket.png'
import Rocket2x from '../../../shared/images/rocket@2x.png'
import { Image } from '../../../shared/ui/Image'

import './Footer.scss'

const Footer: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  return (
    <footer className={clsx('footer', className)} {...rest}>
      <Container>
        <div className="footer__rocket">
          <Image
            className="footer__rocket-image"
            src={Rocket}
            src2x={Rocket2x}
            width={100}
            height={76}
            alt="Footer Logo"
          />
        </div>

        <p className="footer__text">Exciting space adventure!</p>
      </Container>
    </footer>
  )
}

export default Footer

import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import { ReactComponent as Logo } from '../images/logo.svg'

import { CartButton } from './CartButton'
import { useNavigation } from '../hooks'

import './Header.scss'

const Header: React.FC<HTMLProps<HTMLElement>> = ({ className, ...rest }) => {
  const navigationData = useNavigation()

  return (
    <header className={clsx('header', className)} {...rest}>
      <div className="header__inner">
        <div className="header__left">
          <a href="/" className="header__logo-link">
            <Logo className="header__logo" />
          </a>
        </div>

        <div className="header__right">
          <input
            aria-label="Open Menu Button"
            className="header__burger-checkbox"
            id="burger"
            type="checkbox"
          />

          <label className="header__burger-icon" htmlFor="burger">
            <span className="header__burger-icon-inner">
              <span className="header__burger-icon-line header__burger-icon-line--1"></span>
              <span className="header__burger-icon-line header__burger-icon-line--2"></span>
              <span className="header__burger-icon-line header__burger-icon-line--3"></span>
            </span>
          </label>

          <div className="header__menu">
            <nav className="header__navigation">
              <ul className="header__navigation-list">
                {navigationData.map(({ href, name }) => (
                  <li key={name} className="header__navigation-item">
                    <a href={href} className="header__navigation-link">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header__cart-button">
              <CartButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

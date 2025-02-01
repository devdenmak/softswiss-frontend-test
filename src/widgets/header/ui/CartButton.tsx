import { ReactComponent as CartIconWhite } from '../images/cart-white.svg'
import { ReactComponent as CartIconColored } from '../images/cart-colored.svg'

import './CartButton.scss'

export const CartButton = () => {
  return (
    <button aria-label="Add To Cart Button" className="cart-button">
      <span className="cart-button__text">Add To Cart</span>

      <span className="cart-button__icons">
        <CartIconWhite className="cart-button__icon cart-button__icon--white" />
        <CartIconColored className="cart-button__icon cart-button__icon--colored" />
      </span>
    </button>
  )
}

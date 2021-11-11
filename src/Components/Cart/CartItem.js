import React, { useContext } from 'react'

import { useCartState } from '../../Contexts/CartContext'

import './Cart.css'

function CartItem({ cartItem }) {

  const { name, price, id, img } = cartItem

  const { setItems } = useCartState()


  return (
    <div className='cart-item-wrap'>

      <div className='col'>
        {/* img */}
        <h1 className='no-margin'>{img}</h1>
        {/* name */}
        <h3 className='no-margin cart-list-name'>{name}</h3>
      </div>
      {/* price */}
      <h6 className='price'>{price}</h6>

      <button className='cart-delete-button' onClick={() => {

        setItems(i => {
          return i.filter(i => i.id !== id)
        })

      }}>❌</button>
    </div>
  )
}

export default CartItem

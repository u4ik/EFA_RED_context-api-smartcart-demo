import React, { useState, useContext } from 'react'

import CartItem from './CartItem'

import {CartContext} from '../../Contexts/CartContext'

function CartList() {

    const {items } = useContext(CartContext)

    return (
        <div>
            <h2>My Cart</h2>
            {items.map(ci => {
                return (
                    <CartItem key={ci.id} cartItem={ci}/>
                )
            })}

        </div>
    )
}

export default CartList

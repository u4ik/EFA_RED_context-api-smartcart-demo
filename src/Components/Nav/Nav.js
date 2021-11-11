import React, { useContext } from 'react'
import './Nav.css'


import {CartContext} from '../../Contexts/CartContext'

function Nav() {

    const {items, total} = useContext(CartContext)
    return (
        <div className='nav-header'>
            <h1 className='nav-cart-logo'>🛒</h1>
            <h1 className='nav-cart-title'>SmartCart</h1>

            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>

                <li className=''>
                    <div className='row'>
                        <span className='nav-cart'>🛒</span>
                      
                        <span className='item-count'>{items.length}</span>
                    </div>
                </li>

                {
                    items.length > 0 &&
                    <li>
                        <div className='row'>

                        <span className='nav-cart'>Total:</span>
                        <span className='nav-cart-total'>{total}</span>

                        </div>

                    </li>

                }

   
                
            </ul>
        </div>
    )
}

export default Nav

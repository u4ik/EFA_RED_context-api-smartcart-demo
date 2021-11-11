import { useState, createContext, useEffect, useCallback, useContext } from 'react'



export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Sandals ",
            img: "👡",
            price: "$8"
        },
        {
            id: 2,
            name: "Sun Glasses",
            img: "🕶️",
            price: "$15"
        },
        {
            id: 3,
            name: "Bathing Suit",
            img: "🩳",
            price: "$25"
        },
        {
            id: 4,
            name: "Chair",
            img: "💺",
            price: "$20"
        },
        {
            id: 5,
            name: "Umbrella",
            img: "⛱️",
            price: "$20"
        }

    ])

    const [total, setTotal] = useState(0)


    const getTotal = useCallback(() => {
        let result = 0;
        items.forEach(i => result += +i.price.slice(1))
        result !== 0 && setTotal(result)
    },[items])

    useEffect(() => {
        getTotal()
    },[items, getTotal])

    return (
        <CartContext.Provider value={{ items, setItems, total }}>

            {children}

        </CartContext.Provider>

    )

}


export const useCartState = () => useContext(CartContext)
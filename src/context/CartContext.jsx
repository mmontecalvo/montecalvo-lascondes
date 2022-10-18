import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export function CartContext({children}) {

    const [ cart, setCart ] = useState([]);
    const [ quantity, setQuantity ] = useState(0);
    const [ total, setTotal ] = useState(0);
    console.log(total);
    useEffect(() => {
        console.log(cart);
        let totalCart = 0;
        cart.forEach((item) => {
            totalCart += item.price * item.quantity;
        });
        setTotal(totalCart)
    }, [ cart ]);

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map((product) =>
                product.id === item.id ? (
                    {...product, quantity: product.quantity + qty}
                ) : (
                    product
                )
            )
            setCart(updatedCart);
        } else {
            setCart([...cart, {...item, quantity: qty}])
            setQuantity(quantity + 1)
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    }

    const clear = () => {
        setCart([]);
        setQuantity(0);
        setTotal(0);
    }

    const isInCart = (itemId) => cart.some((item) => item.id === itemId);

    return (
        <Context.Provider value={{ cart, quantity, total, addItem, removeItem, clear, isInCart }}>
            {children}
        </Context.Provider>
    )
}

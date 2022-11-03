import { createContext, useEffect, useState } from 'react';

export const Context = createContext();

export function CartContext({children}) {

    const [cart, setCart] = useState(() => {
		const storageCart = localStorage.getItem('Cart');
		const savedCart = JSON.parse(storageCart);
		return savedCart || [];
	});
    const [ quantity, setQuantity ] = useState(0);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        let qtyCart = 0;
        let totalCart = 0;
        cart.forEach((item) => {
            qtyCart += item.quantity;
            totalCart += item.price * item.quantity;
        });
        setQuantity(qtyCart);
        setTotal(totalCart)
        localStorage.setItem('Cart', JSON.stringify(cart));
    }, [ cart ]);

    const addItem = (item, qty) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map((product) =>
                product.id === item.id ? (
                    {...product, quantity: qty}
                ) : (
                    product
                )
            )
            setCart(updatedCart);
        } else {
            setCart([...cart, {...item, quantity: qty}])
            setQuantity(quantity + qty)
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
    
    // Estado que guarda la lista de productos para la barra buscadora del Navbar
    const [ data, setData ] = useState([]);
    const itemList = (list) => {
        setData(list);
    } 

    return (
        <Context.Provider value={{ cart, quantity, total, addItem, removeItem, clear, isInCart, data, itemList }}>
            {children}
        </Context.Provider>
    )
}

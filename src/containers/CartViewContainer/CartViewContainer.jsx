import { useContext } from 'react';
import { Context } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

function CartViewContainer() {

    const { quantity, cart, total, clear } = useContext(Context);

    return (
        <section className="mainContent cartView">
            {
                quantity === 0 ? (
                    <h1 className="cartView__message">Tu carrito está vacío. Para agregar productos presiona <Link to="/" className="message__link">aquí</Link>.</h1>
                ) : (
                    <>
                        <div className="cartView__header">
                            <h1 className="header__title">Mi carrito</h1>
                            <div className="header__links">
                                <Link to="/" className="link">Seguir comprando</Link>
                                <span className="clear" onClick={clear}>Vaciar carrito</span>
                            </div>
                        </div>
                        {
                            cart.map((product) => {
                                return <CartItem key={product.id} product={product} />
                            })
                        }
                        <div className="cartView__total">
                            <div className="total__container">
                                <h2 className="title">Total</h2>
                                <span className="total">${total}</span>
                            </div>
                            <button className="total__btn">Comprar</button>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default CartViewContainer

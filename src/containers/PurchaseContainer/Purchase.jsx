import React from 'react';
import CartItem from '../CartViewContainer/CartItem';
import { Link } from 'react-router-dom'

function Purchase({purchase}) {
    return (
        <>
            <div className="purchase__header">
                <h1 className="header__title">Compra: <span>{purchase.id}</span></h1>
                <div className="header__links">
                    <Link to="/" className="link">Volver a la página principal</Link>
                </div>
            </div>
            {
                purchase.items.map((product) => {
                    return <CartItem key={product.id} product={product} isOrderView={true} />
                })
            }
            <div className="purchase__total">
                <h2 className="title">Total: </h2>
                <span className="total">${purchase.total}</span>
            </div>
        </>
    )
}

export default Purchase

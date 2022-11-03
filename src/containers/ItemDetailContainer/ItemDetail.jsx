import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { Context } from '../../context/CartContext';

function ItemDetail({product}) {
    const [ showItemCount, setShowItemCount ] = useState(true);
    const { addItem } = useContext(Context);

    const onAdd = (counter) => {
        addItem(product, counter)
        setShowItemCount(false);
    }

    console.log(product)

    return (
        <article className="itemDetail" key={product.id}>
            { 
                product.title ? (
                    <>
                        <picture className="itemDetail__img">
                            <img src={product.image} alt={product.description} />
                        </picture>
                        <div className="itemDetail__info">
                            <h1 className="info__title">{product.title}</h1>
                            <p className="info__text">{product.description}</p>
                            <span className="info__stock">Stock disponible: {product.stock} {product.stock === 1 ? "unidad." : "unidades."}</span>
                            <span className="info__price">${product.price}</span>
                            <hr />
                            { showItemCount ? (
                                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} className="info__count" />
                                ) : (
                                <Link to="/cart">
                                    <button className="info__buy">Finalizar compra</button>
                                </Link>
                            )}
                        </div>
                    </>
                ) : (<h1 className="itemDetail__message">Produto no encontrado. <Link to="/" className="message__link">Volver a la página principal.</Link></h1>)
            }
        </article>
    )
}

export default ItemDetail

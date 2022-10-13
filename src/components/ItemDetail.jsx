import ItemCount from './ItemCount';

function ItemDetail({product, onAdd}) {
    return (
        <article className="itemDetail" key={product.id}>
            <picture className="itemDetail__img">
                <img src={product.image} alt={product.description} />
            </picture>
            <div className="itemDetail__info">
                <h1 className="info__title">{product.title}</h1>
                <p className="info__text">{product.description}</p>
                <span className="info__price">${product.price}</span>
                <hr />
                <ItemCount stock={5} initial={1} onAdd={onAdd} className="info__count" />
            </div>
        </article>
    )
}

export default ItemDetail

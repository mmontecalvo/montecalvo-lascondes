import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({stock, initial, onAdd}) {

    const [counter, setCounter] = useState(initial);

    const addProduct = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const subtractProduct = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="card__counter">
            <div className="counter">
                <RemoveIcon onClick={subtractProduct} className="counter__control"/>
                <span className="counter__number">{counter}</span>
                <AddIcon onClick={addProduct} className="counter__control"/>
            </div>
            <button disabled={stock === 0} onClick={() => onAdd(counter)} className="card__addCart">
                {stock === 0 ? "Sin stock" : "Agregar al carrito" }
            </button>
        </div>
    )
}

export default ItemCount

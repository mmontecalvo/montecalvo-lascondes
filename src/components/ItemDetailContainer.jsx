import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading ] = useState([true]);

    const { idProduct } = useParams();

    const onAdd = (counter) => {
        console.log(`Agregaste al carrito ${counter} productos!`)
    }

    useEffect(() => {
        const getItem = async () => {
            try{
                const answer = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
                const data = await answer.json();
                setProduct(data);
            }
            catch(error){
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }

        getItem();
    }, []);

    return (
        <section className="mainContent itemDetailContainer">
            {
                <>
                { loading ? <Spinner /> : <ItemDetail product={product} onAdd={onAdd} /> }
                </>
            }
        </section>
    )
}

export default ItemDetailContainer

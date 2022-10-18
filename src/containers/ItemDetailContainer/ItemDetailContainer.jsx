import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading ] = useState([true]);

    const { idProduct } = useParams();

    useEffect(() => {
        const getItem = async () => {
            try{
                const answer = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
                const data = await answer.json();
                const finalData = {...data, stock: Math.floor(Math.random() * 20)};
                setProduct(finalData);
            }
            catch(error){
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }

        getItem();
    }, [ idProduct ]);

    return (
        <section className="mainContent itemDetailContainer">
            {
                <>
                { loading ? <Spinner /> : <ItemDetail product={product} /> }
                </>
            }
        </section>
    )
}

export default ItemDetailContainer

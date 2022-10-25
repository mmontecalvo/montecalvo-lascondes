import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Spinner from '../../components/Spinner';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading ] = useState([true]);

    const { idProduct } = useParams();

    useEffect(() => {
        const productCollection = collection(db, 'products');
        const refDoc = doc(productCollection, idProduct);

        const getItem = async () => {
            try{
                const answer = await getDoc(refDoc);
                const dataDoc = {
                    id: answer.id,
                    ...answer.data()
                };
                setProduct(dataDoc);
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

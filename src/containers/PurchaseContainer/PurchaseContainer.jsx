import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Purchase from './Purchase';
import Spinner from '../../components/Spinner';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function PurchasesContainer() {
    const [ purchase, setPurchase ] = useState([]);
    const [ loading, setLoading ] = useState([true]);

    const { idPurchase } = useParams();

    useEffect(() => {
        const purchaseCollection = collection(db, 'sales');
        const refDoc = doc(purchaseCollection, idPurchase);

        const getItem = async () => {
            try{
                const answer = await getDoc(refDoc);
                const dataDoc = {
                    id: answer.id,
                    ...answer.data()
                };
                setPurchase(dataDoc);
            }
            catch(error){
                console.error(error);
            }
            finally{
                setLoading(false);
            }
        }

        getItem();
    }, [ idPurchase ]);

    return (
        <section className="mainContent purchasesContainer">
            {
                <>
                { loading ? <Spinner /> : <Purchase purchase={purchase}/> }
                </>
            }
        </section>
    )
}

export default PurchasesContainer

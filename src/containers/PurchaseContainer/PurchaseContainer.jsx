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
        <section className="mainContent purchaseContainer">
            {
                <>
                { loading ? <Spinner /> : 
                    ( purchase.items ? (
                            <Purchase purchase={purchase} />
                        ) : (
                            <div className="purchaseContainer__error">
                                <img src="https://cdn-icons-png.flaticon.com/512/1178/1178479.png" alt="" />
                                <h1 className="error__text">No hay ninguna compra asociada al código ingresado.</h1>
                            </div>
                        )
                    ) 
                }
                </>
            }
        </section>
    )
}

export default PurchasesContainer

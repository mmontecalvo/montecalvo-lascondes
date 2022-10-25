import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import ItemList from "./ItemList";
import Spinner from '../../components/Spinner';
import { Context } from '../../context/CartContext';

function ItemListContainer({greeting}) {

  const { itemList } = useContext(Context);

  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState([true]);

  const { idCategory } = useParams();

  useEffect(() => {
    const productCollection = collection(db, 'products');
    const q = query(productCollection, where('category', '==', (idCategory ? idCategory : '')));

    const getItem = async () => {
      try{
        const answer = await getDocs(idCategory ? q : productCollection);
        const dataDocs = answer.docs.map( item => {
          return {
            ...item.data(),
            id: item.id
          };
        })
        setProducts(dataDocs);
      }
      catch(error){
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    }

    getItem();
  }, [ idCategory ]);

  useEffect(() => {
    itemList(products);
  }, [ products, itemList ])

  return (
    <section className="mainContent itemListContainer">
      <h1>{greeting}</h1>
      {
        <>
        { loading ? <Spinner /> : <ItemList products={products} /> }
        </>
      }
    </section>
    )
}

export default ItemListContainer

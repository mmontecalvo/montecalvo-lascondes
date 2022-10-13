import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import Spinner from './Spinner';

function ItemListContainer({greeting}) {

  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState([true]);

  const { idCategory } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CAT = `${URL_BASE}/category/${idCategory}`;

  useEffect(() => {
    const getItem = async () => {
      try{
        const answer = await fetch( idCategory ? URL_CAT : URL_BASE );
        const data = await answer.json();
        setProducts(data);
      }
      catch(error){
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    }

    getItem();
  }, [idCategory]);

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

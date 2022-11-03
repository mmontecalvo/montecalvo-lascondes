import { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const Context = createContext();

export function CategoriesContext({children}) {
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
    const categoriesList = collection(db, 'categories');

    const getCategories = async () => {
        try{
            const answer = await getDocs(categoriesList);
            const dataDocs = answer.docs.map( category => {
                return {
                    ...category.data(),
                    id: category.id,
                }
            })
            setCategories(dataDocs);
        }
        catch(error){
            console.error(error);
        }
    }
        getCategories()
    }, [ ])
    
    return (
        <Context.Provider value={{categories}} >
            {children}
        </Context.Provider>
    )
}

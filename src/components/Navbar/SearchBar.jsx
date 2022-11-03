import { useState, useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function SearchBar() {
    const { data } = useContext(Context);
    const [ inputSearch, setInputSearch ] = useState('');

    const inputHandler = (e) => {
        let inputText = e.target.value.toLowerCase();
        setInputSearch(inputText); 
    };

    const filterData = data.filter((text) => {
        if (inputSearch === ''){
            return '';
        } else {
            return text.title.toLowerCase().includes(inputSearch);
        }
    });

    const clearInput = () => {
        setInputSearch('');
    }

    return (
        <div className="navbar__search">
            <SearchIcon className="search__icon"/>
            <input placeholder="Buscar..." type="search" className="search__input" onChange={inputHandler} value={inputSearch}  />
            {
                inputSearch !== '' && (
                    <ul className="search__list">
                        {
                            filterData.map((item) => {
                                return <Link to={"/producto/" + item.id} key={item.id} onClick={clearInput}><li>{item.title}</li></Link>;
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default SearchBar

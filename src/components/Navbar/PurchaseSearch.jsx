import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

function PurchaseSearch() {
    const [ inputIdPurchase, setInputIdPurchase ] = useState('');
    const [ showModal, setShowModal ] = useState(false);

    const handlerChange = (e) => {
        setInputIdPurchase(e.target.value);
    }

    const handlerClick = () => {
        setShowModal(!showModal);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="navbar__purchaseSearch">
            <ContentPasteSearchIcon className="purchaseSearch__icon" onClick={handlerClick} />
            {
                showModal &&
                (
                    <div className="purchaseSearch__modal">
                        <h1 className="modal__title">Buscar compra</h1>
                        <div className="modal__input">
                            <input type="text" placeholder="Ingresa el código de tu compra" onChange={handlerChange} required />
                            <Link to={inputIdPurchase ? ("/compras/" + inputIdPurchase) : "#"}>
                                <SearchIcon className="input__icon" onClick={closeModal} />
                            </Link>
                        </div>
                    </div>
                )
            } 
        </div>    
    )
}

export default PurchaseSearch

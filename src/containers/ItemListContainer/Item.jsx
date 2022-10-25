import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

function Item({product}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="card-info">
                <p className="text-title">{product.title}</p>
                <p className="text-body">{product.description}</p>
            </div>
            <div className="card-footer">
                <span className="text-price">${product.price}</span>
                <Link to={"/producto/" + product.id}>
                    <InfoIcon className="button-icon" />
                </Link>
            </div>
        </div>
    )
}

export default Item

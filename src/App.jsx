import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartViewContainer from './containers/CartViewContainer/CartViewContainer';
import PurchaseContainer from './containers/PurchaseContainer/PurchaseContainer'
import Footer from './components/Footer/Footer';
import Page404 from './containers/Page404/Page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { CategoriesContext } from './context/CategoriesContext';

function App() {

  const text = "¡Bienvenid@ a nuestra tienda!";

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <CategoriesContext>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={text}/>} />
              <Route path="/categoría/:idCategory" element={<ItemListContainer greeting={text}/>} />
              <Route path="/producto/:idProduct" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartViewContainer />} />
              <Route path="/compras/" element={<PurchaseContainer />} />
              <Route path="/compras/:idPurchase" element={<PurchaseContainer />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </CategoriesContext>
        </CartContext>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

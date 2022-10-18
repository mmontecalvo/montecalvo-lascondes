import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import CartViewContainer from './containers/CartViewContainer/CartViewContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';

function App() {

  const text = "¡Bienvenid@ a nuestra tienda!";

  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={text}/>} />
            <Route path="/categoría/:idCategory" element={<ItemListContainer greeting={text}/>} />
            <Route path="/producto/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartViewContainer />} />
            <Route path="*" element={<ItemListContainer greeting={text}/>} />
          </Routes>
        </CartContext>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartViewContainer from './components/CartViewContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const text = "¡Bienvenid@ a nuestra tienda!";

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={text}/>} />
          <Route path="/categoría/:idCategory" element={<ItemListContainer greeting={text}/>} />
          <Route path="/producto/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartViewContainer />} />
          <Route path="*" element={<ItemListContainer greeting={text}/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

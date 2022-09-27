import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const text = "¡Bienvenid@ a nuestra tienda!";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={text}/>
    </>
  );
}

export default App;

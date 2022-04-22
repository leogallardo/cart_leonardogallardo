import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer name="Leonardo Gallardo" greeting="Bienvenido a la tienda creada con coderhouse." />
    </>
  );
}

export default App;

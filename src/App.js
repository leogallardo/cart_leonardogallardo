import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <MainContent>
        <ItemListContainer name="Leonardo Gallardo" greeting="Bienvenido a la tienda creada con coderhouse."></ItemListContainer>
      </MainContent>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartItemsList from './components/CartItemsList';
import CartProvider from './context/CartContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <Navbar />
          <CartItemsList />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';
import CartConfirmation from './components/CartConfirmation';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/summary" element={<CartSummary />} />
            <Route path="/cart/confirmation" element={<CartConfirmation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import { useContext } from 'react';
import { CartContext } from './../context/CartContext';

const CartSave = () => {
  const { saveCart } = useContext(CartContext);

  const saveSaleHandler = (e) => {
    e.preventDefault();
    saveCart();
  };

  return (
    <div>
      <button onClick={saveSaleHandler} className="w-full block text-center bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
        Checkout
      </button>
    </div>
  );
};

export default CartSave;

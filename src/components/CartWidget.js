import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [cartItemsCounter, setCartItemsCounter] = useState();

  const cardItemsTotal = cartItems.reduce((s, a) => s + a.itemAmount, 0);

  useEffect(() => {
    setCartItemsCounter(cardItemsTotal);
  }, [cardItemsTotal]);

  return (
    <>
      {cardItemsTotal >= 1 && (
        <Link to="/cart" className="group flex items-center text-base font-medium">
          <svg
            className="flex-shrink-0 h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
          <span className="ml-2 text-sm font-medium text-white">{cartItemsCounter <= 9 ? cartItemsCounter : '+9'}</span>
        </Link>
      )}
    </>
  );
};

export default CartWidget;

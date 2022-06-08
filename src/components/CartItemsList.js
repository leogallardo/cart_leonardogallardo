import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../context/CartContext';

const CartItemsList = () => {
  const { cartItems, cartItemsAmount, emptyCart } = useContext(CartContext);

  return (
    <>
      {cartItemsAmount > 0 ? (
        <div className="bg-gray-100 pt-5 inset-x-0 pb-2 sm:pb-5 z-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg bg-indigo-600 shadow-lg sm:p-3">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                  <span className="flex p-2 rounded-lg bg-indigo-800">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="ml-3 mb-2 text-xs font-medium text-white">
                      Todo esto se va en la versión final, es para ir viendo en tiempo real cómo se agregan cosas al carrito. Eventualmente estará
                      como un menú.
                    </p>
                    <p className="ml-3 font-medium text-white">Items en el carrito:</p>
                    <p className="ml-3 font-medium text-white">
                      {cartItems.map((cartItem) => (
                        <span
                          key={cartItem.item.id}
                          className="mr-2 mt-2 inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          Item: {cartItem.item.id} - Amount: {cartItem.itemAmount}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="order-3 mt-2 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <button
                    onClick={() => {
                      emptyCart();
                    }}
                    type="button"
                    className="inline-block items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Clear cart
                  </button>
                  <Link
                    to="/cart"
                    className="ml-5 inline-block items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default CartItemsList;

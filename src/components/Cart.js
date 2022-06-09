import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartSave from './CartSave';
import ItemCount from './ItemCount';

const Cart = () => {
  const { cartItems, cartItemsAmount, cartSubtotal, cartShipping, cartTotal } = useContext(CartContext);

  return (
    <>
      {cartItemsAmount > 0 ? (
        <div className="max-w-2xl mx-auto pt-24 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 w-full">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12">Shopping Cart</h1>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section className="lg:col-span-7">
              <ul className="border rounded border-gray-200 divide-y divide-gray-200 bg-white">
                {cartItems.map((item) => (
                  <li key={item.item.id} className="p-4 lg:col-span-5 flex">
                    <div className="flex-shrink-0">
                      <img src={item.item.image} alt={item.item.name} className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48" />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                      <div className="mb-4">
                        <h3 className="text-sm mb-4">
                          <Link to={`../item/${item.item.id}`} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                            {item.item.name}
                          </Link>
                        </h3>

                        <div className="flex items-center mb-4">
                          <p className="text-base font-medium text-gray-900">${item.item.price}</p>
                          <div className="ml-4 pl-4 border-l border-gray-300">
                            <div className="flex items-center">
                              <div>
                                <div className="flex items-center">
                                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg className="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="grow">
                          <ItemCount itemData={item.item} hasTrashCan={false} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 p-4 bg-white border rounded border-gray-200 lg:mt-0 lg:col-span-5">
              <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">${cartSubtotal}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">{cartShipping === 0 ? 'Free' : `$${cartShipping}`}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate (IVA)</span>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">Tax free</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">${cartTotal}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <CartSave />
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">UPS</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Your cart is empty</h1>
                  <p className="mt-1 text-base text-gray-500">Add items to your cart by clicking on the button below.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link to="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Start shopping
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

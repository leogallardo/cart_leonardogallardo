import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [cartItemsCounter, setCartItemsCounter] = useState();
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(cartItems);
    let _subtotal = 0;

    for (const item of cartItems) {
      const itemTotal = item.item.price * item.itemAmount;
      _subtotal = _subtotal + itemTotal;
    }

    setSubtotal(_subtotal);
  }, [cartItems]);

  useEffect(() => {
    setShipping(() => {
      if (subtotal >= 10000) {
        return 0;
      } else {
        return 400;
      }
    });
  }, [subtotal]);

  useEffect(() => {
    setTotal(Number(subtotal) + Number(shipping));
  }, [subtotal, shipping]);

  const cardItemsTotal = cartItems.reduce((s, a) => s + a.itemAmount, 0);

  useEffect(() => {
    setCartItemsCounter(cardItemsTotal);
  }, [cardItemsTotal]);

  return (
    <>
      {cartItemsCounter > 0 ? (
        <div className="bg-gray-100">
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
              <section className="lg:col-span-7">
                <ul className="border rounded border-gray-200 divide-y divide-gray-200 bg-white">
                  {items.map((item) => (
                    <li key={item.item.id} className="flex p-4">
                      <div className="flex-shrink-0">
                        <img src={item.item.image} alt={item.item.name} className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48" />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <a href={item.item.id} className="font-medium text-gray-700 hover:text-gray-800">
                                  {item.item.name}
                                </a>
                              </h3>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">{item.item.price}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex">
                          <div className="grow">
                            <ItemCount itemData={item.item} hasTrashCan={false} />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-16 bg-white border rounded border-gray-200 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
                <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${subtotal}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">{shipping === 0 ? 'Free' : `$${shipping}`}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600">
                      <span>Tax estimate (IVA)</span>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">Tax free</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                    <dd className="text-base font-medium text-gray-900">${total}</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Checkout
                  </button>
                </div>
              </section>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 w-full h-screen flex flex-col items-center justify-center">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">UPS</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Your cart is empty</h1>
                  <p className="mt-1 text-base text-gray-500">Add items to your cart by clicking on the button below.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
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

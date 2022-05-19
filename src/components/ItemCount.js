import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ itemData, hasTrashCan }) => {
  const { cartItems, updateCart, removeFromCart } = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  const [leftButtonIsTrashCan, setLeftButtonIsTrashCan] = useState(false);
  const [inStock, setInStock] = useState(itemData.stock);

  // el inCart me sirve tenerlo acá, ya que lo necesito para mostrar/ocultar los botoncitos de agregar/quitar productos
  const [inCart, setInCart] = useState(false);
  // acá lo que hago es directamente vincular el amount que está en el carrito, con el amount que está en el count, para poder cambiar de páginas y cuando vuelvo siga estando sincronizado (en el ejemplo de stackblitz esto no pasaba)
  useEffect(() => {
    if (cartItems.filter((i) => i.item.id === itemData.id).length > 0) {
      // update the amount if item already existed
      const currentItemAmount = cartItems.findIndex((i) => i.item.id === itemData.id);
      setCounter(cartItems[currentItemAmount].itemAmount);
      setInCart(true);
    }
  }, [cartItems, itemData.id]);

  // acá veo si rendereo el tachito de basura o un minus en el contador
  useEffect(() => {
    if (hasTrashCan) {
      if (counter <= 1) {
        setLeftButtonIsTrashCan(true);
      } else {
        setLeftButtonIsTrashCan(false);
      }
    } else {
      setLeftButtonIsTrashCan(false);
    }
  }, [counter, hasTrashCan]);

  // when users click "+"
  const handleAdd = (e) => {
    e.preventDefault();
    const value = counter + 1;
    updateCart(itemData, value);
  };

  // when users click "-"
  const handleSubstract = (e) => {
    e.preventDefault();
    const value = counter - 1;
    updateCart(itemData, value);
  };

  // when users click the trash icon
  const handleRemove = (e) => {
    e.preventDefault();
    const value = counter - 1;
    setCounter(value);
    removeFromCart(itemData.id);
    setInCart(false);
  };

  return (
    <div className="flex items-center justify-center h50px">
      {inStock > 0 ? (
        <>
          {inCart ? (
            <>
              {leftButtonIsTrashCan ? (
                <button
                  onClick={handleRemove}
                  className="py-3 px-4 bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full rounded-l select-none cursor-pointer outline-none items-center justify-center"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 m-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleSubstract}
                  className={`py-3 px-4 bg-gray-300 text-gray-600 hover:bg-gray-400 h-full rounded-l select-none cursor-pointer outline-none items-center justify-center${
                    counter <= 1 && ' pointer-events-none opacity-75'
                  }`}
                >
                  <span className="m-auto text-2xl leading-4 font-thin">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              )}

              <span className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center justify-center text-gray-700 select-none py-3 px-4 h50px">
                {counter}
              </span>

              <button
                onClick={handleAdd}
                className={`py-3 px-4 bg-gray-300 text-gray-600 hover:bg-gray-400 h-full rounded-r select-none cursor-pointer outline-none items-center justify-center${
                  counter >= itemData.stock && ' pointer-events-none opacity-75'
                }`}
              >
                <span className="m-auto text-2xl leading-4 font-thin">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleAdd}
                type="button"
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Add to cart
              </button>
            </>
          )}
          {!hasTrashCan && (
            <button
              onClick={handleRemove}
              className="py-3 px-4 ml-4 text-indigo-600 hover:text-indigo-700  h-full select-none cursor-pointer outline-none items-center justify-center"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 m-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </span>
            </button>
          )}
        </>
      ) : (
        <button
          type="button"
          className="w-full bg-gray-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500 disabled:opacity-75"
          disabled="disabled"
        >
          Not in stock
        </button>
      )}
    </div>
  );
};

export default ItemCount;

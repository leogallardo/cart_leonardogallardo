import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [inCart, setinCart] = useState(false);

  // función que quiero que sea parte del context
  const updateCart = (itemData, itemAmount) => {
    if (itemAmount !== 0) {
      const updatedCartItems = [...cartItems];

      if (updatedCartItems.filter((i) => i.item.id === itemData.id).length > 0) {
        // update the amount if item already existed
        const itemIndex = updatedCartItems.findIndex((i) => i.item.id === itemData.id);
        updatedCartItems[itemIndex].itemAmount = itemAmount;
      } else {
        // add the element if it didnt exist
        updatedCartItems.push({ item: itemData, itemAmount: itemAmount });
      }
      setCartItems(updatedCartItems);
      setinCart(true);
    }
  };

  // función que quiero que sea parte del context
  const removeFromCart = (itemId) => {
    const currentCartItems = [...cartItems];
    // create a new array without the removed item
    const updatedCartItems = currentCartItems.filter((i) => i.item.id !== itemId);
    setCartItems(updatedCartItems);
    setinCart(false);
  };

  // función que quiero que sea parte del context
  const emptyCart = () => {
    setCartItems([]);
  };

  // estas son las cosas que hago que sean accesibles desde el contest, a través del value
  const context = {
    cartItems,
    inCart,
    updateCart,
    removeFromCart,
    emptyCart,
  };

  // si tuviera una sola cosa para hacer accesible, simplemente la pasaría como función directamente en el value
  // en este caso necesito varias, por eso las envío como un objeto, para después acceder a ellas tipo context.cartItems (o desestructurando)
  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

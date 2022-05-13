import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, itemAmount) => {
    if (itemAmount !== 0) {
      const updatedCartItems = [...cartItems];

      if (updatedCartItems.filter((i) => i.itemId === itemId).length > 0) {
        // update the amount if item already existed
        const itemIndex = updatedCartItems.findIndex((i) => i.itemId === itemId);
        updatedCartItems[itemIndex].itemAmount = itemAmount;
      } else {
        // add the element if it didnt exist
        updatedCartItems.push({ itemId: itemId, itemAmount: itemAmount });
      }
      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (itemId) => {
    const currentCartItems = [...cartItems];
    // create a new array without the removed item
    const updatedCartItems = currentCartItems.filter((i) => i.itemId !== itemId);
    setCartItems(updatedCartItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const context = {
    cartItems,
    addToCart,
    removeFromCart,
    emptyCart,
  };

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

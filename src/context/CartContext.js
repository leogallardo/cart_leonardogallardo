import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // array of items in the cart
  const [cartItems, setCartItems] = useState([]);

  // total amount of items in the cart
  const [cartItemsAmount, setCartItemsAmount] = useState();
  useEffect(() => {
    setCartItemsAmount(cartItems.reduce((s, a) => s + a.itemAmount, 0));
  }, [cartItems]);

  // calculate subtotal
  const [cartSubtotal, setCartSubtotal] = useState(0);
  useEffect(() => {
    let _subtotal = 0;

    for (const item of cartItems) {
      const itemTotal = item.item.price * item.itemAmount;
      _subtotal = _subtotal + itemTotal;
    }

    setCartSubtotal(_subtotal);
  }, [cartItems]);

  // calculate shipping
  const [cartShipping, setCartShipping] = useState(0);
  useEffect(() => {
    setCartShipping(() => {
      if (cartSubtotal >= 10000) {
        return 0;
      } else {
        return 400;
      }
    });
  }, [cartSubtotal]);

  // calculate total
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    setCartTotal(Number(cartSubtotal) + Number(cartShipping));
  }, [cartSubtotal, cartShipping]);

  // when the user clicks 'add to cart', '+' or 'o'
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
    }
  };

  // when the users clicks 'remove from cart/trash can'
  const removeFromCart = (itemId) => {
    const currentCartItems = [...cartItems];
    // create a new array without the removed item
    const updatedCartItems = currentCartItems.filter((i) => i.item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // when the user clicks 'empty cart'
  const emptyCart = () => {
    setCartItems([]);
  };

  // things that i need to access from other files
  const context = {
    cartItems,
    cartItemsAmount,
    cartSubtotal,
    cartShipping,
    cartTotal,
    updateCart,
    removeFromCart,
    emptyCart,
  };

  // if there was only one thing in the context, i would just pass it on like value={thing}
  // in this case, i need several, so i pass them as an object with everything in there, so I can access them by either using context.thing, or just destructuring like { thing }
  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};
export default CartProvider;

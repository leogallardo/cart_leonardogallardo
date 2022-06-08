import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from './../context/CartContext';

const CartConfirmation = () => {
  const { cartItems, cartItemsAmount, cartSubtotal, cartShipping, cartTotal } = useContext(CartContext);

  const saveSaleHandler = () => {
    // cart buyer
    const cartBuyer = {
      name: 'Carlos',
      phone: '545454545454',
      email: 'carlos@gmail.com',
    };

    // cart items
    const processedCartItems = cartItems.map((item) => ({
      name: item.item.name,
      price: item.item.price,
      amount: item.itemAmount,
    }));

    // cart details
    const cart = {
      cartBuyer: cartBuyer,
      cartItems: processedCartItems,
      cartItemsAmount: cartItemsAmount,
      cartSubtotal: cartSubtotal,
      cartShipping: cartShipping,
      cartTotal: cartTotal,
    };

    saveToFirestore(cart);
  };

  // saveToFirestore() with then
  // const saveToFirestore = (cart) => {
  //   const db = getFirestore();
  //   const salesCollection = collection(db, 'sales');
  //   addDoc(salesCollection, cart).then((response) => {
  //     console.log(response.id);
  //   });
  // };

  // saveToFirestore() with async try await catch
  const saveToFirestore = async (cart) => {
    const db = getFirestore();
    const salesCollection = collection(db, 'sales');
    try {
      const firebaseCall = await addDoc(salesCollection, cart);
      console.log(firebaseCall.id);
    } catch (error) {
      console.log('There was an error:', error);
    }
  };

  return (
    <div>
      <button onClick={saveSaleHandler} className="btn">
        Salvar lista de favoritos
      </button>
    </div>
  );
};
export default CartConfirmation;

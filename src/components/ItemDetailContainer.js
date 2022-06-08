import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    setLoading(true);

    // getItem() with then
    // const db = getFirestore();
    // const item = doc(db, 'items', itemId);

    // getDoc(item).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     setItemData({ id: snapshot.id, ...snapshot.data() });
    //     setLoading(false);
    //   }
    // });

    // getItem() with async try await catch
    const getItem = async () => {
      const db = getFirestore();
      const item = doc(db, 'items', itemId);
      try {
        const snapshot = await getDoc(item);
        if (snapshot.exists()) {
          setItemData({ id: snapshot.id, ...snapshot.data() });
          setLoading(false);
        } else {
          throw TypeError('There was an error: itemId does not exist.');
        }
      } catch (error) {
        console.log('There was an error:', error);
        setLoading(true);
      }
    };
    getItem();
  }, [itemId]);

  return <>{loading ? <Loader /> : <ItemDetail itemData={itemData} />}</>;
};

export default ItemDetailContainer;

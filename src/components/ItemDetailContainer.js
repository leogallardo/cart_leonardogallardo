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
    const db = getFirestore();
    const item = doc(db, 'items', itemId);

    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setItemData({ id: snapshot.id, ...snapshot.data() });
        setLoading(false);
      }
    });
  }, [itemId]);

  return <>{loading ? <Loader /> : <ItemDetail itemData={itemData} />}</>;
};

export default ItemDetailContainer;

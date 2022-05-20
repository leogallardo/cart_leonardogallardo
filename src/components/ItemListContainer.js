import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    let q = itemsCollection;

    // if there is a category
    if (catId) {
      q = query(itemsCollection, where('category', '==', catId));
    }

    getDocs(q).then((snapshot) => {
      if (snapshot.size > 0) {
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setItemsData(data);
        setLoading(false);
      }
    });
  }, [catId]);

  return <>{loading ? <Loader /> : <ItemList itemsData={itemsData} />}</>;
};
export default ItemListContainer;

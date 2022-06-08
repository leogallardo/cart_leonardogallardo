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

    // getItems() with then
    // const db = getFirestore();
    // const itemsCollection = collection(db, 'items');
    // let q = itemsCollection;

    // // if there is a category
    // if (catId) {
    //   q = query(itemsCollection, where('category', '==', catId));
    // }

    // getDocs(q).then((snapshot) => {
    //   if (snapshot.size > 0) {
    //     const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    //     setItemsData(data);
    //     setLoading(false);
    //   }
    // });

    // getItems() with async try await catch
    const getItems = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
      let q = itemsCollection;

      // if there is a category
      if (catId) {
        q = query(itemsCollection, where('category', '==', catId));
      }
      try {
        const snapshot = await getDocs(q);
        if (snapshot.size > 0) {
          const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setItemsData(data);
          setLoading(false);
        } else {
          throw TypeError('There was an error: no items to show.');
        }
      } catch (error) {
        console.log('There was an error:', error);
        setLoading(true);
      }
    };
    getItems();
  }, [catId]);

  return <>{loading ? <Loader /> : <ItemList itemsData={itemsData} title={catId && catId} />}</>;
};
export default ItemListContainer;

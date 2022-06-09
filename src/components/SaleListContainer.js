import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import SaleList from './SaleList';
import Loader from './Loader';

const SaleListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    setLoading(true);

    // getSales() with then
    // const db = getFirestore();
    // const SalesCollection = collection(db, 'Sales');
    // let q = SalesCollection;

    // getDocs(q).then((snapshot) => {
    //   if (snapshot.size > 0) {
    //     const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    //     setSalesData(data);
    //     setLoading(false);
    //   }
    // });

    // getSales() with async try await catch
    const getSales = async () => {
      const db = getFirestore();
      const SalesCollection = collection(db, 'sales');
      let q = SalesCollection;

      try {
        const snapshot = await getDocs(q);
        if (snapshot.size > 0) {
          const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setSalesData(data);
          setLoading(false);
        } else {
          throw TypeError('There was an error: no sales to show.');
        }
      } catch (error) {
        console.log('There was an error:', error);
        setLoading(true);
      }
    };
    getSales();
  }, []);

  return <>{loading ? <Loader /> : <SaleList salesData={salesData} title={'Sales'} />}</>;
};

export default SaleListContainer;

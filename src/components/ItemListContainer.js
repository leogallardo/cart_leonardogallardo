import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items as itemsData } from '../data/items';
import ItemList from './ItemList';
import Loader from './Loader';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const { catId } = useParams();
  const [items, setItems] = useState([]);

  console.log(catId);
  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        // added a filter so routes can have categories and show only items with said category attached. If no category prop, then show them all
        if (catId) {
          resolve(itemsData.filter((item) => item.category === catId));
        } else {
          resolve(itemsData);
        }
        setLoading(false);
      }, 2000);
    });

    getItems
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.log('There was a mistake with the getItems promise', err);
      });
  }, [catId]);

  return <>{loading ? <Loader /> : <ItemList itemsData={items} />}</>;
};

export default ItemListContainer;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items as itemsData } from '../data/items';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsData.find((item) => item.id == itemId));
      }, 2000);
    });

    getItem
      .then((result) => {
        setItem(result);
      })
      .catch((err) => {
        console.log('There was a mistake with the getItems promise', err);
      });
  }, [itemId]);

  return <ItemDetail itemData={item} />;
};

export default ItemDetailContainer;

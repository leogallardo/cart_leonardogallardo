import { useEffect, useState } from 'react';
import { items as itemsData } from '../data/items';
import ItemsList from './ItemsList';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        // added a filter so routes can have categories and show only items with said category attached. If no category prop, then show them all
        if (props.category) {
          resolve(itemsData.filter((item) => item.category === props.category));
        } else {
          resolve(itemsData);
        }
      }, 2000);
    });

    getItems
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.log('There was a mistake with the getItems promise', err);
      });
  }, [props.category]);

  return <ItemsList itemsData={items} />;
};

export default ItemListContainer;

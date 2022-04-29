import { useEffect, useState } from 'react';
import { items as itemsData } from '../data/items';
import Item from './Item';

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsData);
      }, 2000);
    });

    getItems
      .then((result) => {
        setItems(result);
      })
      .catch((err) => {
        console.log('There was a mistake with the getItems promise', err);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Funko products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {items.map((item) => (
            <Item key={item.id} itemData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;

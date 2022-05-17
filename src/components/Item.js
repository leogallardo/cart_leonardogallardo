import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ itemData }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
      <div className="aspect-w-3 aspect-h-4 group-hover:opacity-75 sm:aspect-none sm:h-96">
        <img src={itemData.image} alt={itemData.name} className="w-full h-full p-4 object-center object-cover sm:w-full sm:h-full" />
      </div>
      <div className="flex-1 p-4 space-y-2 flex flex-col">
        <h3 className="text-sm font-medium text-gray-900">{itemData.name}</h3>
        <p className="text-sm italic text-gray-500">{itemData.brand}</p>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-base font-medium text-gray-900">${itemData.price}</p>
          <Link to={`../item/${itemData.id}`} className="text-base font-medium text-blue-600 mt-2">
            View details
          </Link>

          <ItemCount itemData={itemData} />
        </div>
      </div>
    </div>
  );
};

export default Item;

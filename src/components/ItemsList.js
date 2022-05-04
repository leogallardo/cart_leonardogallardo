import Item from './Item';

const ItemsList = ({ itemsData }) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {itemsData.map((item) => (
            <Item key={item.id} itemData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;

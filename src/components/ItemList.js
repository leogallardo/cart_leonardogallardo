import Item from './Item';

const ItemList = ({ itemsData, title }) => {
  return (
    <div className="max-w-2xl mx-auto pt-24 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 w-full">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12 capitalize">{title == null ? 'Home' : title}</h1>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {itemsData.map((item) => (
          <Item key={item.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

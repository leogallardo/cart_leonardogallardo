const Sale = ({ saleData }) => {
  return (
    <tr key={saleData.id}>
      <td className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm sm:pl-6 text-gray-500">{saleData.id}</td>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-sm text-gray-500">
        <div>
          <div className="text-gray-900">{saleData.cartBuyer.name}</div>
          <div className="font-normal text-gray-400">{saleData.cartBuyer.email}</div>
          <div className="font-normal text-gray-400">{saleData.cartBuyer.phone}</div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{saleData.cartItemsAmount}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${saleData.cartShipping}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${saleData.cartSubtotal}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${saleData.cartTotal}</td>
    </tr>
  );
};

export default Sale;

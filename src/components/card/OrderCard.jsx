import React from 'react';

const OrderCard = ({ product ,viewClick,reviewClick}) => {
  const { productId, quantity, selectedCapacity, orderStatus, orderDate } = product; // Destructure orderStatus from product
  const { name, images, discountPrice } = productId;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-80 border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      {/* Product Image */}
      <img 
        src={images[0]} 
        alt={name} 
        className="w-full h-48 object-cover rounded-lg mb-4" 
      />

      {/* Product Name */}
      <h3 className="text-xl font-sansation font-bold text-gray-800">{name}</h3>

      {/* Product Price and Selected Capacity */}
      <p className="text-gray-500 mt-2 font-sansation font-regular">Price: ₹{discountPrice}</p>
      <p className="text-gray-500 mt-1 font-sansation font-regular">Selected Capacity: {selectedCapacity}</p>

      {/* Order Status */}
      <div className="flex justify-between items-center mt-4 font-sansation font-regular">
        <span 
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            orderStatus === 'Order Completed' ? 'bg-green-100 text-green-600' : 
            orderStatus === 'Shipped' ? 'bg-yellow-100 text-yellow-600' : 
            orderStatus === 'Ordered' ? 'bg-red-100 text-red-600' : 
            'bg-gray-100 text-gray-600' // Fallback for other statuses
          }`}
        >
          {orderStatus}
        </span>
      </div>

      {/* Order Date */}
      <p className="text-gray-500 mt-1 font-sansation font-regular">Order Date: {new Date(orderDate).toLocaleDateString()}</p>

      {/* View Details Button */}
      <button 
        className="mt-4 w-full bg-blue-500 text-white font-sansation font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
        onClick={viewClick}
      >
        View Details
      </button>

      {/* Add Review Button - Only visible if order is completed */}
      {orderStatus === 'Order Completed' && (
        <button 
          className="mt-2 w-full bg-green-500 text-white font-sansation font-bold py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out"
          onClick={reviewClick}
        >
          Add Review
        </button>
      )}
    </div>
  );
};

export default OrderCard;

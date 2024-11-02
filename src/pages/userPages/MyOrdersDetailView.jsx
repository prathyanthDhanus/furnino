import React from "react";
import { useMyOrders } from "../../services/product";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import SuspenseWrapper from "../../components/suspenceWrapper/SuspenceWrapper";
import OrderStatusStepper from "../../components/stepper/OrderStatusStepper";
import { useParams } from "react-router-dom";
import CustomButton from "../../components/buttton/CustomButton";

const MyOrdersDetailView = () => {
  const { data: MyOrders, isLoading } = useMyOrders();
  const { productId } = useParams();

  // Find the order that contains the specified product
  const orderWithProduct = MyOrders?.find((order) =>
    order.products.some((product) => product.productId._id === productId)
  );

  // Get the specific product details
  const productDetails = orderWithProduct?.products.find(
    (product) => product.productId._id === productId
  );

  console.log("Order Status: ", orderWithProduct?.orderStatus); 

  return (
    <div>
      <HeaderBanner
        headingImage={headingImage}
        title="My Orders Detail View"
        currentPage="My Orders Detail View"
      />

      <div className="container mx-auto p-5 m-10">
        {isLoading && <SuspenseWrapper />}
        {productDetails && (
          <div className="mb-10 grid sm:grid-cols-1 lg:grid-cols-3 items-center border-2 rounded-xl shadow-md">
            {/* Product Image on the Left */}
            <div className="p-5">
              <img
                src={productDetails?.productId?.images[0]}
                alt={productDetails.productId.name}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Product Details on the Right */}
            <div className="col-span-2 p-5 space-y-3">
              {/* Product Name */}
              <h2 className="text-xl font-bold text-gray-800">
                {productDetails.productId.name}
              </h2>

              {/* Product Price */}
              <p className="text-lg font-semibold text-gray-700">
                Price: ${productDetails.productId.price}
              </p>

              {/* Ordered Capacity */}
              <p className="text-md font-medium text-gray-600">
                Ordered Quantity: {productDetails.quantity}
              </p>

              {/* Order Status Stepper */}
              <OrderStatusStepper orderStatus={productDetails?.orderStatus} />
          
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersDetailView;

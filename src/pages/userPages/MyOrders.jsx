import React from "react";
import { useMyOrders } from "../../services/product";
import SuspenseWrapper from "../../components/suspenceWrapper/SuspenceWrapper";
import OrderCard from "../../components/card/OrderCard";
import headingImage from "../../assets/images/Rectangle 1.png";
import HeaderBanner from "../../components/banner/HeaderBanner";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const { data: MyOrders, isLoading } = useMyOrders();
  const navigate = useNavigate();
  console.log(MyOrders);

  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="My Orders"
        currentPage="My Orders"
      />
      <div className="container mx-auto p-5 m-10">
        {isLoading && <SuspenseWrapper />}
        {MyOrders?.map((order) => (
          <div key={order._id} className="mb-10">
            {/* Grid for Order Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
              {order?.products?.map((product) => (
                <>
                 
                  <OrderCard
                    key={product._id}
                    product={{
                      ...product,
                      orderDate: order.orderDate,
                    }}
                    viewClick={()=>navigate(`/view/my-orders/${product?.productId?._id}`)}
                    reviewClick=""
                  />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyOrders;

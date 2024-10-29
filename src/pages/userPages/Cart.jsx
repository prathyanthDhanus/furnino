import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderBanner from "../../components/banner/HeaderBanner";
import headingImage from "../../assets/images/Rectangle 1.png";
import CustomButton from "../../components/buttton/CustomButton";
import CartViewCard from "../../components/card/CartViewCard";
import testImage from "../../assets/images/kids-room-banner.jpg";
import AddressCard from "../../components/card/AddressCard";
import {
  useGetProductsFromtheCart,
  useUpdateQuantityOfAProduct,
  useDeleteProductFromCart,
  useCartTotal,
} from "../../services/product";
import { useFetchProfile } from "../../services/userAuth";
import { showConfirmationToast } from "../../utils/toastNotification/toastNotifications";
import emptyCartImage from "../../assets/images/1172061-middle.png";
import { usePayment } from "../../services/userAuth";
const Cart = () => {
  const deliveryCharge = 150;
  const navigate = useNavigate();
  const {
    data: cart,
    isSuccess: isCartSuccess,
    refetch: refetchProductFromTheCart,
    error: errorGetProductFromCart,
  } = useGetProductsFromtheCart();
  const { data: userProfile, isSuccess: userProfileSuccess } =
    useFetchProfile();

  const {
    data: cartTotal,
    isSuccess: isCartTotalSuccess,
    refetch: refetchCartTotal,
  } = useCartTotal();
  const { mutate: quantityUpdate } = useUpdateQuantityOfAProduct();
  const { mutate: deleteFromCart } = useDeleteProductFromCart();
  const { mutate: userPayment } = usePayment();
//  console.log(errorGetProductFromCart?.response?.status)
  const handleQuantityChange = (newQuantity, productId) => {
    quantityUpdate(
      { newQuantity, productId },
      {
        onSuccess: () => {
          refetchCartTotal();
        },
      }
    );
  };


  const handleDeleteClick = (cartId) => {
    showConfirmationToast(
      () =>
        deleteFromCart(
          { cartId },
          {
            onSettled: () => {
              // This will ensure refetch happens after the mutation is completed
              // (either success or failure)
              refetchProductFromTheCart();
              refetchCartTotal();
            },
          }
        ),
      "Are you sure you want to delete this item?","Delete"
    );
  };

  // const handlePaymentCheckOut = () => {
  //   const totalAmount = cartTotal ? cartTotal + deliveryCharge : 0;
  //   userPayment({ totalAmount }); // Call the mutate function for payment
  // };
  
  const totalAmount = cartTotal ? cartTotal + deliveryCharge : 0;
  return (
    <>
      <HeaderBanner
        headingImage={headingImage}
        title="Cart"
        currentPage="Cart"
      />
      {!cart || errorGetProductFromCart?.response?.status === 404 ? (
        <div className="container mx-auto p-5 grid justify-items-center">
          <>
            <img
              src={emptyCartImage}
              alt="empty cart"
              className="object-cover w-[10rem]"
            />
            <span className="font-sansation font-bold text-xl my-5">
              Your cart is empty! 😔 Let’s fill it up with some great finds.🙂
            </span>
          </>
        </div>
      ) : (
        <>
          <div className="container mx-auto p-5">
            <div className="grid grid-cols-6 gap-8">
              {/* Left Side - 4 columns */}
              <div className="col-span-4">

                {userProfile?.map((item) =>
                  item?.address?.map((user) => (
                    <AddressCard key={user._id} addressData={user} />
                  ))
                )}

                {cart?.map((cartData) => (
                  <div className="mt-10" key={cartData?._id}>
                    <CartViewCard
                      imageSrc={cartData?.productId?.images[0]}
                      productTitle={cartData?.productId?.name}
                      size={cartData?.selectedCapacity}
                      price={`₹${cartData?.productId?.discountPrice}`}
                      stockStatus=""
                      quantity={cartData?.quantity}
                      step={1}
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(
                          newQuantity,
                          cartData?.productId?._id
                        )
                      }
                      onDelete={() => handleDeleteClick(cartData?._id)}
                      hideCheck={false}
                      onClick={()=>navigate(`/view/product/${ cartData?.productId?._id}`)}
                    />
                  </div>
                ))}
              </div>

              {/* Right Side - 2 columns */}
              <div className="col-span-2 bg-gray-100 p-5 rounded-xl shadow-xl h-[16rem]">
                <h2 className="font-sansation font-bold text-xl mb-4">
                  Summary
                </h2>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>{cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charges</span>
                    <span>₹150</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </div>

                <CustomButton
                  buttonText="Proceed TO Checkout"
                  type="submit"
                  className="w-full sm:text-sm md:text:sm lg:text-base  bg-blue-400 text-custom-white hover:bg-custom-white hover:text-blue-400 hover:border-blue-400 my-5"
                  onClick={()=>navigate("/user/payment/selection")}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

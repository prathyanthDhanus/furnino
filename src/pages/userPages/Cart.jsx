import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderBanner from "../../components/banner/HeaderBanner";
import headingImage from "../../assets/images/Rectangle 1.png";
import CustomButton from "../../components/buttton/CustomButton";
import CartViewCard from "../../components/card/CartViewCard";
import {
  useGetProductsFromtheCart,
  useUpdateQuantityOfAProduct,
  useDeleteProductFromCart,
  useCartTotal,
} from "../../services/product";
import { showConfirmationToast } from "../../utils/toastNotification/toastNotifications";
import emptyCartImage from "../../assets/images/1172061-middle.png";

const Cart = () => {
  const deliveryCharge = 150;
  const navigate = useNavigate();
  const {
    data: cart,
    isSuccess: isCartSuccess,
    refetch: refetchProductFromTheCart,
    error: errorGetProductFromCart,
  } = useGetProductsFromtheCart();

  const {
    data: cartTotal,
    isSuccess: isCartTotalSuccess,
    refetch: refetchCartTotal,
  } = useCartTotal();
  const { mutate: quantityUpdate } = useUpdateQuantityOfAProduct();
  const { mutate: deleteFromCart } = useDeleteProductFromCart();

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
      "Are you sure you want to delete this item?",
      "Delete"
    );
  };

  const totalAmount = cartTotal ? cartTotal + deliveryCharge : 0;

  const handleClickProccedToCheckOut = () => {
    localStorage.setItem("totalAmount", totalAmount);
    navigate("/product/checkout");
  };
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
            <div className="grid sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-6  xl:grid-cols-6 gap-8 justify-items-center w-full">
              {/* Left Side - 4 columns */}
              <div className="col-span-4">
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
                      onClick={() =>
                        navigate(`/view/product/${cartData?.productId?._id}`)
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Right Side - 2 columns */}
              <div className="col-span-2 bg-gray-100 p-5 rounded-xl shadow-xl h-[16rem]  w-full">
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
                  // onClick={()=>navigate(`/user/payment/selection/${totalAmount}`)}
                  onClick={handleClickProccedToCheckOut}
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

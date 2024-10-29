import React, { useState } from 'react';
import CustomButton from '../../components/buttton/CustomButton';
import HeaderBanner from "../../components/banner/HeaderBanner";
import headingImage from "../../assets/images/Rectangle 1.png";

const PaymentSelection = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePaymentChange = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedPayment('');
  };

  const renderDialogContent = () => {
    switch (selectedPayment) {
      case 'UPI':
        return (
          <div className='font-sansation font-regular'>
            <h3 className='mx-5'>Select a UPI method:</h3>
            <ul className='mx-5'>
              <li>PhonePe</li>
              <li>Google Pay</li>
              <li>Amazon Pay</li>
            </ul>
          </div>
        );
      case 'Net Banking':
        return (
          <div className='font-sansation font-regular'>
            <h3 className='mx-5'>Select your Bank:</h3>
            <ul className='mx-5'>
              <li>SBI</li>
              <li>BOB</li>
              <li>Canara Bank</li>
              {/* Add more banks as needed */}
            </ul>
          </div>
        );
      case 'Wallets':
        return (
          <div className='font-sansation font-regular'>
            <h3 className='mx-5'>Select a Wallet:</h3>
            <ul className='mx-5'>
              <li>Paytm Wallet</li>
              <li>Google Pay Wallet</li>
              {/* Add more wallets as needed */}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
  
      <HeaderBanner
        headingImage={headingImage}
        title="User Profile"
        currentPage="User Profile"
      />
    <div className="container mx-auto p-5 m-10 ">

      {/* UPI Payment Option */}
      <div>
        <label>
          <input
            type="radio"
            name="payment"
            onChange={() => handlePaymentChange('UPI')}
          />
          <span className='font-sansation font-bold px-2'>UPI</span>
        </label>
        {isDialogOpen && selectedPayment === 'UPI' && (
          <div className="dialog-content">
            {renderDialogContent()}
            <CustomButton buttonText="Close" onClick={closeDialog} className="bg-red-500 text-white h-[1.5rem] mx-5" />
          </div>
        )}
      </div>

      {/* Cash On Delivery Option */}
      <div >
        <label>
          <input
            type="radio"
            name="payment"
            onChange={() => handlePaymentChange('Cash On Delivery')}
          />
          <span className='font-sansation font-bold px-2'>Cash On Delivery</span>
        </label>
      </div>

      {/* Net Banking Option */}
      <div>
        <label>
          <input
            type="radio"
            name="payment"
            onChange={() => handlePaymentChange('Net Banking')}
          />
          <span className='font-sansation font-bold px-2'>Net Banking</span>
        </label>
        {isDialogOpen && selectedPayment === 'Net Banking' && (
          <div className="dialog-content">
            {renderDialogContent()}
            <CustomButton buttonText="Close" onClick={closeDialog} className="bg-red-500 text-white h-[1.5rem] mx-5" />
          </div>
        )}
      </div>

      {/* Debit/Credit/ATM Card Option */}
      <div>
        <label>
          <input
            type="radio"
            name="payment"
            onChange={() => handlePaymentChange('Debit/Credit/ATM Card')}
          />
          <span className='font-sansation font-bold px-2'>Debit/Credit/ATM Card</span>
        </label>
      </div>

      {/* Wallets Option */}
      <div>
        <label>
          <input
            type="radio"
            name="payment"
            onChange={() => handlePaymentChange('Wallets')}
          />
          <span className='font-sansation font-bold px-2'>Wallets</span>
        </label>
        {isDialogOpen && selectedPayment === 'Wallets' && (
          <div className="dialog-content">
            {renderDialogContent()}
            <CustomButton buttonText="Close" onClick={closeDialog} className="bg-red-500 text-white h-[1.5rem] mx-5" />
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default PaymentSelection;

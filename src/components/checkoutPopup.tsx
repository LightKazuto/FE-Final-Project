// components/CheckoutSuccessPopup.tsx
import React from 'react';
import { useRouter } from 'next/router';

interface CheckoutPopupProps {
  onClose: () => void;
}

const CheckoutPopup: React.FC<CheckoutPopupProps> = ({ onClose }) => {
  const router = useRouter();

  const handleShopAgain = () => {
    onClose();
    router.push('/products');
  };

  const handleViewTransactions = () => {
    onClose();
    router.push('/account');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Checkout Successful!</h2>
        <p className="mt-10 mb-10">Thank you for your purchase.</p>
        <div className="flex justify-between gap-10">
          <button
            onClick={handleShopAgain}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Shop Again
          </button>
          <button
            onClick={handleViewTransactions}
            className="bg-green-500 text-white  px-4 py-2 rounded hover:bg-green-600"
          >
            View Transactions
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopup;
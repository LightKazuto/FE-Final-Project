// components/OrderSummary.tsx
import React, { useState } from "react";
import { OrderSummary as OrderSummaryType } from "../types";
import CheckoutPopup from '../components/checkoutPopup';

interface OrderSummaryProps {
  summary: OrderSummaryType;
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const OrderSummary: React.FC<OrderSummaryProps> = ({ summary }) => {
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const handleCheckout = async () => {
    const token = localStorage.getItem("access_token");
    try {

      const response = await fetch(`${apiBaseUrl}/checkout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch cart items: ${response.statusText}`);
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsCheckoutSuccess(true);
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  const closeSuccessPopup = () => {
    setIsCheckoutSuccess(false);
  };
     

  return (
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Jumlah harga
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                Rp {summary.subtotal}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Diskon
              </dt>
              <dd className="text-base font-medium text-red-600">
                -Rp {summary.total_discount}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Ongkos kirim
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                Rp {summary.delivery_cost}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              Rp {summary.total}
            </dd>
          </dl>
        </div>

        <a
          href="#"
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </a>
        {isCheckoutSuccess && <CheckoutPopup onClose={closeSuccessPopup} />}
        {/* <CheckoutPopup onClose={closeSuccessPopup} /> */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {" "}
            or{" "}
          </span>
          <a
            href="#"
            title=""
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          >
            Continue Shopping
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
  );
};

export default OrderSummary;

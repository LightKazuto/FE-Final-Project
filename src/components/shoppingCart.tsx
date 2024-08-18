// components/ShoppingCart.tsx
import React, { useState, useEffect } from "react";
import CartItem from "./cartItem";
import OrderSummary from "./orderSummary";
import VoucherForm from "./voucherForm";
import {
  CartItem as CartItemType,
  OrderSummary as OrderSummaryType,
} from "../types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
let token: string | null = null;

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummaryType>({
    subtotal: 0,
    discount: 0,
    delivery_cost: 0,
    total: 0,
  });

  useEffect(() => {
    token = localStorage.getItem("access_token");
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${apiBaseUrl}/getCart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch cart items: ${response.statusText}`);
      }

      const data = await response.json();

      setCartItems(data.items);
      setOrderSummary(data.summary);
      console.log(cartItems);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    try {
      const response = await fetch(`${apiBaseUrl}/updateCartItemQuantity`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId, quantity }),
      });

      if (response.ok) {
        fetchCartItems();
      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const deleteItem = async (itemId: string) => {
    try {
      const response = await fetch(`${apiBaseUrl}/deleteCartItem`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: itemId,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
  
      fetchCartItems();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto mt-6 max-w-4xl lg:mt-0 lg:w-2/3 xl:w-2/3">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onDeleteItem={deleteItem}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl lg:mt-0 lg:w-1/3 xl:w-1/3">
            <OrderSummary summary={orderSummary} />
            <VoucherForm onApplyVoucher={fetchCartItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

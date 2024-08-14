// components/ShoppingCart.tsx
import React, { useState, useEffect } from "react";
import CartItem from "./cartItem";
import OrderSummary from "./orderSummary";
import VoucherForm from "./voucherForm";
import {
  CartItem as CartItemType,
  OrderSummary as OrderSummaryType,
} from "../types";

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummaryType>({
    subtotal: 0,
    discount: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCartItems(data.items);
      setOrderSummary(data.summary);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    try {
      await fetch(`/api/cart/item/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      // Optimistically update UI
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
      // Refetch to ensure consistency with server
      fetchCartItems();
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const deleteItem = async (itemId: string) => {
    try {
      await fetch(`/api/cart/item/${itemId}`, { method: "DELETE" });
      // Optimistically update UI
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
      // Refetch to ensure consistency with server
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
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onDeleteItem={deleteItem}
            />
          ))}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <OrderSummary summary={orderSummary} />
            <VoucherForm onApplyVoucher={fetchCartItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

import type { NextApiRequest, NextApiResponse } from "next";
import { CartItem, OrderSummary } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ items: CartItem[]; summary: OrderSummary }>
) {
  
  const items: CartItem[] = [
    {
      id: "1",
      product_name: "Product 1",
      image_url: "/product1.jpg",
      price: 100,
      quantity: 2,
      description: "Sayur",
    },
    
  ];

  const summary: OrderSummary = {
    subtotal: 200,
    discount: 20,
    delivery_cost: 18,
    total: 198,
  };

  res.status(200).json({ items, summary });
}
import type { NextApiRequest, NextApiResponse } from "next";
import { CartItem, OrderSummary } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ items: CartItem[]; summary: OrderSummary }>
) {
  
  const items: CartItem[] = [
    {
      id: "1",
      name: "Product 1",
      imageUrl: "/product1.jpg",
      price: 100,
      quantity: 2,
      category: "Sayur",
    },
    
  ];

  const summary: OrderSummary = {
    subtotal: 200,
    discount: 20,
    tax: 18,
    total: 198,
  };

  res.status(200).json({ items, summary });
}

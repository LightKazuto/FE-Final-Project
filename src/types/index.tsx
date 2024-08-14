export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  discount?: number;
  quantity: number;
  category: string;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

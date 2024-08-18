export interface CartItem {
  id: string;
  product_name: string;
  image_url: string;
  price: number;
  discount?: number;
  quantity: number;
  stock?: number;
  description?: string;
  total_price: number;
}

export interface OrderSummary {
  subtotal: number;
  discount: number;
  delivery_cost: number;
  total: number;
}

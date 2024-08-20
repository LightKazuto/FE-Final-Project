import React, { useState } from "react";

const apiHeroku = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    image_url: string;
    product_name: string;
    price: number;
    description: string;
    stock: number;
  } | null;
  userRole: "user" | "seller" | "guest";
  onAddToCart: (productId: number) => void;
  to_user_id: any;
  user_id: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product, userRole, onAddToCart, to_user_id, user_id }) => {
  if (!isOpen || !product || product.stock <= 0) return null;

  const [quantity, setQuantity] = useState(1);
  console.log(user_id, to_user_id)

  const handleAddToCart = () => {
    if (quantity <= 0 || quantity > product.stock) {
      alert("Please select a valid quantity.");
      return;
    }

    onAddToCart(product.id);
    registerToCart(quantity);
  };

  const registerToCart = async (quantity: number) => {
  const totalPrice = product.price * quantity;
  const status = "cart"; 

  const formData = new URLSearchParams({
    from_user_id: user_id.toString(),
    to_user_id: to_user_id.toString(),
    product_id: product.id.toString(),
    product_quantity: quantity.toString(),
    total_price: totalPrice.toString(),
    status: status,
  });
  try {
    const response = await fetch(`${apiHeroku}/register/transactions`, {
      method: "POST",
      body: formData.toString(),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Transaction registered successfully:", result);
    } else {
      const errorResult = await response.json();
      console.error("Failed to register transaction:", errorResult.message);
      alert(`Error: ${errorResult.message}`);
    }
  } catch (error: any) {
    console.error("Error occurred:", error.message);
    alert(`An error occurred: ${error.message}`);
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 max-w-2xl h-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div className="flex items-center pl-4 h-auto">
          <img
            src={product.image_url}
            alt={product.product_name}
            className="w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="ml-10">
            <h2 className="text-2xl font-bold mb-3">{product.product_name}</h2>
            <p className="text-3xl text-red-500 font-medium mb-4">
              Rp.{product.price}
            </p>
            <p className="text-lg font-bold mb-4">Qty: {product.stock}</p>
            <div className="text-md text-justify">
              <p className="font-bold">Description:</p>
              <p className="font-normal">{product.description}</p>
            </div>
            {userRole === "user" && (
              <div className="pt-5">
                <label className="block mb-2">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  max={product.stock}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded px-3 py-2 mb-4"
                />
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
                  + Keranjang
                </button>
              </div>
            )}
            {(userRole === "seller" || userRole === "guest") && (
              <div className="pt-5">
                <button
                  className="hidden px-4 py-2 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
                  + Keranjang
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

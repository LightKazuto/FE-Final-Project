import React, { useState } from "react";
import registerTransaction from "../pages/api/addKeranjang";

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
    user_id: number;
  } | null;
  userRole: "user" | "seller" | "guest";
}

interface TransactionProps {
  id: number;
  from_user_id: number;
  to_user_id: number;
  product_id: number;
  product_quantity: number;
  total_price: number;
  status: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  product,
  userRole,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen || !product || product.stock <= 0) return null;

  const handleAddToCart = async () => {
    if (userRole !== "user") {
      setError("Only users can add items to the cart.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // const transaction: TransactionProps = {
      //   id: Date.now(),
      //   from_user_id: product.user_id,
      //   to_user_id: parseInt(localStorage.getItem("user_id") || "0"), // Fallback to 0 if no user_id is found
      //   product_id: product.id,
      //   product_quantity: 1,
      //   total_price: product.price,
      //   status: "cart"

      // };

      const formData = new FormData();
        // formData.append("id");
        formData.append("from_user_id", product.user_id.toString());
        formData.append(
          "to_user_id",
          parseInt(localStorage.getItem("user_id") || "0").toString()
        );
        formData.append("product_id", product.id.toString());
        formData.append("product_quantity", "1");
        formData.append("total_price", product.price.toString());
        formData.append("status", "cart");

    const response = await fetch(`${apiHeroku}/register/transactions`, {
      method: "POST",
        body: formData,
    });

      if (response) {
        setSuccess("Item added to cart successfully!");
      }
      else {
        setError("Failed to add item to cart. Please try again.");
    }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 max-w-2xl h-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close Modal">
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
            <p className="text-lg font-bold mb-4">Qty : {product.stock}</p>
            <div className="text-md text-justify">
              <p className="font-bold">Description :</p>
              <p className="font-normal">{product.description}</p>
            </div>
          </div>
        </div>
            {userRole === "user" && (
          <div className="float-right pt-5">
                <button
                  onClick={handleAddToCart}
              disabled={loading}
              className={`px-4 py-2 ${
                loading ? "bg-gray-400" : "bg-green-400"
              } text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300`}>
              {loading ? "Loading..." : "+ Keranjang"}
                </button>
              </div>
            )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default Modal;

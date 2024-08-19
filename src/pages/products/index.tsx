import React, { useEffect, useState } from "react";
import Modal from "../../components/popupCompenent";

const apiHeroku = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ProductData {
  id: number;
  image_url: string;
  product_name: string;
  price: number;
  stock: number;
  description: string; 
}

interface ProductResponse {
  products: ProductData[];
}

export default function Products() {
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${apiHeroku}/getallproduct`, {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Products", result);
        setProducts(result);
      } else {
        throw new Error("Failed to get products!");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const openModal = (product: ProductData) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (!products || !products.products) {
    return <p className="text-gray-500 text-center">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center w-full pt-10 bg-white relative inline-block pb-16">
      
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Popular Products
        </p>
      </div>

      <div className="w-4/6 border-t-5 border-gray-300 shadow-2xl pt-10">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          
          {products.products.map((product) => (
            <div
              key={product.id}
              className={`bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 cursor-pointer relative`}
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              onClick={() => product.stock > 0 && openModal(product)}>
              <img
                src={product.image_url}
                alt={product.product_name}
                className={`w-64 h-72 object-cover rounded-tr-custom-tr rounded-bl-custom-bl bg-custom-card ${
                  product.stock === 0 ? "filter grayscale" : ""
                }`}
              />
              {product.stock === 0 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                  Out of Stock
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-500 truncate">
                  {product.product_name}
                </h3>
                <p className="text-red-500 font-bold">Rp.{product.price}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

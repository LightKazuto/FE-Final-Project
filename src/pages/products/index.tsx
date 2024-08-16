import React, { useEffect, useState } from "react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ProductData {
  id: number;
  image_url: string;
  product_name: string;
  price: number;
}

interface ProductResponse {
  products: ProductData[];
}

export default function Products() {
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/getallproduct`, {
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

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  if (!products || !products.products) {
    return <p className="text-gray-500 text-center">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center w-full bg-white relative inline-block pb-16 pt-16 text-gray-500">
      <div className="bg-white w-full max-w-5xl shadow-2xl rounded-lg p-6">
        <p className="text-3xl font-bold text-center text-gray-600 mb-6">
          Popular Products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image_url}
                alt={product.product_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.product_name}</h3>
                <p className="text-red-500 font-bold">Rp.{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

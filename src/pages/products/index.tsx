import { useState, useEffect } from "react";
import ProductsCard from "../../components/productsCard";

interface Product {
  id: number;
  image: string;
  product_name: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products'); 
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data: Products[] = await response.json();
//         setProducts(data);
//       } catch (error) {
//         setError('Failed to fetch products');
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (error) {
//     return <p className="text-center mt-10 text-red-500">{error}</p>;
//   }

  return (
    <div className="flex flex-col items-center w-full bg-white relative inline-block pb-16 pt-16">
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30 ">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Popular Fruits Product
        </p>
      </div>
      <div className="w-4/6 shadow-2xl">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          {products.length === 0 ? (
            <p className="text-center mt-10">No products available.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
              >
                <ProductsCard
                  image={product.image}
                  product_name={product.product_name}
                  price={product.price}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

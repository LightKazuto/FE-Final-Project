import { useState } from "react";
import MarketCard from "./comingSoonMarketCard";
import duniaDurian from '../assets/duniaDurian.png';

interface Market {
  id: number;
  image: string;
  store_name: string;
  description: string;
}

export default function CoomingSoonMarket() {
  const [products, setProducts] = useState<Market[]>([
    {
      id: 1,
      image: "https://i.ibb.co.com/qmrfqGV/dunia-Durian.png",
      store_name: "Dunia Durian",
      description: "Durian lokal dengan berbagai variasi lokal dan import",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/VYvf4Ht/image.png",
      store_name: "Hydroponik ku",
      description: "Sayuran hasil dari hidproponik milik UMKM",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/TcLgnW1/image-1.png",
      store_name: "Fruit Paradasie",
      description: "Menyediakan buah buahan lokal setiap musimnya",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/yhV7tmd/image-2.png",
      store_name: "Bakul Tubers",
      description: "Bahan nabati yang diperoleh dari dalam tanah",
    },
  ]);

  return (
    <div className="flex flex-col items-center w-full pt-20 bg-white relative inline-block pb-16">
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30 ">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Coming Soon Market
        </p>
      </div>
      <div className="w-4/6 border-t-5 border-gray-300 shadow-2xl">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
            <MarketCard
              image={product.image}
              store_name={product.store_name}
              description={product.description}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
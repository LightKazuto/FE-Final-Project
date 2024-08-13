import { useState } from "react";
import MarketCard from "./comingSoonMarketCard";
import duniaDurian from '../assets/duniaDurian.png';

interface Market {
  id: number;
  image: boolean;
  store_name: string;
  description: string;
}

export default function CoomingSoonMarket() {
  const [products, setProducts] = useState<Market[]>([
    {
      id: 1,
      image: duniaDurian,
      store_name: "Dunia Durian",
      description: "Durian lokal dengan berbagai variasi lokal dan import",
    },
    {
      id: 2,
      image: "",
      store_name: "Hydroponik ku",
      description: "Sayuran hasil dari hidproponik milik UMKM",
    },
    {
      id: 3,
      image: "",
      store_name: "Fruit Paradasie",
      description: "Menyediakan buah buahan lokal setiap musimnya",
    },
    {
      id: 4,
      image: "",
      store_name: "Bakul Tubers",
      description: "Bahan nabati yang diperoleh dari dalam tanah",
    },
  ]);

  return (
    <div className="flex flex-col items-center w-full pt-20 bg-white relative inline-block">
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30 ">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Coming Soon Market
        </p>
      </div>
      <div className="w-4/6 border-t-7 border-gray-600 ">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          {products.map((product) => (
            <MarketCard
              key={product.id}
              image={product.image}
              store_name={product.store_name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import PopularFruitCard from "./popularFruitProductCard";

interface Fruit {
  id: number;
  image: string;
  fruit_name: string;
  description: string;
}

export default function PopularFruit() {
  const [fruits, setFruits] = useState<Fruit[]>([
    {
      id: 1,
      image: "https://png.pngtree.com/png-clipart/20231101/original/pngtree-durian-sweet-internal-malaysia-photo-png-image_13478343.png",
      fruit_name: "Durian",
      description: "Buah tropis yang dikenal sebagai ''Raja Buah'' Dengan daging lembut berwarna krem yang kaya dan tekstur krim yang unik.",
    },
    {
      id: 2,
      image: "https://readytoeat.de/images/650x717-XL-DET/Mango-Supermarkt.png",
      fruit_name: "Mangga",
      description: "Rasakan kelezatan mangga segar, dengan daging buah yang manis, juicy, dan aromatik. bisa dijakan minuman, bahan makanan, dan enak dimakan langsung",
    },
    {
      id: 3,
      image: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-three-red-super-sweet-and-refreshing-fuji-apples-png-image_5562737.jpg",
      fruit_name: "Apple Fuji",
      description: "Apple Fuji renyah dan manis. Dengan daging buah yang juicy dan rasa yang seimbang, Apple Fuji adalah pilihan sempurna untuk camilan sehat atau tambahan dalam salad dan dessert.",
    },
    {
      id: 4,
      image: "https://www.pngarts.com/files/3/Banana-PNG-Download-Image.png",
      fruit_name: "Pisang Ambon",
      description: "manis dan lembut, dengan tekstur creamy yang memanjakan lidah. Cocok untuk camilan sehari-hari, smoothies, atau sebagai bahan tambahan dalam hidangan penutup.",
    },
  ]);

  return (
    <div className="flex flex-col items-center w-full bg-white relative inline-block pb-16 pt-16">
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30 ">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Popular Fruits Product
        </p>
      </div>
      <div className="w-4/6 border-t-5 border-gray-300 shadow-2xl pt-10">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          {fruits.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
            >
              <PopularFruitCard
                image={product.image}
                fruit_name={product.fruit_name}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

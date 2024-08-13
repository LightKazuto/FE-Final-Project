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
      description: "iiiiiii",
    },
    {
      id: 2,
      image: "",
      fruit_name: "Mangga",
      description: "mmmmmmmmmmmm",
    },
    {
      id: 3,
      image: "",
      fruit_name: "Apple Fuji",
      description: "AAAAAAAAA",
    },
    {
      id: 4,
      image: "",
      fruit_name: "Pisang Ambon",
      description: "PPPPPPPPPPPPP",
    },
  ]);

  return (
    <div className="flex flex-col items-center w-full bg-white relative inline-block">
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30 ">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Popular Fruits Product
        </p>
      </div>
      <div className="w-4/6 border-t-7 border-gray-600 ">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          {fruits.map((product) => (
            <PopularFruitCard
              key={product.id}
              image={product.image}
              fruit_name={product.fruit_name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

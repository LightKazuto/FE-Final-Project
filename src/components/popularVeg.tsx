import { useState } from "react";
import PopularVegCard from "./PopularVegCard";

interface PopularVeg {
  id: number;
  image: string;
  prodact_name: string;
  description: string;
}

export default function PopularVeg() {
  const [popularVeg, setpopularVeg] = useState<PopularVeg[]>([
    {
      id: 1,
      image: "https://png.pngtree.com/png-clipart/20210801/original/pngtree-water-spinach-color-dishes-food-png-image_6598799.jpg",
      prodact_name: "Kang kung",
      description: "Kangkung segar dari hydroponik yg dipanen setiap hari",
    },
    {
      id: 2,
      image: "https://www.pngplay.com/wp-content/uploads/4/Spinach-Free-PNG.png",
      prodact_name: "Bayam Super",
      description: "Bayam super dari bibit import dari petani lokal",
    },
    {
      id: 3,
      image: "https://www.deadseashampoo.com/wp-content/uploads/2021/02/carrot.png",
      prodact_name: "Wortel ",
      description: "Wortel ini hasil tanah dari para UMKM lokal untuk dijadikan bahan makanan",
    },
    {
      id: 4,
      image: "https://png.pngtree.com/png-clipart/20220908/original/pngtree-two-sliced-%E2%80%8B%E2%80%8Bnutritious-cabbage-picture-image_5561447.png",
      prodact_name: "Sayur Kol",
      description: "Kol dari para petani dari daerah tinggi. menjadi kan kol ini berasa segar dan manis",
    },
  ]);

  return (
    <div className="flex flex-col items-center w-full pt-10 bg-white relative inline-block">
      <div className="bg-white w-1/4 absolute top-30 right-30 left-30 bottom-30 ">
        <p className="text-3xl font-bold text-center text-gray-600 mt-[-20px]">
          Popular Vegetable Products
        </p>
      </div>
      <div className="w-4/6 border-t-7 border-gray-600 ">
        <div className="flex flex-wrap justify-center gap-8 p-10 mt-5">
          {popularVeg.map((PopularMarket) => (
            <PopularVegCard
              key={PopularMarket.id}
              image={PopularMarket.image}
              prodact_name={PopularMarket.prodact_name}
              description={PopularMarket.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

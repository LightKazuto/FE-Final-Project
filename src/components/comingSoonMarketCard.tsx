import React from 'react';

interface MarketCardProps {
  image: string;
  store_name: string;
  description: string;
}

const MarketCard: React.FC<MarketCardProps> = ({ image, store_name,description }) => {
  return (
    <div className="overflow-hidden bg-white text-left w-60 h-auto">
      <img src={image} alt={store_name} className="w-64 h-72 object-cover rounded-tr-custom-tr rounded-bl-custom-bl bg-custom-card blur-[4px]" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-500 truncate">{store_name}</h3>
        <p className="text-gray-500 mt-2 ">{description}</p>
      </div>
    </div>
  );
};

export default MarketCard;

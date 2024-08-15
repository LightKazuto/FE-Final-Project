import React from 'react';

interface ProductsProps {
  image: string;
  product_name: string;
  price: number;
}

const ProductsCard: React.FC<ProductsProps> = ({ image, product_name ,price }) => {
  return (
    <div className="overflow-hidden bg-white text-left w-60 h-auto">
      <img src={image} alt={product_name} className="w-64 h-72 object-cover rounded-tr-custom-tr rounded-bl-custom-bl bg-custom-card blur-[4px]" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-500 truncate">{product_name}</h3>
        <p className='text-custom-bg mt-2'>{price}</p>
      </div>
    </div>
  );
};

export default ProductsCard;

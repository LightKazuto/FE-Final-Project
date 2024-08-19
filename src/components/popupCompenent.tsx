import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    image_url: string;
    product_name: string;
    price: number;
    description: string;
    stock: number;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  if (product.stock <= 0) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 max-w-2xl h-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div className="flex items-center pl-4 h-auto">
          <img
            src={product.image_url}
            alt={product.product_name}
            className="w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="ml-10">
            <h2 className="text-2xl font-bold mb-3">{product.product_name}</h2>
            <p className="text-3xl text-red-500 font-medium mb-4">
              Rp.{product.price}
            </p>
            <p className="text-lg font-bold mb-4">Qty :{product.stock}</p>
            <div className="text-md text-justify">
              <p className="font-bold">Description :</p>
              <p className="font-normal">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="float-right pt-5">
          <button
            className="px-4 py-2 bg-green-400 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
            + Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

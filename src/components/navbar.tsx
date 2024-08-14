import React from "react";

interface NavbarProps {
  userRole: "user" | "seller" | "guest";
  onLogout: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ userRole, onLogout }) => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="/" className="flex items-center">
                <img
                  src="https://i.ibb.co.com/71rFsNG/logo-mobilisayur.png"
                  alt="Logo"
                  className="h-16 w-auto mr-2"
                />
                <span className="font-semibold text-gray-500 text-md">
                  MOBILISAYUR
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {/* <a href="#" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Home</a> */}
              <a
                href="/"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Products
              </a>
              <a
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {userRole === "guest" && (
              <>
                <a href="/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </a>
                <a
                  href="/register"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Sign Up
                </a>
              </>
            )}
            {userRole === "user" && (
              <>
                <a href="/cart" className="text-gray-700 hover:text-gray-900">
                  <i className="fa-solid fa-cart-shopping text-lg"></i>
                </a>
                <button
                  onClick={onLogout}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            )}
            {userRole === "seller" && (
              <>
                <a
                  href="/register_product"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  New Product
                </a>
                <button
                  onClick={onLogout}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

const BannerRegisterProduct = () => {
  return (
    <div className="flex items-center  text-black">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 max-w-6xl mx-auto min-w-full bg-custom-bg">
        <div className="flex flex-col items-center justify-center p-6 rounded-l-lg md:col-span-1 lg:col-span-2">
          <h2 className="text-5xl font-bold mb-4 text-center w-4/4">
            Please Register Your Product
          </h2>
          {/* <p className="mb-6 text-center w-3/4">
            Whatever you want from local stores, brought right to your door
          </p> */}
        </div>

        <div className="md:col-span-4 lg:col-span-3 h-96"></div>

        <div className="flex md:col-span-4 lg:col-span-1 justify-righth-96">
          <img
            src="https://mkulimaonline.org/images/Mkulima-Online-Home.jpg"
            alt="hero"
            className="w-full h-auto rounded-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerRegisterProduct;

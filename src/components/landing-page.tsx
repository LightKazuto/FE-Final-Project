import React from "react";

const LandingPage = () => {
  return (
    <div className="flex items-center text-black w-full bg-custom-bg landing-page-container">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto min-w-full bg-custom-bg">
        <div className="flex flex-col justify-center p-6 rounded-l-lg w-full md:w-1/2">
          <h2 className="text-5xl font-bold mb-4 text-center md:text-center w-full md:w-3/4">
            Order groceries for delivery or pickup today
          </h2>
          <p className="mb-6 text-center md:text-center w-full md:w-3/4">
            Whatever you want from local stores, brought right to your door
          </p>
        </div>

        <div className="flex justify-center md:justify-end items-center w-full md:w-1/2">
          <img
            src="https://mkulimaonline.org/images/Mkulima-Online-Home.jpg"
            alt="hero"
            className="w-96 h-auto rounded-lg"
          /> 
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

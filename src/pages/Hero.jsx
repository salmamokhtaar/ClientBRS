import React from 'react';
import heroImage from '../assets/b.jpeg'; // Make sure to replace this with the actual path to your image

const HeroSection = () => {
  return (
    <div className=" text-blue-600 py-20 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to BRS</h1>
          <p className="text-lg md:text-xl mb-6">
            Your one-stop solution for business registration. We provide a seamless and efficient process to get your business registered and running.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={heroImage} alt="Business Registration" className="w-3/4 rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-around mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl">Licenses</h2>
          <p>We assist you in obtaining all the necessary licenses required to operate your business legally. Our team ensures that you meet all regulatory requirements and helps you navigate the complexities of the licensing process.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl">Registration Numbers</h2>
          <p>We provide support in acquiring the appropriate registration numbers for your business. This includes tax identification numbers, employer identification numbers, and other essential registrations needed to establish your business identity.</p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-xl">Compliance</h2>
          <p>Our experts ensure that your business complies with all legal requirements, helping you avoid any potential legal issues and ensuring smooth operations.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
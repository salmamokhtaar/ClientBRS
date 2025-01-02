import React from 'react';
import team from '../assets/t.avif';

const AboutPage = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center p-10 bg-gray-100">
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 pr-6">
        <img src={team} alt="BRS Team" className="w-1/3 md:w-1/2" />
      </div>
      <div className="md:w-1/2 md:mr-20 p-6">
        <h1 className="text-4xl text-blue-600 font-bold mb-4">Who We Are</h1>
        <p className="text-lg mb-6">
          BRS is a group of talented and driven individuals who have come together in efforts of helping other business owners improve their online presence.
        </p>
        <p className="text-lg mb-6">
          Our purpose and goal is to help local businesses through premium digital marketing services. We specialize in creating captivating online experiences that reflect your brand's essence and vision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl text-blue-600 font-bold mb-2">Licenses</h3>
            <p className="text-base">
              We assist you in obtaining all the necessary licenses required to operate your business legally. Our team ensures that you meet all regulatory requirements and helps you navigate the complexities of the licensing process.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl text-blue-600 font-bold mb-2">Registration Numbers</h3>
            <p className="text-base">
              We provide support in acquiring the appropriate registration numbers for your business. This includes tax identification numbers, employer identification numbers, and other essential registrations needed to establish your business identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
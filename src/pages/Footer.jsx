import React from 'react';

const Footer = () => {
  return (
    <footer className=" shadow-md py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">BRS</h2>
        <nav className="mb-4">
          <a href="#" className="mx-4 text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="mx-4 text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="mx-4 text-gray-600 hover:text-blue-600">Business</a>
          <a href="#" className="mx-4 text-gray-600 hover:text-blue-600">Contact</a>
        </nav>
        <div className="flex justify-center mb-4">
          <a href="https://instagram.com" className="mx-2 text-gray-600 hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="mx-2 text-gray-600 hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:example@example.com" className="mx-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 All rights reserved • Developed by <a href="https://portifolio-last.vercel.app/" className="text-blue-600">Salma</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
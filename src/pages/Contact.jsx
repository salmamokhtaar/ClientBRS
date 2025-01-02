import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">Reach Out to Us</h1>
      <p className="text-center mb-4">
        Phone: <a href="tel:617157083" className="text-blue-600">617157083</a>
      </p>
      <p className="text-center mb-6">
        Email: <a href="mailto:salmam.mohyadiin@gmail.com" className="text-blue-600">salmam.mohyadiin@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactUs;
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://serverbrs.onrender.com/api/signup', formData);
      toast.success(res.data.message); // Display success message from the server response
      setFormData({ username: '', email: '', password: '' }); // Clear input fields
    } catch (err) {
      toast.error(err.response.data.error); // Display error message from the server response
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md w-80" autoComplete="off">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
          autoComplete="off"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Signup
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
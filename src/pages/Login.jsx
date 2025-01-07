import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://serverbrs.onrender.com/api/login', formData);
      toast.success('Login successful!');
      localStorage.setItem('token', res.data.token); // Save the token to localStorage
      setFormData({ email: '', password: '' }); // Clear input fields
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md w-80" autoComplete="off">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
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
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
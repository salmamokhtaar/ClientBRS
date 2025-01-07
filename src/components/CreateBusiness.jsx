import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNotification } from '../context/NotificationContext';

function CreateBusiness({ onCreate, onClose }) {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        contactEmail: '',
        contactPhone: '',
        contactAddress: '',
        businessAddress: '',
        businessType: '',
        registrationNumber: '',
        licenses: '',
        documents: [],
        date: '',
    });

    const { addNotification } = useNotification();

    const businessTypes = [
        "Sole Proprietorship",
        "Partnership",
        "LLC",
        "Corporation",
        "Non-Profit"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, documents: e.target.files });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (key === 'documents') {
                Array.from(formData[key]).forEach(file => {
                    formDataToSend.append('documents', file);
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const res = await axios.post('https://serverbrs.onrender.com/api/register-business', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success(res.data.message);
            onCreate(res.data.business);
            addNotification('New business registered successfully!');
            setFormData({
                businessName: '',
                ownerName: '',
                contactEmail: '',
                contactPhone: '',
                contactAddress: '',
                businessAddress: '',
                businessType: '',
                registrationNumber: '',
                licenses: '',
                documents: [],
                date: '',
            });
            onClose();
            window.location.reload(); // Refresh the page
        } catch (err) {
            toast.error(err.response.data.error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg w-2/3">
                <h2 className="text-xl font-bold mb-4">Create New Business</h2>
                <form onSubmit={handleSubmit} className="mt-10 mb-10">
                    <div className="mb-3">
                        <label className="block text-gray-700">Business Name:</label>
                        <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Owner Name:</label>
                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Contact Email:</label>
                        <input
                            type="email"
                            name="contactEmail"
                            value={formData.contactEmail}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Contact Phone:</label>
                        <input
                            type="text"
                            name="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Contact Address:</label>
                        <input
                            type="text"
                            name="contactAddress"
                            value={formData.contactAddress}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Business Address:</label>
                        <input
                            type="text"
                            name="businessAddress"
                            value={formData.businessAddress}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Business Type:</label>
                        <select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        >
                            <option value="">Select Business Type</option>
                            {businessTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Registration Number:</label>
                        <input
                            type="text"
                            name="registrationNumber"
                            value={formData.registrationNumber}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Licenses:</label>
                        <input
                            type="text"
                            name="licenses"
                            value={formData.licenses}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Documents:</label>
                        <input
                            type="file"
                            name="documents"
                            onChange={handleFileChange}
                            className="border rounded p-2 w-full"
                            multiple
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700">Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default CreateBusiness;
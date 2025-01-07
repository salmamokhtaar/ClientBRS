import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNotification } from '../context/NotificationContext';
import UpdateBusiness from './UpdateBusiness';
import CreateBusiness from './CreateBusiness'; // Import the new component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageBusinesses() {
    const [businesses, setBusinesses] = useState([]);
    const [editingBusiness, setEditingBusiness] = useState(null);
    const [showCreateBusiness, setShowCreateBusiness] = useState(false);
    const { addNotification } = useNotification();

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const res = await axios.get('https://serverbrs.onrender.com/api/businesses');
                setBusinesses(res.data);
            } catch (err) {
                toast.error('Failed to fetch businesses');
            }
        };

        fetchBusinesses();
    }, []);

    const handleUpdateBusiness = async (updatedBusiness) => {
        try {
            const res = await axios.put(`https://serverbrs.onrender.com/api/businesses/${updatedBusiness._id}`, updatedBusiness, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const updatedBusinesses = businesses.map(business =>
                business._id === updatedBusiness._id ? res.data.business : business
            );
            setBusinesses(updatedBusinesses);
            setEditingBusiness(null);
            toast.success('Business updated successfully!');
            addNotification('Business updated successfully!');
        } catch (err) {
            toast.error('Failed to update business');
        }
    };

    const handleDeleteBusiness = async (businessId) => {
        const confirmed = window.confirm("Are you sure you want to delete this business?");
        if (confirmed) {
            try {
                await axios.delete(`https://serverbrs.onrender.com/api/businesses/${businessId}`);
                setBusinesses(businesses.filter(business => business._id !== businessId));
                toast.success('Business deleted successfully!');
                addNotification('Business deleted successfully!');
            } catch (err) {
                toast.error('Failed to delete business');
            }
        }
    };

    const handleCreateBusiness = (newBusiness) => {
        setBusinesses([...businesses, newBusiness]);
        setShowCreateBusiness(false);
        toast.success('Business created successfully!');
        addNotification('New business registered successfully!');
    };

    return (
        <div className="p-3 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">All Businesses</h1>
                <button 
                    onClick={() => setShowCreateBusiness(true)} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Create Business
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Company Name</th>
                            <th className="py-2 px-4 border-b text-left">Owner Name</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Phone</th>
                            <th className="py-2 px-4 border-b text-left">Contact Address</th>
                            <th className="py-2 px-4 border-b text-left">Category</th>
                            <th className="py-2 px-4 border-b text-left">Registration Number</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                            <th className="py-2 px-4 border-b text-left">Documents</th>
                            <th className="py-2 px-4 border-b text-left">Date</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {businesses.map((business) => (
                            <tr key={business._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{business.businessName}</td>
                                <td className="py-2 px-4 border-b">{business.ownerName}</td>
                                <td className="py-2 px-4 border-b">{business.contactEmail}</td>
                                <td className="py-2 px-4 border-b">{business.contactPhone}</td>
                                <td className="py-2 px-4 border-b">{business.contactAddress}</td>
                                <td className="py-2 px-4 border-b">{business.businessType}</td>
                                <td className="py-2 px-4 border-b">{business.registrationNumber}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className={`px-2 py-1 rounded ${business.status === 'approved' ? 'bg-green-200 text-green-800' : business.status === 'rejected' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                                        {business.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {business.documents.map((doc, index) => (
                                        <a key={index} href={`https://serverbrs.onrender.com/${doc}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Document {index + 1}
                                        </a>
                                    ))}
                                </td>
                                <td className="py-2 px-4 border-b">{new Date(business.createdAt).toLocaleDateString()}</td>
                                <td className="py-2 px-4 border-b flex justify-start space-x-2">
                                    <button onClick={() => setEditingBusiness(business)} className="text-blue-500 hover:text-blue-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleDeleteBusiness(business._id)} className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Update Business Modal */}
            {editingBusiness && (
                <UpdateBusiness business={editingBusiness} onUpdate={handleUpdateBusiness} />
            )}

            {/* Create Business Form */}
            {showCreateBusiness && (
                <CreateBusiness onCreate={handleCreateBusiness} onClose={() => setShowCreateBusiness(false)} />
            )}

            <ToastContainer />
        </div>
    );
}

export default ManageBusinesses;
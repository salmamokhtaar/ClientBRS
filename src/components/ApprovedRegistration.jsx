import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import UpdateBusiness from './UpdateBusiness'; // Import the UpdateBusiness component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ApprovedRegistration() {
    const [approvedBusinesses, setApprovedBusinesses] = useState([]);
    const [editingBusiness, setEditingBusiness] = useState(null);

    useEffect(() => {
        const fetchApprovedBusinesses = async () => {
            try {
                const res = await axios.get('https://serverbrs.onrender.com/api/businesses/approved');
                setApprovedBusinesses(res.data);
            } catch (err) {
                toast.error('Failed to fetch approved businesses');
            }
        };

        fetchApprovedBusinesses();
    }, []);

    const handleUpdateBusiness = (updatedBusiness) => {
        const updatedBusinesses = approvedBusinesses.map(business =>
            business._id === updatedBusiness._id ? updatedBusiness : business
        );
        setApprovedBusinesses(updatedBusinesses);
        setEditingBusiness(null);
        toast.success('Business updated successfully!');
    };

    const handleDeleteBusiness = async (businessId) => {
        const confirmed = window.confirm("Are you sure you want to delete this business?");
        if (confirmed) {
            try {
                await axios.delete(`https://serverbrs.onrender.com/api/businesses/${businessId}`);
                setApprovedBusinesses(approvedBusinesses.filter(business => business._id !== businessId));
                toast.success('Business deleted successfully!');
            } catch (err) {
                toast.error('Failed to delete business');
            }
        }
    };

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Approved Businesses</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Company Name</th>
                            <th className="py-2 px-4 border-b">Owner Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Contact Address</th>
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Registration Number</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {approvedBusinesses.map((business) => (
                            <tr key={business._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{business.businessName}</td>
                                <td className="py-2 px-4 border-b">{business.ownerName}</td>
                                <td className="py-2 px-4 border-b">{business.contactEmail}</td>
                                <td className="py-2 px-4 border-b">{business.contactPhone}</td>
                                <td className="py-2 px-4 border-b">{business.contactAddress}</td>
                                <td className="py-2 px-4 border-b">{business.businessType}</td>
                                <td className="py-2 px-4 border-b">{business.registrationNumber}</td>
                                <td className="py-2 px-4 border-b flex space-x-2">
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
            {editingBusiness && (
                <UpdateBusiness business={editingBusiness} onUpdate={handleUpdateBusiness} />
            )}
            <ToastContainer />
        </div>
    );
}

export default ApprovedRegistration;
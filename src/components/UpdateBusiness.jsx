import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const categories = [
    'Sole Proprietorship',
    'Partnership',
    'Limited Liability Company (LLC)',
    'Corporation',
    'Non-Profit Organization'


];

const statuses = [
    'waiting',
    'rejected',
    'approved'
];

function UpdateBusiness({ business, onUpdate }) {
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
        status: 'waiting',
        documents: [],
    });
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        if (business) {
            setFormData({
                businessName: business.businessName,
                ownerName: business.ownerName,
                contactEmail: business.contactEmail,
                contactPhone: business.contactPhone,
                contactAddress: business.contactAddress,
                businessAddress: business.businessAddress,
                businessType: business.businessType,
                registrationNumber: business.registrationNumber,
                licenses: business.licenses,
                status: business.status,
                documents: business.documents,
            });
            setDocuments(business.documents || []);
        }
    }, [business]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setDocuments(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        Array.from(documents).forEach(file => {
            formDataToSend.append('documents', file);
        });

        try {
            const res = await axios.put(`https://serverbrs.onrender.com/api/businesses/${business._id}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success(res.data.message);
            onUpdate(res.data.business); // Call onUpdate with the updated business data
        } catch (err) {
            toast.error(err.response.data.error);
        }
    };

    return (
        <div className="mt-4 p-4 bg-white border rounded shadow">
            <h2 className="text-xl font-bold mb-2">Update Business</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    key !== '_id' && key !== 'documents' && key !== 'createdAt' && (
                        <div key={key} className="mb-4">
                            <label className="block text-sm font-medium mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
                            {key === 'businessType' ? (
                                <select
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="border rounded w-full px-3 py-2"
                                    required
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            ) : key === 'status' ? (
                                <select
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="border rounded w-full px-3 py-2"
                                    required
                                >
                                    {statuses.map((status) => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={key === 'contactEmail' ? 'email' : 'text'}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    placeholder={key.replace(/([A-Z])/g, ' $1')}
                                    required
                                    className="border rounded w-full px-3 py-2"
                                />
                            )}
                        </div>
                    )
                ))}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Documents</label>
                    <input
                        type="file"
                        name="documents"
                        onChange={handleFileChange}
                        className="border rounded w-full px-3 py-2"
                        multiple
                    />
                    {Array.isArray(documents) && documents.length > 0 && (
                        <div className="mt-2">
                            {Array.from(documents).map((doc, index) => (
                                <div key={index} className="text-sm text-gray-600">
                                    {typeof doc === 'string' ? (
                                        <a href={`https://serverbrs.onrender.com/${doc}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Document {index + 1}
                                        </a>
                                    ) : (
                                        doc.name
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => onUpdate(null)} className="mr-2 bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateBusiness;
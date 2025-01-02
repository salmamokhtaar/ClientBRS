import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GenerateReports() {
    const [reportType, setReportType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [region, setRegion] = useState('');
    const [reports, setReports] = useState([]);

    const handleGenerateReport = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get('http://localhost:3000/api/businesses/report', {
                params: {
                    type: reportType,
                    startDate,
                    endDate,
                    region
                }
            });
            setReports(res.data);
        } catch (err) {
            toast.error('Failed to fetch reports');
        }
    };

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Generate Reports</h1>
            <form onSubmit={handleGenerateReport} className="mb-5">
                <div className="mb-4">
                    <label className="block mb-2">Report Type:</label>
                    <select
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Business Type">Business Type</option>
                        <option value="Date">Date</option>
                        <option value="Region">Region</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Region:</label>
                    <input
                        type="text"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        placeholder="Enter region"
                        className="border p-2 rounded w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Generate Report
                </button>
            </form>

            {reports.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold mb-2">Generated Reports</h2>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border-b">Company Name</th>
                                <th className="py-2 px-4 border-b">Owner Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Phone</th>
                                <th className="py-2 px-4 border-b">Contact Address</th>
                                <th className="py-2 px-4 border-b">Category</th>
                                <th className="py-2 px-4 border-b">Registration Number</th>
                                <th className="py-2 px-4 border-b">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr key={report._id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{report.businessName}</td>
                                    <td className="py-2 px-4 border-b">{report.ownerName}</td>
                                    <td className="py-2 px-4 border-b">{report.contactEmail}</td>
                                    <td className="py-2 px-4 border-b">{report.contactPhone}</td>
                                    <td className="py-2 px-4 border-b">{report.contactAddress}</td>
                                    <td className="py-2 px-4 border-b">{report.businessType}</td>
                                    <td className="py-2 px-4 border-b">{report.registrationNumber}</td>
                                    <td className="py-2 px-4 border-b">{new Date(report.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default GenerateReports;
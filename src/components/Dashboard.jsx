import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BusinessChart from './BusinessChart';
import AnotherChart from './AnotherChart';
import axios from 'axios';

const Dashboard = () => {
    const location = useLocation();
    const hideCardsPaths = ['/dashboard/view-businesses', '/dashboard/approved-registrations', '/dashboard/rejected-registrations', '/dashboard/generate-reports', '/dashboard/manage-users', '/dashboard/profile'];

    const [approvedBusinesses, setApprovedBusinesses] = useState(0);
    const [registeredBusinesses, setRegisteredBusinesses] = useState(0);
    const [rejectedApplications, setRejectedApplications] = useState(0);
    const [registeredUsers, setRegisteredUsers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const approvedResponse = await axios.get('https://serverbrs.onrender.com/api/businesses/approved');
                setApprovedBusinesses(approvedResponse.data.length);

                const registeredResponse = await axios.get('https://serverbrs.onrender.com/api/businesses/total');
                setRegisteredBusinesses(registeredResponse.data.total);

                const rejectedResponse = await axios.get('https://serverbrs.onrender.com/api/businesses/rejected');
                setRejectedApplications(rejectedResponse.data.length);

                const usersResponse = await axios.get('https://serverbrs.onrender.com/api/users');
                setRegisteredUsers(usersResponse.data.length);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <TopBar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-5 bg-gray-100 overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

                    {/* Conditionally render cards */}
                    {!hideCardsPaths.includes(location.pathname) && (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-sky-700 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Approved Businesses</h2>
                                        <p className='text-2xl font-bold'>{approvedBusinesses}</p>
                                        <p className='text-sm text-gray-500'>+5% from last month</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">These are businesses that have successfully completed the registration process and are operating legally.</p>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-file-invoice"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Registered Businesses</h2>
                                        <p className='text-2xl font-bold'>{registeredBusinesses}</p>
                                        <p className='text-sm text-gray-500'>+1% from last month</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">Total number of businesses registered in the system, indicating the growth in business activity.</p>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-green-500 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-times-circle"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Rejected Applications</h2>
                                        <p className='text-2xl font-bold'>{rejectedApplications}</p>
                                        <p className='text-sm text-gray-500'>+3% from last month</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">These applications were not approved due to various reasons, including incomplete documentation.</p>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between'>
                                <div className="flex items-center mb-3">
                                    <div className="h-12 w-12 bg-pink-500 text-white rounded-full flex items-center justify-center">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className='text-lg font-semibold'>Registered Users</h2>
                                        <p className='text-2xl font-bold'>{registeredUsers}</p>
                                        <p className='text-sm text-gray-500'>New users this month</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">Number of users registered in the system, allowing for better management and communication.</p>
                            </div>
                        </div>
                    )}

                    {/* Conditionally render charts */}
                    {location.pathname === '/dashboard' && (
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="bg-white rounded-lg shadow-lg p-5">
                                <AnotherChart />
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-5">
                                <BusinessChart />
                            </div>
                        </div>
                    )}

                    <div className="mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
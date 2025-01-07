import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser'; // Import the UpdateUser component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://serverbrs.onrender.com/api/users');
                setUsers(res.data);
            } catch (err) {
                toast.error('Failed to fetch users');
            }
        };

        fetchUsers();
    }, []);

    const handleUpdateUser = async (updatedUser) => {
        try {
            const res = await axios.put(`https://serverbrs.onrender.com/api/users/${updatedUser._id}`, updatedUser, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const updatedUsers = users.map(user =>
                user._id === updatedUser._id ? res.data.user : user
            );
            setUsers(updatedUsers);
            setEditingUser(null);
            toast.success('User updated successfully!');
        } catch (err) {
            toast.error('Failed to update user');
        }
    };

    const handleDeleteUser = async (userId) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (confirmed) {
            try {
                await axios.delete(`https://serverbrs.onrender.com/api/users/${userId}`);
                setUsers(users.filter(user => user._id !== userId));
                toast.success('User deleted successfully!');
            } catch (err) {
                toast.error('Failed to delete user');
            }
        }
    };

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border-b text-left">Username</th>
                            <th className="py-2 px-4 border-b text-left">Email</th>
                            <th className="py-2 px-4 border-b text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{user.username}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b flex justify-start space-x-2">
                                    <button onClick={() => setEditingUser(user)} className="text-blue-500 hover:text-blue-700">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleDeleteUser(user._id)} className="text-red-500 hover:text-red-700">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editingUser && (
                <UpdateUser user={editingUser} onUpdate={handleUpdateUser} />
            )}
            <ToastContainer />
        </div>
    );
}

export default ManageUsers;
import React, { useState } from 'react';

function UpdateUser({ user, onUpdate }) {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { ...user, username, email };
        onUpdate(updatedUser);
    };

    return (
        <div className="p-5 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Update User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
              
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Update User
                </button>
            </form>
        </div>
    );
}

export default UpdateUser;
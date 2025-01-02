import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useNotification } from '../context/NotificationContext';

const Notification = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const { notifications } = useNotification();

    const toggleNotifications = () => {
        setShowNotifications((prev) => !prev);
    };

    return (
        <div className="relative">
            <button onClick={toggleNotifications} className="relative">
                <FontAwesomeIcon icon={faBell} className="h-6 w-6 text-gray-600 cursor-pointer" />
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                        {notifications.length}
                    </span>
                )}
            </button>
            {showNotifications && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <ul className="max-h-60 overflow-y-auto">
                        {notifications.map((notification) => (
                            <li key={notification.id} className="p-2 border-b hover:bg-gray-100">
                                {notification.message}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Notification;
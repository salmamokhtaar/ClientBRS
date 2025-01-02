// // src/TopBar.jsx
// import React from 'react';
// import Notification from './Notification';
// import Profile from './Profile';

// const TopBar = () => {
//     return (
//         <div className="bg-white shadow-2xl flex items-center justify-between p-4">
//             <div className="text-xl text-blue-600 font-semibold">Dashboard</div>

//             <div className="flex flex-1 justify-center">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border rounded-full py-2 px-4 w-1/2" // Adjust width as needed
//                 />
//             </div>
            
//             <div className="flex items-center space-x-4">
//                 <Notification />
//                 <Profile />
//             </div>
//         </div>
//     );
// };

// export default TopBar;
// src/TopBar.jsx
// import React from 'react';
// import Notification from './Notification';
// import Profile from './Profile';
// import { Link } from 'react-router-dom';

// const TopBar = () => {
//     return (
//         <div className="bg-white shadow-2xl flex items-center justify-between p-4 fixed-top">
//             <div>
//                 <Link  to="/" className="text-xl text-blue-600 font-semibold"> Admin</Link> </div>

//             <div className="flex flex-1 justify-center">
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="border rounded-full py-2 px-4 w-1/2" // Adjust width as needed
//                 />
//             </div>
            
//             <div className="flex items-center space-x-4">
//                 <Notification />
//                 <Profile />
//             </div>
//         </div>
//     );
// };

// export default TopBar;

import React from 'react';
import Notification from './Notification';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="bg-white shadow-2xl flex items-center justify-between p-4 fixed-top">
            <div>
                <Link to="/" className="text-xl text-blue-600 font-semibold">Admin</Link>
            </div>

            <div className="flex flex-1 justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-full py-2 px-4 w-1/2" // Adjust width as needed
                />
            </div>
            
            <div className="flex items-center space-x-4">
                <Notification />
                <Profile />
            </div>
        </div>
    );
};

export default TopBar;
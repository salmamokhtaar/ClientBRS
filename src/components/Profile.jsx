// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext'; // Import AuthContext

// function Profile() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="flex items-center space-x-4">
//       <img
//         src={user?.profileImage || 'https://via.placeholder.com/150'}
//         alt="Profile"
//         className="w-10 h-10 rounded-full"
//       />
//       <div>
//         <p className="font-bold">{user?.username}</p>
//         <p className="text-gray-600">{user?.email}</p>
//       </div>
//     </div>
//   );
// }

// export default Profile;



import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center space-x-4">
      <img
        src={user?.profileImage || 'https://via.placeholder.com/150'}
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-bold">{user?.username}</p>
        <p className="text-gray-600">{user?.email}</p>
      </div>
    </div>
  );
}

export default Profile;
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch the logged-in user's data from the backend
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
//         if (token) {
//           const res = await axios.get('http://localhost:3000/api/users/me', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(res.data);
//         }
//       } catch (err) {
//         console.error('Failed to fetch user data', err);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext };



import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's data from the backend
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        if (token) {
          const res = await axios.get('http://localhost:3000/api/users/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data);
        }
      } catch (err) {
        console.error('Failed to fetch user data', err);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
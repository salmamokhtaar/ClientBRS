// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Dashboard from './components/Dashboard';
// import ApprovedRegistration from './components/ApprovedRegistration';
// import ManageUsers from './components/ManageUsers';
// import GenerateReports from './components/GenerateReports';
// import ViewBusinesses from './components/ViewBussiness.jsx';
// import Profile from './components/Profile';
// import PrivateRoute from './components/PrivateRoute';
// import RejectedRegistrations from './components/RejectedRegestrations.jsx';
// import { NotificationProvider } from './context/NotificationContext';
// import { AuthProvider } from './context/AuthContext';

// const App = () => {
//   return (
//     <AuthProvider>
//       <NotificationProvider>
//         <Router>
//           <div className="App">
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route
//                 path="/signup"
//                 element={
//                   <PrivateRoute>
//                     <Signup />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/*"
//                 element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 }
//               >
//                 <Route path="approved-registrations" element={<ApprovedRegistration />} />
//                 <Route path="rejected-registrations" element={<RejectedRegistrations />} />
//                 <Route path="manage-users" element={<ManageUsers />} />
//                 <Route path="generate-reports" element={<GenerateReports />} />
//                 <Route path="view-businesses" element={<ViewBusinesses />} />
//                 <Route path="profile" element={<Profile />} />
//               </Route>
//             </Routes>
//           </div>
//         </Router>
//       </NotificationProvider>
//     </AuthProvider>
//   );
// };

// export default App;



// without home page 

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Dashboard from './components/Dashboard';
// import ApprovedRegistration from './components/ApprovedRegistration';
// import ManageUsers from './components/ManageUsers';
// import GenerateReports from './components/GenerateReports';
// import ViewBusinesses from './components/ViewBussiness.jsx';
// import Profile from './components/Profile';
// import PrivateRoute from './components/PrivateRoute';
// import RejectedRegistrations from './components/RejectedRegestrations.jsx';
// import { NotificationProvider } from './context/NotificationContext';
// import { AuthProvider } from './context/AuthContext';

// const App = () => {
//   return (
//     <AuthProvider>
//       <NotificationProvider>
//         <Router>
//           <div className="App">
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route
//                 path="/signup"
//                 element={
//                   <PrivateRoute>
//                     <Signup />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/dashboard/*"
//                 element={
//                   <PrivateRoute>
//                     <Dashboard />
//                   </PrivateRoute>
//                 }
//               >
//                 <Route path="approved-registrations" element={<ApprovedRegistration />} />
//                 <Route path="rejected-registrations" element={<RejectedRegistrations />} />
//                 <Route path="manage-users" element={<ManageUsers />} />
//                 <Route path="generate-reports" element={<GenerateReports />} />
//                 <Route path="view-businesses" element={<ViewBusinesses />} />
//                 <Route path="profile" element={<Profile />} />
//               </Route>
//             </Routes>
         
//           </div>
//         </Router>
//       </NotificationProvider>
//     </AuthProvider>
//   );
// };

// export default App;  



// with home page

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import ApprovedRegistration from './components/ApprovedRegistration';
import ManageUsers from './components/ManageUsers';
import GenerateReports from './components/GenerateReports';
import ViewBusinesses from './components/ViewBussiness.jsx';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import RejectedRegistrations from './components/RejectedRegestrations.jsx';
import { NotificationProvider } from './context/NotificationContext';
import { AuthProvider } from './context/AuthContext';
import Header from './pages/Header';
import Hero from './pages/Hero';
import BusinessType from './pages/BusinessType';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/signup"
                element={
                  <PrivateRoute>
                    <Signup />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                <Route path="approved-registrations" element={<ApprovedRegistration />} />
                <Route path="rejected-registrations" element={<RejectedRegistrations />} />
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path="generate-reports" element={<GenerateReports />} />
                <Route path="view-businesses" element={<ViewBusinesses />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Hero />
                    <About/>
                    <BusinessType />
                    <Contact/>
                    <Footer />
                 
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;
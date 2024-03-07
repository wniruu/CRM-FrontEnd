import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrProtoType from './component/crProtoType';
import Home from './home';
import UserLogin from'./users/userLogin'
import UserRegistration from './users/userRegistration'
import Dashboard from './users/dashboard';
import UserAccount from './component/userAccount';
import Crview from './component/viewCr'
import CreateCr from './component/createCr'
import { ToastContainer } from 'react-toastify';
import AddUser from './component/addUser';
import Log from './component/log';
import ProtectedRoute from './ProtectedRoute';
import DeveloperCr from './component/developerCr'



function App() {
  

  return (
    
      <div>
    <Router>
      <ToastContainer/>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />;
            <Route path="/UserLogin" element= {<UserLogin/>} />
            <Route path="/UserRegistration" element= {<UserRegistration/>}/>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route path="UserAccount" element={<ProtectedRoute><UserAccount /></ProtectedRoute>} />
              <Route path="createCr" element={<ProtectedRoute><CreateCr /></ProtectedRoute>} />
              <Route path="viewCr" element={<ProtectedRoute><Crview/></ProtectedRoute>}/>
              <Route path="addUser" element={<ProtectedRoute><AddUser/></ProtectedRoute>}/>
              <Route path="log" element={<ProtectedRoute><Log/></ProtectedRoute>}/>
              <Route path="crProtoType" element={<ProtectedRoute><CrProtoType/></ProtectedRoute>}/>
              <Route path="developerCr" element={<ProtectedRoute><DeveloperCr/></ProtectedRoute>}/>
            </Route>
          </Routes>
        </Router>
      </div>    
  )
}

export default App

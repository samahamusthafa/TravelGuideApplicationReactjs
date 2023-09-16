import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from '../Pages/Admin/Register';
import Login from '../Pages/Admin/Login';
import Travelers from '../Pages/Admin/TravelersList';

function AdminRoutes() {
  return (
    <div>
        <Routes>
           <Route path="/register" element={<Register/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/travelerslist" element={<Travelers/>}/>
        </Routes>
      
    </div>
  )
}

export default AdminRoutes;

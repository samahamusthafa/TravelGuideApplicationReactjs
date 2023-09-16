import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserRoutes from './Routes/user';
import AdminRoutes from './Routes/admin';

function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/*' element={<UserRoutes/>}/>
          <Route path='/admin/*' element={<AdminRoutes/>}/> 
        </Routes>
      </Router>

    </div>
  )
}

export default App

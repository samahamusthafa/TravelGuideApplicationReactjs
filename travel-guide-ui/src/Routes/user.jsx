import React from "react";
import {Routes,Route} from "react-router-dom";
import Register from "../Pages/User/Register";
import Login from "../Pages/User/Login";
import Home from "../Pages/User/Home";
import Community from "../Pages/User/Community";

function UserRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/community" element={<Community/>}/>
            </Routes>
        </div>
    )
}
export default UserRoutes;
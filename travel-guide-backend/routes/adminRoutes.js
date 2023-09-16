


 import express from "express";
 import {TravelersList} from "../controllers/adminController.js";


const adminRoutes = express.Router();

// adminRoutes.post('/register',AdminRegister );
// adminRoutes.post('/register',AdminLogin );

adminRoutes.get('/travelerslist',TravelersList);

export default adminRoutes;
  
  
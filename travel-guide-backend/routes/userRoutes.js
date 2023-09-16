import express from "express";
import { UserLogin, UserRegister} from "../controllers/userController.js";


const router = express.Router();

router.post('/register',UserRegister );
router.post('/login',UserLogin );



export default router;
  
  
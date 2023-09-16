import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routes/userRoutes.js";
// import guideRoutes from "./routes/guideRoutes.js";
 import adminRoutes from "./routes/adminRoutes.js";
import dotenv from "dotenv";
dotenv.config();

import expressSession from "express-session";





const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));




mongoose.connect("mongodb://127.0.0.1:27017/myTravelGuideApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
})


.catch((error) => {
  console.error("DB connection error:", error);
});




app.use("/", router);
 app.use("/admin", adminRoutes);
// app.use("/guide", guideRoutes);
  


  



 app.listen(3000,()=>{
   console.log("app started at port 3000")
 })


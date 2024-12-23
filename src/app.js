//Updated At: 21-DEC-2024 

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; 

//Custome Middlewares Funtions 
import { logReqRes } from "./middlewares/txtLog.js";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

//Middlewares 
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser()); 

//Custome Middlewares 
app.use(logReqRes("log.txt")); 

////Routes Import
import homeRouter from "./routes/home.routes.js"
import userRouter from './routes/user.routes.js'
//import dashboardRouter from "./routes/dashboard.routes.js"


////Routes Declaration
app.use("/api/home", homeRouter)
app.use("/api/users", userRouter)
//app.use("/api/dashboard", dashboardRouter)


//// http://localhost:8000/api/users/register

export { app };
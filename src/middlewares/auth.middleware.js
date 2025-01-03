//Updated At: 21-DEC-2024

import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
 
export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        ////This Code will be considered later
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        // // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?.UserID) //.select("-password -refreshToken") //Consider it later
    
        if (!user || user?.recordset?.length === 0) {
            
            throw new ApiError(401, "Invalid Access Token")
        }

        // //No Record Found
        // if (user?.recordset.length === 0)   {

        //     throw new ApiError(401, "Invalid Access Token")
        // }
    
        req.user = user;
        next();
        
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
});
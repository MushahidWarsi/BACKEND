//Updated At: 26-DEC-2024 

import { Router } from 'express';
import {
    loginUser,  
    getAll,
    getById,
    saveRecord,
    deleteRecord,
    getCurrentRecord
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

//open routes
router.route("/login").post(loginUser)

//secured routes
router.route("/all").get(verifyJWT, getAll)               //Get all records
router.route("/c/:Id").get(verifyJWT, getById)            //Get specific record
router.route("/save").post(verifyJWT, saveRecord)         //Save New record
router.route("/save").patch(verifyJWT, saveRecord)        //Edit record
router.route("/delete").delete(verifyJWT, deleteRecord)   //Delete record
//WIP
router.route("/current-user").get(verifyJWT, getCurrentRecord)
//

/*
//Get all the records

// //DontDelete
// router.route('/').get((req, res) => {
//     res.send("Welcome to User Router");
//     //res.send({Result: 'Server Started Successfully.',});  
//   });

router
  .route('/')
  .get((req, res) => {
    DB.getAllUsers().then((data) => {
      res.json(data[0]);
    })
  })

  //router.route("/current-user").get(verifyJWT, getCurrentUser)
  //router.route("/current-user").get(getCurrentUser) //It will be on later verifyJWT
  //router.route("/all").get(getAllUsers) //Get all the records
  //router.route("/allFromPool").get(getAllUsersFromPool) //Get all the records from Pool
  //router.route("/allFromPool2").get(getAllUsersFromPool2) //Get all the records from Pool
  ////router.route('/allOld').get((req, res) => { getAllUsersOld(req, res).then((data) => { res.json(data); }) })  
    */ 


  export default router;
//Last Updated: 21-DEC-2024 

import mssql from "mssql";
import dbconfig from "./dbconfig.js"  

let poolPromise = null;

const connectDB = async () => {
    try {
        //const connectionInstance = await mssql.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //const connectionInstance = await mssql.connect('Server=localhost,1433;Database=AL_Accounts;User Id=sql;Password=sql2014;Encrypt=false')
        
        //const connectionInstance = await mssql.connect(dbconfig);// Dont Delete 
        poolPromise = await new mssql.ConnectionPool(dbconfig).connect();

        console.log(`Database Connected Successfully.`); //${poolPromise.available} //console.log(`\n Database connected successfully. DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (err) {
        console.log("Database connection FAILED !!! ", err);
        process.exit(1)
    }
};

export default connectDB;
export { poolPromise };

/*
//##################################################################################
//Short Example: Use Connect String
//##################################################################################
//const sql = require('mssql')
import sql from "mssql";

(async () => {
    try {
        //// make sure that any items are correctly URL encoded in the connection string
        //await sql.connect('Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true')
        await sql.connect('Server=localhost,1433;Database=AL_Accounts;User Id=sql;Password=sql2014;Encrypt=false')
        
        //const result = await sql.query`select * from mytable where id = ${value}`
        const result = await sql.query`SELECT UserID, UserName, IsActive FROM SEC_UserSecurityTAB WHERE UserID <> ''`
        console.dir(result)
    } catch (err) {
        // ... error checks
        console.log("Error :",err)
    }
})() 
//##################################################################################
*/


/*
import sql from "mssql";

const sqlConfig = {
    server: 'localhost',      // if it does not work try- localhost  
    database: 'AL_Accounts',
    user:'sql',// process.env.DB_USER, 
    password: 'sql2014', 
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
  options: {
    encrypt: false, // for azure
    //trustServerCertificate: false // change to true for local dev / self-signed certs
    enableArithAbort: true 
  },
  port: 1433      //Database Port
}


const  sqlConfig2 = {
    server: 'localhost',      // if it does not work try- localhost  
    database: 'AL_Accounts',
    user: 'sql', 
    password: 'sql2014', 
    options: {
       encrypt: false
      //,trustedconnection: true
      ,enableArithAbort: true     
      //,instancename:  'DEV-11'  
    },
    port: 1433      //Database Port
    }

    ////IIFE
;(async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query`SELECT UserID, UserName, IsActive FROM SEC_UserSecurityTAB WHERE UserID <> ''`
  console.log(result)
 } catch (err) {
  // ... error checks
  console.log("Error :",err)
 }
})()
////////////////////////////////////////////////////////
*/


/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/
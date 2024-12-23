//Last Updated : 21-DEC-2024 

import { poolPromise } from "./connectDB.js";

 let mSQLCommand = "";


const ExecuteQuery = async(mQuery,mParams) => {

        try { 
                           
                mSQLCommand = mQuery + " " + mParams;

                await poolPromise;
                const result = await poolPromise.request().query(mSQLCommand);

                //.input('Id', sql.Int, order.Id)
                //.query(mQuery);
                //.input('UserID', sql.NVarChar, String(mParams))
                //.query(mSQLCommand);

                return result;
                
                ////res.json(result.recordset)  
        } 
        catch (err) {
            console.log("Query Execution FAILED !!! ", err);
            return false;
        }
};

const ExecuteActionQuery = async(mQuery,mParams) => {

        try { 
                           
                mSQLCommand = mQuery + " " + mParams;

                await poolPromise;
                await poolPromise.request().query(mSQLCommand);

                return true;
                
                //res.json(result.recordset)  
        } 
        catch (err) {
            console.log("Query Execution FAILED !!! ", err);
            return false;
        }
};

/*
////DontDelete
// const ExecuteQuery = async(mQuery) => {

//         try {
//                 await poolPromise;
//                 const result = await poolPromise.request().query(mQuery);
                
//                 return result;
//                 //res.json(result.recordset)  
//         } 
//         catch (error) {
//             console.log("SQL Query Execution FAILED !!! ", error);
//         }
    
// };

/////
                let pool = await sql.connect(config);
                let insertProduct = await pool.request()
                .input('Id', sql.Int, order.Id)
                .input('Title', sql.NVarChar, order.Title)
                .input('Quantity', sql.Int, order.Quantity)
                .input('Message', sql.NVarChar, order.Message)
                .input('City', sql.NVarChar, order.City)
                //.execute('InsertOrders'); // With SP
                .query("insert into Orders (Id, Title, Quantity, Message, City) values( @Id, @Title, @Quantity, @Message, @City)  "); // With Query
                return insertProduct.recordsets;
                
*/

export {
        ExecuteQuery,
        ExecuteActionQuery,
};
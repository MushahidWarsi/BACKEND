//Last Updated : 21-DEC-2024 

import {ExecuteQuery}  from "../db/dbServices.js";

let mSP = "SEC_UsersSP";

async function fetchAll() {
    try {
          let mQuery= mSP;//"SEC_UserSecuritySP";
          let mParams = "@nType = 1" ; 
          
          //return await ExecuteQuery(mQuery,mParams);

          return await ExecuteQuery(mQuery, mParams);
          //return Promise.resolve("Hello");
    } catch (err) {
        return err
    }
  };

 
  export { fetchAll };
  
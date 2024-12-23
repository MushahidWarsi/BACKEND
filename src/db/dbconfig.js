//Last Updated : 21-DEC-2024 

const dbconfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  port: Number(process.env.DB_PORT),

  options: {
    encrypt: false //Boolean(process.env.DB_OPTS_ENCRYPT)
    //,enableArithAbort: true     
    //,trustServerCertificate: false // change to true for local dev / self-signed certs
    //,instancename:  'DEV-11'
  },

  pool: {
    max: Number(process.env.DB_POOL_MAX),
    min: Number(process.env.DB_POOL_MIN),
    idleTimeoutMillis: Number(process.env.DB_POOL_IDLETIMEOUTMILLIS)
  }
};

//Testing Purpose (Delete this code later)
const dbconfig2 = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  port: Number(process.env.DB_PORT),

  options: {
    encrypt: false //Boolean(process.env.DB_OPTS_ENCRYPT)
    //,enableArithAbort: true     
    //,trustServerCertificate: false // change to true for local dev / self-signed certs
    //,instancename:  'DEV-11'
  },

  pool: {
    max: Number(process.env.DB_POOL_MAX),
    min: Number(process.env.DB_POOL_MIN),
    idleTimeoutMillis: Number(process.env.DB_POOL_IDLETIMEOUTMILLIS)
  }
};
//module.exports = dbconfig; //Old Style
export default dbconfig;
export {dbconfig2};

/*
//MAK_10_NOV_2024 (DontDelete) (It is working well)
const  dbconfig = {
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
  
  module.exports = dbconfig;
  */
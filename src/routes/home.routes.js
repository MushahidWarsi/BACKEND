//Updated At: 17-NOV-2024 

import { Router } from 'express';

const router = Router();

router
  .route('/')
  .get((req, res) => {
    res.send("Server Started Successfully. " + " at :" +  Date().toString());
    //res.send({Result: 'Server Started Successfully.',});  
  });

  export default router;
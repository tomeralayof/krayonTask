const express = require('express');
const router = express.Router();

router.post("/",(req,res)=>{
  let data = req.body;
  console.log(data);
})



module.exports = router;
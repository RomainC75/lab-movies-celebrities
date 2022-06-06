const router = require("express").Router();
const Celebrity= require('../models/Celebrity.model')


router.get("/", async (req, res, next) => {
  try{
    const ans = await Celebrity.find()
    res.status(200).json(ans)
  }catch(e){
    next(e)
  }
});

router.post("/", async(req,res,next) =>{
  try{
    console.log(req.body)
    const ans = await Celebrity.create(req.body)
    res.status(201).json(ans)
  }catch(e){
    next(404)
  }
})

module.exports = router;

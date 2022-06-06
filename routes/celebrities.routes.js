const router = require("express").Router();
const Celebrity= require('../models/Celebrity.model')


router.get("/:name/:key", async(req,res,next)=>{
  try{
    console.log('got : ', req.params)
    const rgx = new RegExp(req.params.name)
    const ans = await Celebrity.findOne({"name":{$regex:rgx, $options: 'i'}})
    console.log('++',ans)
    if(ans!=null){
      res.status(200).json({
        [req.params.key]:ans[req.params.key]
      })
      return
    }
    next(404)
  }catch(e){
    next(e)
  }
})

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
    const ans = await Celebrity.create(req.body)
    res.status(201).json(ans)
  }catch(e){
    next(404)
  }
})

router.put('/:id', async(req,res,next)=>{
  try{
    const ans = await Celebrity.findByIdAndUpdate(req.params.id,req.body, {new:true})
    res.status(201).json(ans)
  }catch(e){
    next(404)
  }
})

router.delete("/:id", async (req,res,next)=>{
  try{
    const ans = await Celebrity.findByIdAndRemove(req.params.id)
    res.sendStatus(200)
  }catch(e){
    next(404)
  }
})

module.exports = router;

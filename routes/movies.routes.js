const router = require("express").Router();
const Movie = require("../models/Movies.model")
const Celebrity = require('../models/Celebrity.model')
/* GET home page */
router.get("/", async(req, res, next) => {
  try{
    const movies = await Movie.find()
    res.status(200).json(movies)
  }catch(e){
    next(404)
  }
});

router.get("/:id", async (req,res,next)=>{
  try{
    console.log(req.params.id)
    const ans = await Movie.findById(req.params.id).populate("cast")
    res.status(200).json(ans)
  }catch(e){
    next(404)
  }
})

router.post("/", async (req,res,next)=>{
  try{
    console.log(req.body)
    const ans = await Movie.create(req.body)
    res.status(201).json(ans)
  }catch(e){
    next(404)
  }
})

router.delete("/:id", async (req,res,next)=>{
  try{
    console.log(req.params.id)
    const ans = await Movie.findByIdAndDelete(req.params.id)
    res.status(201).json(ans)
  }catch(e){
    next(404)
  }
})

router.patch("/:id", async (req,res,next)=>{
  try{
    console.log(req.params.id)
    const ans = await Movie.findByIdAndUpdate({_id:req.params.id},req.body, {new:true})
    res.status(201).json(ans)
  }catch(e){
    next(404)
  }
})

module.exports = router;
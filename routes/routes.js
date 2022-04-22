
const router = require('express').Router()
const jwt = require('jsonwebtoken');
const {SECRET} = require('../utils/config')

let connectionCount=1;

  router.post('/connection',(req,res)=>{
 
    const body = req.body
   // Check body
    const errorMessages = []
    if (!body.user.name) errorMessages.push("name must be present")
    if (!body.user.mdp) errorMessages.push("mdp must be present")
    if (errorMessages.length > 0) {
      res.status(422).json({ errorMessages })
      return
    }
    const token = jwt.sign(
      { name: body.name},
      SECRET,
    )
   
    const personSchema = {
      ...req.body,
       token:token,
       count:connectionCount
      }
    

    connectionCount++
    //renvoie du token 
    res.json(personSchema)
  
})


module.exports = router
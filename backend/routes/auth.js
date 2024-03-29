const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');



//  Create a User using : POST "/api/auth/createuser" . No Login Required

router.post('/createuser',[
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res)=>{

    // if errors , return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    //  check whether the user with this email already existed
    try {
        
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry a User with this email already exists"})
    }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json(user)
    
    } catch (error) {
     console.error(error.message);
     res.status(500).send('Error occured');   
    }
} )

module.exports = router
const router = require('express').Router();
let User = require('../models/user');

//get all users route
router.route('/').get((req,res)=>{
    User.find()
    .then( userFound => res.json(userFound))
    .catch(error => res.status(400).json('Error:' + error))
});

//add user route
router.route('/add').post((req,res)=>{
    const fullname = req.body.fullname;
    const username = req.body.username;
    const account_type = req.body.account_type;

    const newUser = new User({ fullname, username,account_type});
    newUser.save()
        .then( addedUser => { res.json('New user added' + addedUser)})
            .catch( err => {
                if (err) {
                    if (err.code && err.code === 11000) {
                      res.json("User already existed!")
                    } else {
                      res.status(400).json('Error:' + err)
                    }
                  }
            })      
})


//get single user
router.route('/:id').get((req , res) =>{
    User.findById(req.params.id)
        .then( user => res.json(user))
            .catch( err => res.status(400).json('Error: ' + err ))
})

//delete single user
router.route('/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
        .then( user => res.json('User deleted!'))
            .catch( err => res.status(400).json('Error: ' + err))
})



//update user
router.route('/update/:id').post((req,res) =>{

    User.findById((req.params.id))
        .then( user => {
            user.fullname = req.body.fullname;
            user.username = req.body.username;
            user.account_type = req.body.account_type;
                  
            user.save()
                    .then( () => { res.json('User is updated!')})
                    .catch( err => 
                         res.status(400).json('Error: ' + err))})
        .catch( err =>{
            res.status(400).json('Error:' + err)})
})


module.exports = router;
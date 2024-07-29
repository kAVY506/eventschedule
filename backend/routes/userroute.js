const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')


router.get('/getallusers', userController.viewAllUser);
router.post('/createusers', userController.createUser);
router.put('/updateusers', userController.updateUserById);


module.exports=router;



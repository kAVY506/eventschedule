const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventcontroller');


router.get('/getEvent', eventController.viewAllEvents);
router.post('/createEvent',eventController.createAnEvent);
router.put('/updateEvent', eventController.updateEventById);

module.exports=router;


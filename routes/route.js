const express = require('express');
const { contactForm, donate, verifyPayment } = require('../controllers/authController');
require('dotenv').config();


const router = express.Router();

router.post('/contact',contactForm); 
  

// router.post('/donate',donate)
// router.post('/verifyPayment',verifyPayment)
                  
module.exports = router
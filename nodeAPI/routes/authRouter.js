const express = require('express');

const auth = require('../controller/auth')

const router = express.Router();

router.get('/logIn',auth.signIn);

module.exports=router;
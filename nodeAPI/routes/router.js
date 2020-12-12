const express = require('express');

const employee = require('../controller/employee')

const router = express.Router();

router.get('/emp',employee.getEmployee);

module.exports=router;
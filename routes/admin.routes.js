const express = require('express');
const adminRouter = express.Router();
const {create} = require ('../controller/admin.controller');


adminRouter.post('/add', create);



module.exports = adminRouter;
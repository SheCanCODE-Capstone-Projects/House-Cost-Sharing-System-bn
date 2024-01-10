const express=require('express');
const adminRouter = require('./admin.routes');
const allRoutes = express();

allRoutes.use('/admin' ,adminRouter);


module.exports = allRoutes;
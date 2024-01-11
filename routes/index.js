const express=require('express');
const houseRouter = require('./house.routes');
const allRoutes = express();

allRoutes.use('/house' ,houseRouter);


module.exports = allRoutes;
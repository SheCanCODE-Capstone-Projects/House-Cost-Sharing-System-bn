const express = require('express');
const houseRouter = express.Router();
const {create} = require ('../controller/house.controller');


houseRouter.post('/add', create);

module.exports = houseRouter;
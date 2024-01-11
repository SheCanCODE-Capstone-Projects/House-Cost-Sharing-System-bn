const express = require('express');
const houseRouter = express.Router();
const {create,list} = require ('../controller/house.controller');


houseRouter.post('/add', create);
houseRouter.get('/list', list);

module.exports = houseRouter;
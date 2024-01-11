const express = require('express');
const houseRouter = express.Router();
const {create,list,update } = require ('../controller/house.controller');


houseRouter.post('/add', create);
houseRouter.get('/list', list);
houseRouter.put('/update', update);

module.exports = houseRouter;
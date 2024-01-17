const express= require('express');
const { SignIn , SignUp, ForgotPassword,update} = require('../controller/auth.controller');
const authRoute = express.Router();
// const allRoutes = express.Router();

authRoute.post('/signin', SignIn);
authRoute.post('/signup', SignUp);
authRoute.post('/forgot-password', ForgotPassword);
authRoute.put('/update', update);

module.exports = authRoute;
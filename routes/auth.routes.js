const express= require('express');
const { SignIn , SignUp, ForgotPassword,remove} = require('../controller/auth.controller');
const authRoute = express.Router();
// const allRoutes = express.Router();

authRoute.post('/signin', SignIn);
authRoute.post('/signup', SignUp);
authRoute.post('/forgot-password', ForgotPassword);
authRoute.delete('/delete', remove);

module.exports = authRoute;
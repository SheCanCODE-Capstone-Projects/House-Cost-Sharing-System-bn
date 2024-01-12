require('dotenv').config();
const express = require('express');
const allRoutes = require('./routes/index');
const authRoute = require('./routes/auth.routes');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

app.use('/api/Aprop', allRoutes);
app.use('/api/Aprop', authRoute);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('database connected on port ' + process.env.PORT);
    })
    .catch (err => console.log("couldn't connect to MongoDb"))
});


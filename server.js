require('dotenv').config();
const express = require('express');
const allRoutes = require('./routes/index');
const authRoute = require('./routes/auth.routes');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require("cors");


app.use(express.json());

app.use('/api/Aprop', allRoutes);
app.use('/api/Aprop', authRoute);

var corsOptions = {
    origin: ['http://localhost:5173', 'http://192.168.196.82:5273', 'http://localhost:5173', 'http://127.0.0.1:5273'],
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}

app.use(cors(corsOptions));


app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('database connected on port ' + process.env.PORT);
    })
    .catch (err => console.log("couldn't connect to MongoDb"))
});


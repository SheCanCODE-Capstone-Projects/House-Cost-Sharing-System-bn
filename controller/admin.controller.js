const mongoose = require('mongoose');
var adminModel = require('../models/admin.model');


const create = async (req, res) => {
try {
    var recordedProperty = await adminModel.create(req.body);
    console.log(recordedProperty);
    res.status(201).json({
        message:"property created successfully!",
        student: recordedProperty
    })
    
} catch (error) {
    res.status(500).json( error.message);  
}

};

module.exports = {
    create
}
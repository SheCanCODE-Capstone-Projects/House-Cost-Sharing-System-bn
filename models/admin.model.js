
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    propertyName: {
        type: String,
        required: [true, "Property name is required"]
    },
    propertyPicture: {
        type: String,
        required: [true, "Property picture is required"],
        default: "https://media.istockphoto.com/id/1145780239/photo/dark-interior-with-open-kitchen.jpg?s=612x612&w=0&k=20&c=sigz2x-O26RYwC49hKqozEJxrFX4CR9zqiTCTSXx9e4="

    },
    description: {
        type: String,
        required: [true,"The Description of Property is required"]

    },
    cost: {
        type: String,
        required: [true,"The Cost of Property is required"]

    },
    contact: {
        type: String,
        required: [true,"The Contact is required"]

    }

});

module.exports = mongoose.model('admin', adminSchema);
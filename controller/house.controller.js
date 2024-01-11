const houseModel =require('../models/house.model');

const create = async (req, res, next) => {

    try {
        var recordedProperty = await houseModel. create(req.body);
        res.status(201).json({
            message: 'property recorded successfully',
            recordedProperty
        })
        res.status(500).json({message: 'property already exists'})
    } catch (error) {
        res.status(500) .json({message:error.message});
        
    }
};

module.exports ={
    create
}
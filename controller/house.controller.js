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
const list = async (req, res, next) => {
    try {
        var allProperty = await houseModel.find({});
        res.status(200).json({
            allProperty
        });
    } catch (error) {
        res.status(500).send(error);
        
    }
};

module.exports ={
    create,
    list,
}
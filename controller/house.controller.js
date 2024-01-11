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

const update = async (req, res, next) => {
    try {
        console.log(req.body);
        var updatedHouse = await houseModel.findByIdAndUpdate({_id:req.query.id},req.body);
        var house = await houseModel.find(updatedHouse._id);
    
        res.status(201).json({
        message:'house updated successfully',
        house
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports ={
    create,
    list,
    update
}
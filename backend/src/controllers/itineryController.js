const itineraryModel=require("../models/itineryModel")
const axios = require("axios");
const { default: mongoose } = require("mongoose");


const create = async(req,res)=>{
    try {
        const { destination,departureDate,returnDate,activities,accommodations } = req.body;
       
        if(!destination)
            res.status(400).send({ Status: 'Failed', Message: 'Enter Destination' });
        if(!departureDate)
            res.status(400).send({ Status: 'Failed', Message: 'Enter Departure Date' });
        if(!returnDate)
            res.status(400).send({ Status: 'Failed', Message: 'Enter Return Date' });
        if(!activities || activities.length==0)
            res.status(400).send({ Status: 'Failed', Message: 'Enter Activities' });
        if(!accommodations || accommodations.length==0)
            res.status(400).send({ Status: 'Failed', Message: 'Enter Accomodations' });

        let data = await itineraryModel.create(req.body)
        return res.status(201).send({ Status: 'Success', 'Details': data });
        } 
        catch (error) {
            res.status(500).send({ Status: 'Failed', Message: error.message });
          }
    }

const view = async(req,res)=>{
try {
    if(!mongoose.isValidObjectId(req.params.id))
        res.status(400).send({ Status: 'Failed', Message: 'Not a valid Id' });

    let data=await itineraryModel.findById(req.params.id)
    if(!data)
        return res.status(404).send({ Status: 'Failed',Message:"No record found"});
    
    if(data.userId!==req.userId)
        return res.status(403).send({ Status: 'Failed',Message:"You're not allowed to view this"});

    return res.status(200).send({ Status: 'Success', 'Details': data });
    } 
    catch (error) {
        res.status(500).send({ Status: 'Failed', Message: error.message });
      }
}

const edit=async(req,res)=>{
    
    try {
        if(!mongoose.isValidObjectId(req.params.id))
            res.status(400).send({ Status: 'Failed', Message: 'Not a valid Id' });

        let updatedData=await itineraryModel.findByIdAndUpdate(req.params.id, req.body)
        if(!updatedData)
            return res.status(404).send({ Status: 'Failed',Message:"No record found"});

        if(data.userId!==req.userId)
            return res.status(403).send({ Status: 'Failed',Message:"You're not allowed to edit this"});

        return res.status(200).send({ Status: 'Success', 'Details': updatedData });
        } 
        catch (error) {
            res.status(500).send({ Status: 'Failed', Message: error.message });
          }
}





module.exports = {create,view,edit};



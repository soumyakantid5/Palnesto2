const itineraryModel=require("../models/itineryModel")
const axios = require("axios");

var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: '1Gc7piWDaZuRqoizC9yU4W94jybAR1Gm',
  clientSecret: '3QkZtLIA1cqo8Yjd'
});


const create = async(req,res)=>{
    try {
        //const { destination, travelDates, activities, accommodations } = req.body;

        // let result = axios.get(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${req.body.destination}`);
        
       let data = await itineraryModel.create(req.body)
        return res.status(201).send({ Status: 'Success', 'Details': data });
        } 
        catch (error) {
            res.status(500).send({ Status: 'Failed', Message: error.message });
          }
    }

const view = async(req,res)=>{
try {
    let data=await itineraryModel.findById(req.params.id)
    if(!data){
        return res.status(404).send({ Status: 'Failed',Message:"No record found"});
    }
    return res.status(201).send({ Status: 'Success', 'Details': data });
    } 
    catch (error) {
        res.status(500).send({ Status: 'Failed', Message: error.message });
      }
}

const edit=async(req,res)=>{
    
    try {
        let updatedData=await itineraryModel.findByIdAndUpdate(req.params.id, req.body)
        if(!updatedData){
            return res.status(404).send({ Status: 'Failed',Message:"No record found"});
        }
        return res.status(201).send({ Status: 'Success', 'Details': updatedData });
        } 
        catch (error) {
            res.status(500).send({ Status: 'Failed', Message: error.message });
          }
}





module.exports = {create,view,edit};
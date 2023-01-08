const itineraryModel=require("../models/itineryModel")


const create = async(req,res)=>{
    try {
        const itinerary = new Itinerary({
            destination,
            travelDates,
            activities,
            accommodations
        });

        // save the itinerary to the database
        itinerary.save( (err, itinerary) => {
            if (err) return res.status(500).json(err);
            else return res.status(200).json(itinerary);
        });
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
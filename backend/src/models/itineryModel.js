const mongoose = require("mongoose");

const itinerySchema = {
    destination: String,
    departureDate: String,
    returnDate:String,
    activities: [String],
    accommodations: [String],
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
};

module.exports = mongoose.model("Itinery", itinerySchema);
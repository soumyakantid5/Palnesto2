const mongoose = require("mongoose");

const itinerySchema = {
    destination: String,
    travelDates: {
        startDate: Date,
        endDate: Date
    },
    activities: [
        {
            name: String,
            description: String
        }
    ],
    accommodations: [
        {
            name: String,
            description: String
        }
    ]
};

module.exports = mongoose.model("Itinery", itinerySchema);
const mongoose = require('mongoose');

const vRegSchema = new mongoose.Schema({   
    vehicleType:{
        type:String,
        required:true
    },   
    plateNo:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    manufacturedYear:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('regVehicles', vRegSchema);
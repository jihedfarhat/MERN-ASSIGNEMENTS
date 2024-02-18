// ---------------------------------------------------
// MODEL SETUP
// ---------------------------------------------------

// 1) Importing External Libraries (Moongose)
const mongoose = require('mongoose'); 


// 2) Creating Schema for Model (blueprint)
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [ 2, "Name must be at least 2 characters long" ],
    },
    position: String,
    gameStatus:{
        gameOne: String,
        gameTwo: String,
        gameThree: String
    }
}, { timestamps: true });

// 3) Creating collection by Shema setted up
const PlayerModel = mongoose.model("Player", PlayerSchema);

// 4) Exporting Model
module.exports = PlayerModel;

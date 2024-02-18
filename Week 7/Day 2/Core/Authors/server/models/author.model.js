// ---------------------------------------------------
// MODEL SETUP
// ---------------------------------------------------

// 1) Importing External Libraries (Moongose)
const mongoose = require('mongoose'); 

// 2) Creating Schema for Model (blueprint)
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [ 3, "Name must be at least 3 characters long" ],
    }  
}, { timestamps: true });

// 3) Creating collection by Shema setted up
const AuthorModel = mongoose.model("Author", AuthorSchema);

// 4) Exporting Model
module.exports = AuthorModel;

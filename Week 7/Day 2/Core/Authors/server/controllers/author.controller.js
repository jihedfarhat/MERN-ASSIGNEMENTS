// ---------------------------------------------------
// CONTROLLER SETUP - AUTHOR
// ---------------------------------------------------

// 1) Importing Model
const AuthorModel = require('../models/author.model');

// 2) Setting up and exporting CRUD API requests to server
module.exports = {

    // I) GET REQUESTS

    // Show Index - GET Request
    index:  (req, res) => {
        res.json({
            message: "Hello World"
        });
    },
    // Find all Authors
    findAllAuthors: (req, res) => {
        AuthorModel.find()
            .then((allAuthors) => res.json(allAuthors)) 
            .catch(err => res.status(400).json(err));
    },
    // Get a Author by Id
    findAuthorById: (req, res) => {
        AuthorModel.findById({ _id: req.params.id }) 
            .then((oneSingleAuthor) => res.json(oneSingleAuthor)) 
            .catch(err => res.status(400).json(err));
    },
    
    // II) POST REQUESTS
    // Create a Author
    createNewAuthor: (req, res) => {
        AuthorModel.create(req.body) 
            .then((newAuthor) => res.json(newAuthor)) 
            .catch(err => res.status(400).json(err));
    },

    // III) UPDATE REQUESTS
    // Update a Author by Id
    updateAuthorById: (req, res) => {
        AuthorModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }) 
            .then((updatedAuthor) => res.json(updatedAuthor)) 
            .catch(err => res.status(400).json(err));
    },

    // IV) DELETE REQUESTS  
    // Delete all Authors
    deleteAllAuthors: (req, res) => {
        AuthorModel.deleteMany({}) 
            .then((allDeletedAuthors) => res.json(allDeletedAuthors)) 
            .catch(err => res.status(400).json(err));
    },
    // Update a Author by Id
    deleteAuthorById: (req, res) => {
        AuthorModel.findByIdAndDelete({ _id: req.params.id }) 
            .then((deletedAuthor) => res.json(deletedAuthor)) 
            .catch(err => res.status(400).json(err));
    },
};

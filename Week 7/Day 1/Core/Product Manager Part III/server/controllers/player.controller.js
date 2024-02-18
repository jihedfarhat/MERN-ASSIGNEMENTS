// ---------------------------------------------------
// CONTROLLER SETUP - Player
// ---------------------------------------------------

// 1) Importing Model
const PlayerModel = require('../models/player.model');

// 2) Setting up and exporting CRUD API requests to server
module.exports = {

    // I) GET REQUESTS

    // Find all Players
    findAllPlayers: (req, res) => {
        PlayerModel.find()
            .then((allPlayers) => res.json(allPlayers)) 
            .catch(err => res.status(400).json(err));
    },
    // Get a Player by Id
    findPlayerById: (req, res) => {
        PlayerModel.findById({ _id: req.params.id }) 
            .then((oneSinglePlayer) => res.json(oneSinglePlayer)) 
            .catch(err => res.status(400).json(err));
    },
    
    // II) POST REQUESTS
    // Create a Player
    createNewPlayer: (req, res) => {
        PlayerModel.create(req.body) 
            .then((newPlayer) => res.json(newPlayer)) 
            .catch(err => res.status(400).json(err));
    },

    // III) UPDATE REQUESTS
    // Update a Player by Id
    updatePlayerById: (req, res) => {
        PlayerModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }) 
            .then((updatedPlayer) => res.json(updatedPlayer)) 
            .catch(err => res.status(400).json(err));
    },

    // IV) DELETE REQUESTS  
    // Delete all Players
    deleteAllPlayers: (req, res) => {
        PlayerModel.deleteMany({}) 
            .then((allDeletedPlayers) => res.json(allDeletedPlayers)) 
            .catch(err => res.status(400).json(err));
    },
    // Update a Player by Id
    deletePlayerById: (req, res) => {
        PlayerModel.findByIdAndDelete({ _id: req.params.id }) 
            .then((deletedPlayer) => res.json(deletedPlayer)) 
            .catch(err => res.status(400).json(err));
    },
};

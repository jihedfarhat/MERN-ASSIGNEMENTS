// ---------------------------------------------------
// ROUTES SETUP - Player
// ---------------------------------------------------

// 1) Importing Controller
const PlayerController = require("../controllers/player.controller");

// 2) Setting up and exporting API routes for requests
module.exports = (app) => {
    app.get("/api/players", PlayerController.findAllPlayers);
    app.get("/api/players/:id", PlayerController.findPlayerById);
    app.post("/api/players/new", PlayerController.createNewPlayer);
    app.put("/api/players/edit/:id", PlayerController.updatePlayerById);
    app.delete("/api/players/delete", PlayerController.deleteAllPlayers);
    app.delete("/api/players/delete/:id", PlayerController.deletePlayerById);
};
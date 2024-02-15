const jokeController = require("../controllers/jokes.controllers");

const routes = (module.exports = (app) => {
  // ==========READ ALL==========
  app.get("/api/jokes", jokeController.getallJokes);
  // ==========CREATE==========
  app.post("/api/jokes", jokeController.createnewJoke);
  // ==========Getting Data from a URL==========
  app.get("/api/jokes/:id", jokeController.getOneJoke);
  // ==========Update Data==========
  app.patch("/api/jokes/:id", jokeController.updateJokes);
  // ==========DELETE Data==========
  app.delete("/api/jokes/:id", jokeController.deleteJokes);
});

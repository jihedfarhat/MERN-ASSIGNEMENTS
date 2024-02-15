const jokeModel = require("../models/jokes.models");
// ==========READ ALL==========
module.exports.getallJokes = (req, res) => {
  jokeModel
    .find(res.body)
    .then((allJokes) => {
      res.json({ jokes: allJokes });
    })
    .catch((err) => {
      res.json({ Message: "Something wrong" });
    });
};

// ==========CREATE==========
module.exports.createnewJoke = (req, res) => {
  jokeModel
    .create(req.body)
    .then((newJoke) => {
      res.json({ jokes: newJoke });
    })
    .catch((err) => {
      res.json({ Message: "Something wrong" });
    });
};
// ==========(Read one) Getting Data from a URL==========
module.exports.getOneJoke = (req, res) => {
  jokeModel
    .findOne({ _id: req.params.id })
    .then((oneJoke) => {
      res.json({ jokes: oneJoke });
    })
    .catch((err) => {
      res.json({ Message: "Something wrong" });
    });
};

// ==========Update Data==========
module.exports.updateJokes = (req, res) => {
  jokeModel
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJoke) => {
      res.json({ jokes: updatedJoke });
    })
    .catch((err) => {
      res.json({ Message: "Something wrong" });
    });
};

// ==========DELETE Data==========
module.exports.deleteJokes = (req, res) => {
  jokeModel
    .deleteOne({ _id: req.params.id })
    .then((deletedJoke) => {
      res.json({ jokes: deletedJoke });
    })
    .catch((err) => {
      res.json({ Message: "Something wrong" });
    });
};

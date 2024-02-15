const express = require("express");
const app = express();
const port = 5000;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json(), express.urlencoded({ extended: true }));


const jokeRoutes = require("./routes/joke.route");
jokeRoutes(app);

const connectMongoGb = require('./config/mongoose.config')


app.listen(port, () => {
  console.log(
    `>>> Server is up and running on port ${port} and is listening for REQuest to RESponse `
  );
});
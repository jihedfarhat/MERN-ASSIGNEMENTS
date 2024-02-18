// ---------------------------------------------------
// ROUTES SETUP - AUTHOR
// ---------------------------------------------------

// 1) Importing Controller
const AuthorController = require("../controllers/author.controller");

// 2) Setting up and exporting API routes for requests
module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findAuthorById);
    app.post("/api/authors/new", AuthorController.createNewAuthor);
    app.put("/api/authors/edit/:id", AuthorController.updateAuthorById);
    app.delete("/api/authors/delete", AuthorController.deleteAllAuthors);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthorById);
};
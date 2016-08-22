var app = require("express")();
var bodyParser = require("body-parser");
var bookController = require("./controllers/book");
var data = require("./models/book");

app.use(bodyParser.urlencoded({ extended: false }));

app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()
    .delete();

app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
    .delete(bookController.delete);

console.log("starting in port 3000");
app.listen(3000)

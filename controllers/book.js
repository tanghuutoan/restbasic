var books = {
    getAll: function(req, res) {
        var allbooks = data; 
        res.json(allbooks);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var book = data[id];
	console.log("you are getting book id", id); 
        res.json(book);
    },

    create: function(req, res) {
        var newbook = req.body;
        data.push(newbook);
        res.json(newbook);
    },

    update: function(req, res) {
        var updatebook = req.body;
        var id = req.params.id;
        data[id] = updatebook 
        res.json(updatebook);
    },

    delete: function(req, res) {
        var id = req.params.id;
        data.splice(id, 1) 
        res.json(true);
    }
};

module.exports = books;

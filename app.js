var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Waterworld!');
});
app.use(express.static('static'));
// Battleship
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.render = function (player) {
    };
    return Board;
}());
var port = process.env.PORT;
app.listen(port, function () {
    console.log("Battleship Classic listening on port ".concat(port));
});

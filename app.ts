const express = require('express')
const app = express()

type Player = 'red' | 'blue';

app.get('/', (req, res) => {
  res.send('Hello Waterworld!');
});

app.use(express.static('static'));

// Battleship Classic

class Board {
  render(player: Player) {
  }
}


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Battleship Classic listening on port ${port}`); 
});

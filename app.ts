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

// TODO: build client-side polling for push functionality. This will also be
// used to ensure that there's only one connection for a <game,player> pair at
// a time.

// NOTE: wrap comments with 'gq<motion>'

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Battleship Classic listening on port ${port}`); 
  if (port === undefined) {
    console.log(`set -x PORT 3001`);
  }
});

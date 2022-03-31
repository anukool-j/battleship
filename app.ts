const express = require('express')
const app = express()

app.use(express.static('static'));

let port = process.env.PORT;
app.listen(port, () => {
  if (port === undefined) {
    port = '3001';
  }
  console.log(`Battleship Classic listening on port ${port} ('set -x PORT <port>' to customize)`); 
});

app.get('/', (req, res) => {
  res.send('Hello Waterworld!');
});


// Battleship Classic

// TASK: build client-side polling for push functionality. This will also be
// used to ensure that there's only one connection for a <board,color> pair at
// a time.

class Session {
  readonly session_id: string;
  board: Board = null;
  color: Color = null;
  
  // Fulfill this promise to push something down. The client will have to open a
  // new connection to get the next message.
  pending_resolve_fn = null;

  constructor(session_id) {
    this.session_id = session_id;
  }
}

class Board {
  turn: Color = null; // null => waiting for placement

  red_placements = []
  blue_placements = []

  red_bombs = []
  blue_bombs = []

  render(
    // 'red' and 'blue' information is all stored in the same Board, but
    // 'render' should only send down information that that player has the
    // right to see.
    color: Color 
  ) {
    return `render-${color}`; // TODO
  }
}

type Color = 'red' | 'blue';


app.get('/init', (req, res) => {
  const board_id = req.query.board_id; // null => create new board
  const color = req.query.color; // null => assign automatically
});

app.get('/place', (req, res) => {
});

app.get('/bomb', (req, res) => {
});

// This thing is going to immediately return a promise that will get fulfilled
// later by something else. 
app.get('/poll', (req, res): Promise<any> => {
  const session_id = req.query.session_id;

  let session = lookup(session_id);
  if (session === undefined) {
    // error out
    return;
  }

  if (session.pending_resolve_fn !== null) {
    // this should be null -- error out
    return;
  }   

  let promise = new Promise((resolve, reject) => {
    // we have to stash this away
    session.pending_resolve_fn = resolve;
  });
  
  return promise;
});


let sessions = []

function lookup(session_id): Session {
  return sessions.find(x => session_id === x.board.session_id);
}


// TIP: wrap comments with 'gq<motion>'

// docs: 
// async/await https://medium.com/jspoint/typescript-promises-and-async-await-b842b55ee3fd
// typescript https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// classes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

const express = require('express')
const app = express()

type Color = 'red' | 'blue';

app.get('/', (req, res) => {
  res.send('Hello Waterworld!');
});

app.use(express.static('static'));

// Battleship Classic

class Board {
  render(
    // 'red' and 'blue' information is all stored in the same Board, but
    // 'render' should only send down information that that player has the
    // right to see.
    color: Color 
  ) {
    // TODO
  }
}

// TASK: build client-side polling for push functionality. This will also be
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

// This thing is going to immediately return a promise that will get fulfilled
// later by something else.
app.get('/poll', (req, res): Promise<any> => {
  const id = req.query.id;
  const color: Color = req.query.color;
  let session = lookup(id, color);
  if (session === undefined) {
    session = new Session();
  }
  let pending_promise = session.p;
  if (pending_promise === undefined) {
    pending_promise = new Promise<any>((resolve, reject) => {
      // TODO: implement continuations here
      }
    );
  }
  return pending_promise;
});

class Session {
  // Fulfil this promise to push something down. The client will have to open a
  // new connection to get the next message.
  p: Promise<any> 
}

let sessions = []

function lookup(id: string, color: Color): Session {
  return null // TODO
}

// docs: 
// async/await https://medium.com/jspoint/typescript-promises-and-async-await-b842b55ee3fd
// typescript https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// classes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

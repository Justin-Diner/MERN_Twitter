const express = require('express');

// Create the Express app
const app = express();

const logTime = (req, res, next) => {
  console.log("Current time: ", new Date().toISOString());
  // Since no response has been returned yet, invoke the `next` function to
  // move on to the next middleware function.
  next();
};

app.use(logTime);

const passOnMessage = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};

// Assign routes
app.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

app.get('/throw-error', (req, res) => {
  throw new Error('An error occurred!');
});

// Error handler to log errors
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // TODO Log the error to the database
  } else {
    console.error(err);
  }
  next(err);
});


app.use((err, req, res, next) => {
  console.error(err);
	res.status(err.status || 500);
  res.send('An error occurred! Please check the url, or wait a few minutes and try again.');
});

app.post('/users', (req, res) => {
	// Do something...
	// Send a response back to the client
});

app.get("/bye", (req, res) => {
  res.send("Bye World.");
});

// Tell the server to listen for incoming traffic on a specific port
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));




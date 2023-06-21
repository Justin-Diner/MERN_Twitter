const express = require('express');

// Create the Express app
const app = express();

// Assign routes
app.get('/', (req, res) => {
	res.send('Hello from Express!');
});

app.post('/users', (req, res) => {
	// Do something...
	// Send a response back to the client
});

// Tell the server to listen for incoming traffic on a specific port
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

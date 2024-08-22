// Create web server
const express = require('express');
const app = express();

// Create a server with express
const server = require('http').createServer(app);

// Listen on port 3000
server.listen(3000);

// Use the public folder for static files
app.use(express.static('public'));

// Use the comments.js file
app.use('/comments', require('./comments.js'));

// Use the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});

// Use the comments.js file
app.get('/comments', (req, res) => {
  res.sendFile(__dirname + '/comments.js');
});
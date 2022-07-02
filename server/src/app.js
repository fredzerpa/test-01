const express = require('express');
const api = require('./routes/api');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);

app.use(express.json());

// Serve the client static files
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
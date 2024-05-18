const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
if (!process.env.JWT_PRIVATE_KEY) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/gym')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

const server = express();

server.use(express.json());

// Use CORS middleware with my frontend URL as authorized origin
server.use(cors({
  origin: 'http://localhost:3000'
}));

server.use('/api/users', users);
server.use('/api/auth', auth);

const port = process.env.PORT || 3001;
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

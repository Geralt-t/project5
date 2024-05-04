const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});app.get('/user/list', async (req, res) => {});
app.get('/user/:id', async (req, res) => {
    // Fetch detailed user information by ID
  });
  app.get('/photosOfUser/:id', async (req, res) => {
    // Fetch photos and comments for a user by ID
  });
  const mongoose = require('mongoose');
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Error handling should be improved here
      res.status(500).send('Internal Server Error');
    } else {
      res.json(user);
    }
  });
});
const express = require('express');
const app = express();

// Greet API
app.get('/api/greet', (req, res) => {
  console.log("Query received:", req.query);

  const name = req.query.name;

  res.send("Welcome " + name);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

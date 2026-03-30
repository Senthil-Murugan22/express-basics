const express = require('express');
const app = express();

// Query parameter example
app.get('/api/user', (req, res) => {
  console.log("Query received:", req.query);

  const name = req.query.name;
  const age = req.query.age;

  res.send("Hello " + name + " you are " + age);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send("Home page");
});

// JSON user API
app.get('/api/user', (req, res) => {
  res.json({
    name: "SENTHIL",
    age: 22,
    role: "Developer"
  });
});

// JSON product API
app.get('/api/product', (req, res) => {
  res.json([
    { id: 1, name: "mobile" },
    { id: 2, name: "laptop" }
  ]);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
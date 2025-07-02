// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static frontend files from 'public'
app.use(express.static('public'));

// Hardcoded profile data
const profile = {
  name: "Shlok Mishra",
  email: "shlok@example.com",
  interests: ["Coding", "Gaming", "Cricket", "AI/ML"],
  photo: "https://i.pravatar.cc/150?img=10"
};

// API route to send profile data
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

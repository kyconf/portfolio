const express = require('express');
const app = express();
const PORT = 3000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Add OPTIONS method
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header
  next();
});


app.use(express.json());

let leaderboard = []; 

app.post("/", (req, res) => {
  console.log('Received POST request:', req.body);

  const { highscore, name } = req.body;

 //add the new entrieys into the leaderboard
  leaderboard.push({ name, score: highscore });

  // sort 
  leaderboard.sort((a, b) => b.score - a.score);


  const topEntries = leaderboard.slice(0, 10);

  // Respond with the updated leaderboard
  res.json({ leaderboard: topEntries });
});

// GET request handling
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ leaderboard });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

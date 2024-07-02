import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(express.json());

// Sample array of YouTube video URLs for demonstration
const videoUrls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
  'https://www.youtube.com/watch?v=3JZ_D3ELwOQ'
];

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

// New endpoint to return an array of YouTube video URLs
app.get('/videos', (req, res) => {
  res.status(200).json(videoUrls);
});

// New POST endpoint to add two numbers
app.post('/addNumbers', (req, res) => {
  const { num1, num2 } = req.body;
  // Validate that both inputs are numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both inputs must be numbers' });
  }
  // Calculate the sum
  const sum = num1 + num2;
  // Return the sum in a JSON response
  res.json({ sum });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

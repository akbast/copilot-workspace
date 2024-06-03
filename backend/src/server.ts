import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

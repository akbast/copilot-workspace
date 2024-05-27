import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

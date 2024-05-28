import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

// Adding a new endpoint /customer-info that handles GET requests and returns customer information in JSON format
app.get('/customer-info', (req, res) => {
  res.json({
    name: "John",
    lastname: "Doe",
    id: 1
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

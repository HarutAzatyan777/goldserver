import express from 'express';
import cors from 'cors';
import GoldPriceService from './GoldPriceService.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/gold-prices', async (req, res) => {
  try {
    const goldPrices = await GoldPriceService.getGoldPrices();
    res.json(goldPrices);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

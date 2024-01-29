import { validationResult } from 'express-validator';
import GoldPriceService from './GoldPriceService.js';

class GoldPriceController {
  static async getGoldPrices(req, res) {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // If no validation errors, get gold prices from the service
      const goldPrices = await GoldPriceService.getGoldPrices();
      
      // Send gold prices as JSON in the response
      res.json(goldPrices);
    } catch (error) {
      // Handle errors and send a 500 Internal Server Error response
      console.error('Controller Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default GoldPriceController;

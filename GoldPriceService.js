// GoldPriceService.js
import fetch from 'node-fetch';

class GoldPriceService {
  static async getGoldPrices() {
    try {
      // Replace this URL with the actual Gold API endpoint
      const apiUrl = 'https://www.goldapi.io/api/Gold/USD/latest?token=goldapi-1db5oxrlrxf6yrv-io';

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch gold prices');
      }

      const result = await response.json();

      // Assuming gold price data is available in the "price" property
      const goldPrices = result?.price;

      if (!goldPrices) {
        throw new Error('Gold price data not found in the API response');
      }

      return [
        {
          id: 1,
          price: goldPrices,
          date: result.date,
        },
        // Add more data as needed
      ];
    } catch (error) {
      console.error('API Error:', error.message);
      throw error;
    }
  }
}

export default GoldPriceService;

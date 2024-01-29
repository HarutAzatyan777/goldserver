// GoldPriceService.js
import fetch from 'node-fetch';

class GoldPriceService {
  static async getGoldPrices() {
    try {
      const apiUrl = 'https://metals-api.com/api/latest?access_key=nfy7i0i58duq841m3zw4utmsq2oa21qdn4r9ds8wyn0fj9hdzu3qiisga23i5&base=USD&symbolsn=XAU%2CXAG%2CXPD%2CXPT%2CXRH'; // Replace with your actual API endpoint

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch gold prices');
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error('API response indicates failure');
      }

      const goldRates = result.rates;

      if (!goldRates) {
        throw new Error('Gold rate data not found in the API response');
      }

      // Calculate the price of 1 gram for each metal
      const silverRatePerGram = goldRates.XAG;
      const goldRatePerGram = goldRates.XAU;
      const palladiumRatePerGram = goldRates.XPD;
      const platinumRatePerGram = goldRates.XPT;
      const rhodiumRatePerGram = goldRates.XRH;

      return {
        timestamp: result.timestamp,
        date: result.date,
        base: result.base,
        silverRate: silverRatePerGram,
        goldRate: goldRatePerGram,
        palladiumRate: palladiumRatePerGram,
        platinumRate: platinumRatePerGram,
        rhodiumRate: rhodiumRatePerGram,
      };
    } catch (error) {
      console.error('API Error:', error.message);
      throw error;
    }
  }
}

export default GoldPriceService;

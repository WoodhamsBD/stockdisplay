const Axios = require('axios');

// AlphaVantage Key
const KEY = '8Q0968QWPYZQLGRN';

function intraDay15Min(stockSymbol) {
  console.log('Before Axios Get');
  console.log("API STOCK SYMBOL: " + stockSymbol);
  return Axios.get(
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stockSymbol + '&interval=15min&outputsize=full&apikey=' + KEY)
  .then( function (response) {
    console.log("API get response: " + response);
  })
  .catch(function (error) {
    console.log("API catch error: " + error);
  });
}

module.exports = {
  fetchIntra15Min: intraDay15Min
}

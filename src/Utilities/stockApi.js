const Axios = require('axios');

// AlphaVantage Key
const KEY = '8Q0968QWPYZQLGRN';

function intraDay15Min(stockSymbol) {
  return Axios.get(
    'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stockSymbol + '&interval=15min&outputsize=full&apikey=' + KEY)
}

// function intraDay5Min(stockSymbol) {
//   return Axios.get(
//     'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stockSymbol + '&interval=5min&outputsize=full&apikey=' + KEY)
// }

module.exports = {
  fetchIntra15Min: intraDay15Min
}

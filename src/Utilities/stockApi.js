const Axios = require('axios');

const KEY = '8Q0968QWPYZQLGRN';

function intraDay15Min(stock) {
  return Axios.get(
    'https://www.alphavantage.com/query?function=TIME_SERIES_INTRADAY&symbol=' + stock + '&interval=15min&outputsize=full&apikey=' + KEY
    .then(function(info){
      console.log(info);
    });
  )
}

module.exports = {
  fetchIntra15Min: intraDay15Min
}

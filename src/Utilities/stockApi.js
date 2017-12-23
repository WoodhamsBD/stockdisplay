const Axios = require('axios');

const KEY = '8Q0968QWPYZQLGRN';

intraDay15Min = () => {
  return Axios.get(
    'https://www.alphavantage.com/query?function=TIME_SERIES_INTRADAY&symbol'
  )
}

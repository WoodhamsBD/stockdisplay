const React = require('react');
const API = require('../Utilities/stockApi');

class StockInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      stockData: {}
    }
  

  //Function Binding
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  // End Constructor
  }

  // Methods Start
  
  // captures each character has it is entered in the form and updates each time
  handleChange(event) {
    this.setState({symbol: event.target.value});
  };

  // fires when the form is submitted
  handleSubmit(event) {
    event.preventDefault();

    // API Call with symbol from field - update state.stockData with respose
    API.fetchIntra15Min(this.state.symbol)
    .then(function(data) {
      this.setState(function() {
        return { 
          stockData: data
        }
      })
    }
    .bind(this));
  };

  //   API.fetchIntra15Min(symbol)
  //   .then(function(data) {
  //     this.setState((stockData) => {
  //       return { stockData: data };
  //     });
  //   }.bind(this));
  // };


  // Display
  render() {
    return (
      <div className="stockInput">
        <form onSubmit={this.handleSubmit}>
          <label className="stockForm">
          <input
            id='stockId'
            placeholder='Stock to Search'
            type='text'
            autoComplete='off'
            value={this.state.symbol}
            onChange={this.handleChange}
          ></input>
          </label>
        </form>
      </div>
    );
  }
}

module.exports = StockInput;
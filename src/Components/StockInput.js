const React = require('react');
const API = require('../Utilities/stockApi');

class StockInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  

  //Function Binding
  // this.submitSymbol = this.submitSymbol.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  // End Constructor
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  };


  // Form submit to trigger API call with entered Stock symbol
  // submitSymbol(symbol) {
  //   this.setState(function() {
  //     return {
  //       stockId: symbol
  //     }
  //   })

  //   console.log("Symbol: " + symbol);

  //   API.fetchIntra15Min(symbol)
  //   .then(function(data) {
  //     this.setState((stockData) => {
  //       return { stockData: data };
  //     });
  //   }.bind(this));
  // };

  // Component Display
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
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          </label>
        </form>
      </div>
    );
  }
}

module.exports = StockInput;
const React = require('react');
const API = require('../Utilities/stockApi')

class StockInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockId: ''
    }

    //Function Binding
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    API.fetchIntra15Min()
    );
  }

  // Component Display
  render() {
    return (
      <div className="stockInput">
        <form onSubmit={this.handleSubmit}>
          <label className="stockForm"></label>
          <input
            id='stockId'
            placeholder='Stock to Search'
            type='text'
            autoComplete='off'
          ></input>
        </form>
      </div>
    );
  }
}

module.exports = StockInput;
import React, { Component } from 'react';

// Component input
const StockInput = require('./StockInput');

// Basic App entry point for main page display
class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Welcome to my Stock Project</h1>
        </header>
        {/* Render StockInput for form display and API call */}
        <StockInput />
      </div>
    );
  }
}

export default App;

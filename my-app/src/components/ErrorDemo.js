import React, { Component } from 'react';

class ErrorDemo extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  handleClick = () => {
    throw new Error('Something went wrong');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong.</h1>;
    }

    return (
      <div>
        <h1>Error Demo</h1>
        <button onClick={this.handleClick}>Throw Error</button>
      </div>
    );
  }
}

export default ErrorDemo;
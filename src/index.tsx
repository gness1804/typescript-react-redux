import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  state = {
    counter: 0,
  };

  increaseCount = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCount = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <p>The count is: {this.state.counter}</p>
        <button onClick={this.increaseCount}>Increase Count</button>
        <button onClick={this.decreaseCount}>Decrease Count</button>
      </div>
    );
  }
}

ReactDOM.render(<App name="Graham" />, document.querySelector('#root'));

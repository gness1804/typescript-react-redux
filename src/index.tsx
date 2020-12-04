import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return <div>Hello there, {this.props.name}</div>;
  }
}

ReactDOM.render(<App name="Graham" />, document.querySelector('#root'));

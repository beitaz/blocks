import React from 'react';
import ReactDOM from 'react-dom';

let blocklyStyle = {
  height: '480px',
  width: '600px'
};
class App extends React.Component {
  render() {
    return (
      <div id="blocklyDiv" style={blocklyStyle}>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

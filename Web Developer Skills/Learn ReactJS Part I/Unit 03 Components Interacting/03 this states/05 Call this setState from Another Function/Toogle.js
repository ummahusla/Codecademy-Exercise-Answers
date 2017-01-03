var React = require('react');
var ReactDOM = require('react-dom');


var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
  getInitialState: function () {
    return { color: green };
  },
  changeColor: function () {
    var newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  },
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
});
ReactDOM.render(<Toggle />,document.getElementById('app'))

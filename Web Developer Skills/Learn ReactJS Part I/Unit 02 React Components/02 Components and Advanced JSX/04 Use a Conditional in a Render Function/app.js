var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonhightsPlan = React.createClass({
  render: function () {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    }
  }
});


ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);

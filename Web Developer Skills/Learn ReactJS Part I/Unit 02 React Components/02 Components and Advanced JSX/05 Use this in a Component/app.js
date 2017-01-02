var React = require('react');
var ReactDOM = require('react-dom');

var MyName = React.createClass({
	// name property goes here:
	name: 'whatever-your-name-is-goes-here',

  render: function () {
    return <h1>My name is {this.name}.</h1>;
  }
});

ReactDOM.render(<MyName />, document.getElementById('app'));

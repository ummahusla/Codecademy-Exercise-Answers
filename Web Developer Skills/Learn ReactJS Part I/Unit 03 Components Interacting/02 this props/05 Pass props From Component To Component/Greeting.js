var React = require('react');

var Greeting = React.createClass({
  render: function () {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
});

// ReactDOM.render goes here:
module.exports = Greeting;

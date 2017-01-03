var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
});

module.exports = Button;

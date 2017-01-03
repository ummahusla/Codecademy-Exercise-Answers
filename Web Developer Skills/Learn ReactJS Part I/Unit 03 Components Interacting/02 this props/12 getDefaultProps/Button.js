var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  getDefaultProps: function (){
    return {text: 'I am a button'};
  },
  render: function () {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
});

ReactDOM.render(
  <Button text="" />,
  document.getElementById('app')
);

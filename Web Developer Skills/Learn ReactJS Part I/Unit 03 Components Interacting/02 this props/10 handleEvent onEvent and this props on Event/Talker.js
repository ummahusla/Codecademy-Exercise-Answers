var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  handleClick: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },
  
  render: function () {
    return <Button onClick={this.handleClick} />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

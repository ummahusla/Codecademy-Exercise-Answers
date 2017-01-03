var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  talk: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  },

  render: function () {
    return <Button talk={this.talk} />; // step1: foo="bar" step2: talk="bar"
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

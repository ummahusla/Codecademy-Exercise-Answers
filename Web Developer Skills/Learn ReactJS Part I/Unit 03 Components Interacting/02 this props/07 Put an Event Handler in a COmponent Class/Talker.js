var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./Button');

var Talker = React.createClass({
  render: function () {
    return <Button />;
  },
   talk: function () {
    for (var speech = '', i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState (){
    return ({ title: 'Best App' });
  },
  render: function () {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
});

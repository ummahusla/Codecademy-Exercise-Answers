var React = require('react');
var ReactDOM = require('react-dom');
var componentBlueprint = {
  render: function () {
    return <h1>Hello world</h1>
  }
};

var MyComponentClass = React.createClass(componentBlueprint);

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState (){
    return { title: 'Best App' };
  },
  render: function () {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
});
ReactDOM.render(<App />,document.getElementById('app'));

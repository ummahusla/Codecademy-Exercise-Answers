var React = require('react');
var ReactDOM = require('react-dom');
var Greeting = require('./Greeting');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting signedIn={true} name="Alison" /> // signedIn={false} for first step
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

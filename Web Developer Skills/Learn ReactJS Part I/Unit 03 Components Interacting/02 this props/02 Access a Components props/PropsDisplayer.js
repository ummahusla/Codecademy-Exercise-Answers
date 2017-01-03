var React = require('react');
var ReactDOM = require('react-dom');

var PropsDisplayer = React.createClass({
  render: function () {
  	var stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
});

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer />, document.getElementById('app'));

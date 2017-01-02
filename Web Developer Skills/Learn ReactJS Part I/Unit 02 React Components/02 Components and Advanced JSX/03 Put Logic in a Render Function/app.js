var React = require('react');
var ReactDOM = require('react-dom');

var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
var Friend = React.createClass({
  render: function () {
    var friend = friends[0]
    return (
      <div>
        <h1>{friend.title}</h1>
        <img
          src={friend.src} />
      </div>
    );
  }
});
ReactDOM.render(<Friend />, document.getElementById('app'));

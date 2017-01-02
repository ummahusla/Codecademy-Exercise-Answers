var React = require('react');
var ReactDOM = require('react-dom');

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

var img = <img src={pics[ coinToss() == 'heads' ? 'kitty' : 'doggy' ]} />;

ReactDOM.render(
	img,
	document.getElementById('app')
);

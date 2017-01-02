var React = require('react');
var ReactDOM = require('react-dom');

var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
var gooseImg = (
	<img src={goose} />
);
ReactDOM.render(gooseImg, document.getElementById('app'))

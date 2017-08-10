import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  background: 'lightblue',
  color:			'darkred'
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe,
	document.getElementById('app')
);

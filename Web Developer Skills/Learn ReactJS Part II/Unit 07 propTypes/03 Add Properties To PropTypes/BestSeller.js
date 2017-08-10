import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />

        Author: <span>
          {this.props.author}
        </span><br />

        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title:				React.PropTypes.string.isRequired,
  author: 			React.PropTypes.string.isRequired,
  weeksOnList:	React.PropTypes.number.isRequired
}

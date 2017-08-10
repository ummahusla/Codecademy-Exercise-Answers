import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.number != nextProps.number;
  }

  render() {
    let visibility = this.props.number ? 'visible' : 'hidden';
    let style = {
      position: 'absolute',
      left: random(0, 100) + '%',
      top: random(0, 100) + '%',
      fontSize: 40,
      cursor: 'pointer',
      visibility: visibility
    };

    return (
      <span style={style} className="target">
        {this.props.number}
      </span>
    )
  }
}

Target.propTypes = {
  number: React.PropTypes.number.isRequired
};

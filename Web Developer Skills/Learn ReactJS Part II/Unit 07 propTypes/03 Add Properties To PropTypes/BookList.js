import React from 'react';
import ReactDOM from 'react-dom';
import { BestSeller } from './BestSeller';

export class BookList extends React.Component {
  render() {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller
              title="Glory and War Stuff for Dads"
              author="Sir Eldrich Van Hoorsgaard"
              weeksOnList={10} />
            <BestSeller
              title="The Crime Criminals!"
              author="Brenda Sqrentun"
              weeksOnList={2} />
            <BestSeller
              title="Subprime Lending For Punk Rockers"
              author="Malcolm McLaren"
              weeksOnList={600} />
          </ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById('app'));

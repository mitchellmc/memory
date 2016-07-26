import React, {Component, PropTypes} from 'react';
import MemorySquare from './MemorySquare';

class MemoryRow extends React.Component {
  static propTypes = {
    row: PropTypes.array,
  };

  render(){
    const {
      row,
    } = this.props;

    return (
      <div>
        {
          row.map((currentCell, item) =>
            <MemorySquare
              key={item}
              cardId={currentCell}
            />
          )
        }
        <br/>
      </div>
    );
  };

};

export default MemoryRow;

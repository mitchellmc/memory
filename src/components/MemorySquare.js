import React, {PropTypes} from 'react';

class MemorySquare extends React.Component {
  static propTypes = {
    cardId: PropTypes.number,
  };

  render(){
    const { cardId } = this.props;

    return(
      <span>
        {cardId}
      </span>
    );
  }
};

export default MemorySquare;

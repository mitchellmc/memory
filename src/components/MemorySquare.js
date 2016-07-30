import React, {PropTypes} from 'react';

class MemorySquare extends React.Component {
  static propTypes = {
    columnId: PropTypes.number,
    rowId: PropTypes.number,
    square: PropTypes.shape({
      cardId: React.PropTypes.number,
      status: React.PropTypes.number
    }),
    turnCard: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
  };

  render(){

    const {
      columnId,
      rowId,
      turnCard,
      square,
    } = this.props

    return(
      <div
        className='flex-item'
        onClick={() => {
          console.log("my coords are ", rowId, columnId);
          turnCard(rowId, columnId);
        }}
      >
        {
          (() => {
            if(square.status == 0){
              return 'X'
            }else{
              return square.cardId
            }
          })()
        }
      </div>
    );
  }
};

export default MemorySquare;

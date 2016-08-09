import React, {Component, PropTypes} from 'react';
import MemorySquare from './MemorySquare';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MemoryRow extends React.Component {
  static propTypes = {
    rowId: PropTypes.number,
    row: PropTypes.array,
    turnCard: PropTypes.func,
    evaluate: PropTypes.func,
  };

  render(){
    const {
      rowId,
      row,
      turnCard,
      evaluate,
    } = this.props;

    const memorySquares = row.map((currentCell, item) =>
      <MemorySquare
        key={item}
        rowId={rowId}
        columnId={item}
        square={currentCell}
        turnCard={turnCard}
        evaluate={evaluate}
      />
    )

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionName={
            {
              enter: 'rotateIn',
              enterActive: 'pulse',
              leave: 'rotateOut',
              leaveActive: 'rotateOutDownLeft',
              appear: 'fadeInRightBig',
              appearActive: 'pulse'
            }
        }>
          {
            memorySquares
          }
        </ReactCSSTransitionGroup>
        <br/>
      </div>
    );
  };

};

export default MemoryRow;

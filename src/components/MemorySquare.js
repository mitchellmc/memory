import React, {PropTypes} from 'react';

class MemorySquare extends React.Component {
  static propTypes = {
    cardId: PropTypes.number,
    turnCard: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      cardId: 'X',
    };
  };

  showCard = (e) => {
    this.setState({cardId: this.props.cardId});
    setTimeout(this.restoreCard, 2000);
  };

  restoreCard = () => this.setState({cardId: 'X'});

  render(){
    const { cardId } = this.state;
    const { turnCard } = this.props
    return(
      <div
        className='flex-item'
        onClick={() => {
          this.showCard();
          turnCard();
        }}
      >
        { cardId }
      </div>
    );
  }
};

export default MemorySquare;

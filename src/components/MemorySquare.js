import React, {PropTypes} from 'react';

class MemorySquare extends React.Component {
  static propTypes = {
    cardId: PropTypes.number,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      cardId: 'X',
    };
  };

  showCard = (e) => this.setState({cardId: this.props.cardId});

  render(){
    const { cardId } = this.state;

    return(
      <div
        className='flex-item'
        onClick={() => {
          this.showCard();
        }}
      >
        { cardId }
      </div>
    );
  }
};

export default MemorySquare;

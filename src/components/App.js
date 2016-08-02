import {
  testAction,
  setMemoryBoard,
  turnCard,
  evaluate,
} from '../actions';
import { bindActionCreators } from 'redux';
import MemoryBoard from './MemoryBoard';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    memoryboard: state.memoryboard,
    openCards: state.openCards,
  };
}

function mapDispatchToProps(dispatch) {
  // return { actions: bindActionCreators(actionCreators, dispatch) };
  return bindActionCreators({
    testAction,
    setMemoryBoard,
    turnCard,
    evaluate,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);

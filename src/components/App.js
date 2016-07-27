//import * as actionCreators from '../actions';
import {
  testAction,
  setMemoryBoard,
  turnCard,
} from '../actions'
import { bindActionCreators } from 'redux';
import MemoryBoard from './MemoryBoard';
import {connect} from 'react-redux'

function mapStateToProps(state) {
  return { memoryboard: state.memoryboard };
};

function mapDispatchToProps(dispatch) {
  //return { actions: bindActionCreators(actionCreators, dispatch) };
  return bindActionCreators({
    testAction,
    setMemoryBoard,
    turnCard,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);

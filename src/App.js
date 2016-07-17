import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render(){
    return (
      <div>
        <h2>Found App</h2>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('app-content'));


//import { createStore } from 'redux'

//const store = createStore(counter)
//const rootEl = document.getElementById('app-content')

//render() {
//  ReactDOM.render(
//    <div>no</div>,
//    rootEl
//  );
//}

//render();
//store.subscribe(render)
//import React, { Component, PropTypes } from 'react'

//class App extends Component {
//  constructor(props) {
//    super(props);
//  };

//  render(){
//    return(
//      <div>No</div>
//    );
//  }

//  App.PropTypes = {
//    name: PropTypes.string,
//  };
//};

//export default App;

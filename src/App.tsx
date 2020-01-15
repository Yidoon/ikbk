import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.less';

import Home from "@pages/home/home";
import Login from "@pages/login/login";

interface Prop {

}
interface State {

}

class App extends React.Component<Prop, State> {
  constructor(props: Prop) {
    super(props);
  };
  render () {
    return (
        <Router>
          <div className="App">
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </div>
        </Router>
    )
  }
}

export default App;

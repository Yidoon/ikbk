import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.less';

import Home from "@pages/home/home";
import Header from "@comps/layout/header/header";
import Sider from "@comps/layout/sider/sider";
import Content from "@comps/layout/content/content";

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
              login
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

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nofound from './components/layout/Nofound';
import Panel from './components/panel/Panel';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/nofound" component={Nofound}/>
        <Route exact path="/panel" component={Panel}/>
      </Switch>
    </Router>
  );
}

export default App;

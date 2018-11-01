import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import NotFound from '../NotFound';
import NotAllowed from '../NotAllowed';

class Router extends Component {
  render() {
    const Router = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/404' component={NotFound}/>
          <Route exact path='/403' component={NotAllowed}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Router/>
      </Switch>
    );
  }
}

export default Router;

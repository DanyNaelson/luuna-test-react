import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Repos from '../pages/Repos';
import Users from '../pages/Users';

const index = () => {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/usuarios">
            <Users />
          </Route>
          <Route path="/repositorios">
            <Repos />
          </Route>
        </Switch>
    );
};

export default index;
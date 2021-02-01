import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from '../components/containers/User';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Repos from '../pages/Repos';
import Users from '../pages/Users';

const index = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/usuarios/:id">
                <User />
            </Route>
            <Route path="/usuarios">
                <Users />
            </Route>
            <Route path="/repositorios">
                <Repos />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};

export default index;
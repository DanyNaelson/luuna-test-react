import React from 'react';

const index = () => {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    );
};

export default index;
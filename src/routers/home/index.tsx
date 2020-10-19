import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import Home from './pages/Home';

const HomeModule: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default HomeModule;

import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import AddCategories from './pages/AddCategories';
import ListCategories from './pages/ListCategories';

const CategoriesModule: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/categories/list' component={ListCategories} />
        <Route exact path='/categories/add' component={AddCategories} />
      </Switch>
    </>
  );
};

export default CategoriesModule;

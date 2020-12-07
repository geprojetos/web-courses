import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

// Routes
import Categories from "./pages/Categories";

const CategoriesModule: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/categories/list" component={Categories} />
      </Switch>
    </>
  );
};

export default CategoriesModule;

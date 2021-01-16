import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, RouteProps } from "react-router-dom";
import { ScreenClassProvider } from "react-grid-system";

import {
  GlobalProvider,
  useGlobalContext,
  LanguagesProvider,
} from "../assets/context/";

// Imports
const CategoriesModule = lazy(() => import("./categories"));
const HomeModule = lazy(() => import("./home"));

export const PublicRoute: FC<RouteProps | any> = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // const path = props.history.location.pathname;
        if (component) {
          return React.createElement(component, props);
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

export const PrivateRoute: FC<RouteProps | any> = ({ component, ...rest }) => {
  const { token } = useGlobalContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token && component) {
          return React.createElement(component, props);
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

const RootRouter = () => (
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter basename="/web-courses">
      <GlobalProvider>
        <LanguagesProvider>
          <ScreenClassProvider>
            <PublicRoute path="/" component={HomeModule} />
            <Route path="/categories" component={CategoriesModule} />
          </ScreenClassProvider>
        </LanguagesProvider>
      </GlobalProvider>
    </BrowserRouter>
  </Suspense>
);

export default RootRouter;

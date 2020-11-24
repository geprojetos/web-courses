import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, RouteProps } from "react-router-dom";
import { ScreenClassProvider } from "react-grid-system";

import { GlobalProvider, useGlobalContext } from "../assets/context/Global";
import { HistoryProvider, useHistoryContext } from "../assets/context/History";
import { LanguagesProvider } from "../assets/context/Languages";

// Imports
const HomeModule = lazy(() => import("./home"));

export const PublicRoute: FC<RouteProps | any> = ({ component, ...rest }) => {
  const { setPath } = useHistoryContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        const path = props.history.location.pathname;

        if (component) {
          setPath(path);
          return React.createElement(component, props);
        }

        return <Redirect to="/" />;
      }}
    />
  );
};

export const PrivateRoute: FC<RouteProps | any> = ({ component, ...rest }) => {
  const { token } = useGlobalContext();
  const { setPath } = useHistoryContext();
  return (
    <Route
      {...rest}
      render={(props) => {
        const path = props.history.location.pathname;

        if (token && component) {
          setPath(path);
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
        <HistoryProvider>
          <LanguagesProvider>
            <ScreenClassProvider>
              <PublicRoute path="/" component={HomeModule} />
            </ScreenClassProvider>
          </LanguagesProvider>
        </HistoryProvider>
      </GlobalProvider>
    </BrowserRouter>
  </Suspense>
);

export default RootRouter;

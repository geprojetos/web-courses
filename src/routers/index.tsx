import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Imports
const HomeModule = lazy(() => import('./home'));

export interface Router {
  path: string;
  pages: {
    exact: boolean;
    path: string;
    private: boolean;
    component: React.FC;
  }[];
}

const RootRouter = () => (
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      <Route path="/" component={HomeModule} />
    </BrowserRouter>
  </Suspense>
);

export default RootRouter;

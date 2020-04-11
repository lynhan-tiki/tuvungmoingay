import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const Microsite = React.lazy(() => import('./microsite'));
const Home = React.lazy(() => import('./home'));
const About = React.lazy(() => import('./about'));

const WithFallback = (Comp) => (p) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Comp {...p} />
  </Suspense>
);

const App = (props) => {
  return (
    <>
      <Route path="/" exact component={WithFallback(Microsite)} />
      <Route path="/home" component={WithFallback(Home)} />
      <Route path="/about" component={WithFallback(About)} />
    </>
  );
};

export default App;

import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/Globals/scrollToTop';
import Home from './components/Home/Home.component';

const App: FunctionComponent = () => (
  <Router>
    <ScrollToTop />
    <Route path="/" exact>
      <Home />
    </Route>
  </Router>
);

export default App;

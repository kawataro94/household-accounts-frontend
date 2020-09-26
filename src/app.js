import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';

import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Records from './pages/Records';
import Summary from './pages/Summary';
import Config from './pages/Config';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/members" component={Members} />
            <Route path="/records" component={Records} />
            <Route path="/summary" component={Summary} />
            <Route path="/config" component={Config} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
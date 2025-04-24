import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import DonatePage from './components/DonatePage';
import ArkanaInterface from './components/ArkanaInterface';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/donate" component={DonatePage} />
          <Route path="/arkana" component={ArkanaInterface} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
     

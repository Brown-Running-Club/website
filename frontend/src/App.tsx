import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import HealthPage from './pages/HealthPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/health" component={HealthPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

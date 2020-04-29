import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (

    <div>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="container">
              <Route path="/" component={HomePage} />
            </div>
      </header>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

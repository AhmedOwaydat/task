import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/nav'
import Home from './components/home/home'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router className="App">
            <>
                <Navbar />
                <Switch>                    
                    <Route exact path="/" component={Home} />
                </Switch>
            </>
        </Router>
    );
  }
}

export default App;

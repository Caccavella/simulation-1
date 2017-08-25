import React, { Component } from 'react';
import logo from './shelfielogo.png';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import ShelfA from './shelves/ShelfA';
import ShelfB from './shelves/ShelfB';
import ShelfC from './shelves/ShelfC';
import ShelfD from './shelves/ShelfD';
import router from './router/router';


class App extends Component {
  render() {
    return (
      <div className="App">

    
        {router}
      
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import '../App';
import '../App.css';
import logo from '../shelfielogo.png';


class Home extends Component {

  render() {
    return (
        <div>
        <div className="App-header">
        <Link to='/'><img src={logo} className="app-logo" alt=''/></Link>
            <h1>SHELFIE</h1>
      </div>
      <div className="App">
        <Link to="/bins/A" className='shelf'>Shelf A</Link>
        <Link to="/bins/B" className='shelf'>Shelf B</Link>
        <Link to="/bins/C" className='shelf'>Shelf C</Link>
        <Link to="/bins/D" className='shelf'>Shelf D</Link>
      </div>
      </div>
    );
  }
}

export default Home;
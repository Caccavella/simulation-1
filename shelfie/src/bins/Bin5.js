import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from '../shelfielogo.png';


export default class Bin5 extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         shelfA: {}
    //     }
    // }

    render() {
        return (
            <div>
                <div className="App-header">
                    <Link to='/'><img src={logo} className="app-logo" alt='' /></Link>
                </div>
                <div>
                    <h1>Bin 5</h1>
                </div>
                <h3>Name</h3>
                <input type="text"/>
                <div>Name Price edit delete
                    </div>
            </div>
        )
    }
}
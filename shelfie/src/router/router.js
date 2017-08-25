import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../shelves/Home';
import ShelfA from '../shelves/ShelfA';
import ShelfB from '../shelves/ShelfB';
import ShelfC from '../shelves/ShelfC';
import ShelfD from '../shelves/ShelfD';
import Bin1 from '../bins/Bin1';
import Bin2 from '../bins/Bin2';
import Bin3 from '../bins/Bin3';
import Bin4 from '../bins/Bin4';
import Bin5 from '../bins/Bin5';


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bins' render={() => {
            return (
            <Switch>
                <Route path='/bins/A5' component={Bin5}/>
                <Route path='/bins/A4' component={Bin4}/>
                <Route path='/bins/A3' component={Bin3}/>
                <Route path='/bins/A2' component={Bin2}/>
                <Route path='/bins/A1' component={Bin1}/>
                <Route path='/bins/A' component={ShelfA}/>
                <Route path='/bins/B5' component={Bin5}/>
                <Route path='/bins/B4' component={Bin4}/>
                <Route path='/bins/B3' component={Bin3}/>
                <Route path='/bins/B2' component={Bin2}/>
                <Route path='/bins/B1' component={Bin1}/>
                <Route path='/bins/B' component={ShelfB}/>
                <Route path='/bins/C5' component={Bin5}/>
                <Route path='/bins/C4' component={Bin4}/>
                <Route path='/bins/C3' component={Bin3}/>
                <Route path='/bins/C2' component={Bin2}/>
                <Route path='/bins/C1' component={Bin1}/>
                <Route path='/bins/C' component={ShelfC}/>
                <Route path='/bins/D5' component={Bin5}/>
                <Route path='/bins/D4' component={Bin4}/>
                <Route path='/bins/D3' component={Bin3}/>
                <Route path='/bins/D2' component={Bin2}/>
                <Route path='/bins/D1' component={Bin1}/>
                <Route path='/bins/D' component={ShelfD}/>
            </Switch>
            )
        }} />
    </Switch>
)
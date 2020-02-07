import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Header from './Header';


export default() => {
    return(
        <Router>
            <Header/>
            <Route path="/my_note1" component={Page1}/>
            <Route path="/my_note2" component={Page2}/>
            <Route path="/my_note3" component={Page3}/>
        </Router>
    )
}

import React, { Component } from 'react';
import Checkout from '../screens/checkout/Checkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {

    render() {
        return (
            <Router>
                <div className="main-container">

                    {/*<Route exact path='/' render={(props) => <Login />} />
                    <Route path='/home' component={Home} /> */}
                    <Route path='/checkout' component={Checkout} />
                </div>
            </Router>
        )
    }
}

export default Controller;
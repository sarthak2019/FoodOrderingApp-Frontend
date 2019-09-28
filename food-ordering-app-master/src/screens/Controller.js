import React, { Component } from 'react';
// import Checkout from '../screens/checkout/Checkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from '../screens/details/Details';

class Controller extends Component {

    render() {
        return (
            <Router>
                <div className="main-container">

                    {/*<Route exact path='/' render={(props) => <Login />} />
                    <Route path='/home' component={Home} /> */}
                    {/* <Route path='/checkout' component={Checkout} /> */}
                    <Route path='/details' component={Details} />
                </div>
            </Router>
        )
    }
}

export default Controller;
import React, { Component } from 'react';
import Checkout from '../screens/checkout/Checkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Details from '../screens/details/Details';
import { common } from '@material-ui/core/colors';
import Header from '../common/header/Header';

class Controller extends Component {

    render() {
        return (
            <Router>
                <div className="main-container">

                    {/*<Route exact path='/' render={(props) => <Login />} />
                    <Route path='/home' component={Home} /> */}
                    <Route path='/checkout' component={Checkout} />
		    <Route exact path='/' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/restaurant/:id' component={Details} />
                </div>
            </Router>
        )
    }
}

export default Controller;
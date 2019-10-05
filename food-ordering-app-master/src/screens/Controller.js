import React, { Component } from 'react';
// import Checkout from '../screens/checkout/Checkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< HEAD
//import Details from '../screens/details/Details';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import { common } from '@material-ui/core/colors';
import Header from '../common/Header';
=======
import Details from '../screens/details/Details';
>>>>>>> part-iii

class Controller extends Component {

    render() {
        return (
            <Router>
                <div className="main-container">

                    {/*<Route exact path='/' render={(props) => <Login />} />
                    <Route path='/home' component={Home} /> */}
                    {/* <Route path='/checkout' component={Checkout} /> */}
                    {/* <Route path='/details' component={Details} /> */}
                    <Route exact path='/' component={Home} />
                    <Route path='/profile' component={Profile} />
                    {/* <Route path='/' component={Header} /> */}
                </div>
            </Router>
        )
    }
}

export default Controller;
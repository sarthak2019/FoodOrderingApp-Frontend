import React, { Component } from 'react';
import './Profile.css';
import Header from '../../common/Header';

class Profile extends Component {
    constructor(props) {
        super(props);
        if (sessionStorage.getItem('access-token') == null) {
            props.history.replace('/');
        }
        this.state = {
            first_name: sessionStorage.getItem("first_name"),
            last_name: sessionStorage.getItem("last_name"),
            email_address: sessionStorage.getItem("email_address"),
            contact_number: sessionStorage.getItem("contact_number")
        }
    }

    render() {
        return (
            <div>
                <Header
                    logoutHandler={this.logout}
                    handleProfile={this.navigateToProfile} />
                <div>First name: {this.state.first_name}<br />
                    Last name: {this.state.last_name}<br />
                    Email address: {this.state.email_address}<br />
                    Contact Number: {this.state.contact_number}<br /></div>
            </div>

        )
    }

    logout = () => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }

    navigateToProfile = () => {
        this.props.history.push('/profile');
    }
}

export default Profile;
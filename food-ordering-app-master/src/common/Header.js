import React, { Component } from 'react';
import './Header.css';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Header extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <span style={{ width: "33%" }}>
                        <FastfoodIcon style={{ color: "white" }}></FastfoodIcon>
                    </span>
                    <span style={{ width: "33%" }}>
                        <SearchIcon style={{ color: "white", verticalAlign: "middle" }}>
                        </SearchIcon> 
                        <Input id="time" style={{ width: "220px", color: "white" }} type="text" placeholder="Search by Restaurant Name">
                        </Input>
                    </span>
                    <span style={{ width: "33%", textAlign: "right" }}>
                        <Button variant="contained" onClick={this.loginClickHandler} color="default">
                            <AccountCircleIcon></AccountCircleIcon>
                            LOGIN
                        </Button>
                    </span>


                </header>
            </div>
        )

    }
}

export default Header;
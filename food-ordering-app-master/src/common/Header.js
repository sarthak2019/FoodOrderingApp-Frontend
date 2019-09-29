import React, { Component } from 'react';
import './Header.css';
import { constants } from './utils';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    )
}

class Header extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            data: [],
            search: "",
            message: null
        }

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
                        <Input id="search" name = "search"
                        style={{ width: "220px", color: "white" }} type="text" 
                        placeholder="Search by Restaurant Name" onChange={this.searchChangeHandler}>
                        </Input>
                    </span>
                    <span style={{ width: "33%", textAlign: "right" }}>
                        <Button variant="contained" onClick={this.openModalHandler} color="default">
                            <AccountCircleIcon></AccountCircleIcon>
                            LOGIN
                        </Button>
                    </span>


                </header>
                <div className="card-details">
                    {(this.state.data !== null) && (this.state.data !== undefined) ?
                     (this.state.data.map(restaurant => (
                        
                        <Card key = {restaurant.id} style={{ align: 'left', width: "25%" }}>
                            <CardContent>
                                <div>
                                    <img 
                                    style={{ height: '150px', width: '100%', align: 'left'}}
                                    src={restaurant.photo_URL} alt="restaurant_picture"></img>
                                    <div style={{ fontSize: "18px" }}>{restaurant.restaurant_name}</div>
                                    <div>{restaurant.categories}</div>
                                    <div className="card-details">
                                        <span style={{ width: "45%", height: "40px", backgroundColor: "yellow", align: 'left' }}>
                                            <StarIcon></StarIcon>&nbsp;&nbsp;{restaurant.customer_rating}&nbsp;&nbsp;({restaurant.number_customers_rated})
                                        </span>
                                        <span style={{ width: "45%", align: 'right' }}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x20b9; {restaurant.average_price} for two
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )))  : null
                        
                   }
                   <div>{this.state.message}</div>
                </div>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Login"
                    onRequestClose={this.closeModalHandler}
                    style={customStyles}
                >
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>

                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Contact No.</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginpassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            {this.state.loggedIn === true &&
                                <FormControl>
                                    <span className="successText">
                                        Login Successful!
                                    </span>
                                </FormControl>
                            }
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>
                    }
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname">First Name</InputLabel>
                                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstNameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastNameChangeHandler} />
                                <FormHelperText className={this.state.lastnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" type="text" email={this.state.email} onChange={this.inputEmailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="registerPassword">Password</InputLabel>
                                <Input id="registerPassword" type="password" registerpassword={this.state.registerPassword} onChange={this.inputRegisterPasswordChangeHandler} />
                                <FormHelperText className={this.state.registerPasswordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contact">Contact No.</InputLabel>
                                <Input id="contact" type="text" contact={this.state.contact} onChange={this.inputContactChangeHandler} />
                                <FormHelperText className={this.state.contactRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            {this.state.registrationSuccess === true &&
                                <FormControl>
                                    <span className="successText">
                                        Registration Successful. Please Login!
                                      </span>
                                </FormControl>
                            }
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>
        )

    }

    getRestaurantData = (restaurantName) => {
        let that = this;
        let url = `${constants.findRestaurant}/${restaurantName}`;
        console.log(restaurantName)
        console.log(url)
        return fetch(url, {
            method: 'GET',
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.restaurants === null){
                this.setState({message: "No restaurant with the given name."})
            }
            if(jsonResponse.restaurants !== null){
                this.setState({message: null})
            }
            that.setState({
                data: jsonResponse.restaurants
            });
            console.log(this.state.data);
        }).catch((error) => {
            console.log('error restaurant data', error);
        });
    }

    searchChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        this.getRestaurantData(this.state.search)
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });

        let dataLogin = null;
        let xhrLogin = new XMLHttpRequest();
        let that = this;
        xhrLogin.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                sessionStorage.setItem("uuid", JSON.parse(this.responseText).id);
                sessionStorage.setItem("access-token", xhrLogin.getResponseHeader("access-token"));

                that.setState({
                    loggedIn: true
                });

                that.closeModalHandler();
            }
        });

        let url = `${constants.loginUrl}`;
        xhrLogin.open("POST", url);
        xhrLogin.setRequestHeader("authorization", "Basic " + window.btoa(this.state.username + ":" + this.state.loginPassword));
        xhrLogin.setRequestHeader("Content-Type", "application/json");
        xhrLogin.setRequestHeader("Cache-Control", "no-cache");
        xhrLogin.send(dataLogin);
    }

    closeModalHandler = () => {
        this.setState({ modalIsOpen: false });
    } 
    
    openModalHandler = () => {
        this.setState({
            modalIsOpen: true,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired: "dispNone",
            loginPassword: "",
            firstnameRequired: "dispNone",
            firstname: "",
            lastnameRequired: "dispNone",
            lastname: "",
            emailRequired: "dispNone",
            email: "",
            registerPasswordRequired: "dispNone",
            registerPassword: "",
            contactRequired: "dispNone",
            contact: ""
        });
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }
    
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

}

export default Header;